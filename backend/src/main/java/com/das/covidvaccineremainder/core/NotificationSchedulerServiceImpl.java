/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.core;

import com.das.covidvaccineremainder.SchedulerConstants;
import com.das.covidvaccineremainder.message.CowinSlotResponse;
import com.das.covidvaccineremainder.message.parse.Center;
import com.das.covidvaccineremainder.message.parse.Session;
import com.das.covidvaccineremainder.model.Reminders;
import com.das.covidvaccineremainder.prototype.APIExchange;
import com.das.covidvaccineremainder.repositories.RemindersDAO;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@Data
public class NotificationSchedulerServiceImpl
{

    @Autowired
    private APIExchange apiExchange;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private RemindersDAO remindersDAO;

    // runs every 60 seconds
    @Scheduled(fixedRate = 60000)
    public void processAlertRequests () throws UnsupportedEncodingException
    {

        Pageable pageable =
            PageRequest.of(0, SchedulerConstants.ALERT_REQUEST_FETCH_SIZE);

        Page<Reminders> remindersPage =
            remindersDAO.fetchAll(SchedulerConstants.MAX_ALERTS, pageable);

        if (remindersPage.getContent() != null) {
            System.out.println("Processing request for size: " + remindersPage.getContent().size());
            List<Reminders> remindersList = remindersPage.getContent();
            for (Reminders r : remindersList) {
                checkSlotAvailability(r);
            }
        }
    }

    @Transactional
    public boolean checkSlotAvailability (Reminders reminders)
        throws UnsupportedEncodingException
    {

        CowinSlotResponse cowinSlotResponse;
        List<String> centers = null;
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String strDate = formatter.format(new Date());
        // send notification max 50 times for now
        if (reminders.getEmailNotifyCount() < SchedulerConstants.MAX_ALERTS) {

            String pinCodes = reminders.getPinCodes();
            String[] pinCodeArray = pinCodes.split(",");

            for (String pin : pinCodeArray) {
                cowinSlotResponse = apiExchange.getSlots(pin, strDate);

                // check slot available centers
                if (null != cowinSlotResponse) {
                    centers = filterCentersHavingSlots(
                        cowinSlotResponse.getCenters(),
                        reminders.getAgeGroup()
                    );
                }
            }

            //send email alert
            if (centers != null && centers.size() > 0) {
                sendEmail(reminders.getEmailAddress(), parseCenters(centers));
            }
            else {
                sendEmail(reminders.getEmailAddress(), "No slots available for the next 7 days across all centers. Will keep you notified.");
            }

            System.out.println(
                "Email Notification sent to: " + reminders.getEmailAddress()
                    + " for pin codes: " + reminders.getPinCodes());

            // increment notification sent count
            reminders.setEmailNotifyCount(reminders.getEmailNotifyCount() + 1);
            remindersDAO.saveAndFlush(reminders);
        }

        return true;
    }

    private List<String> filterCentersHavingSlots (
        List<Center> centers, int ageLimit)
    {

        List<String> result = new ArrayList<>();

        if (null != centers) {
            for (Center c : centers) {

                if (null != c.getSessions()) {
                    for (Session s : c.getSessions()) {
                        if (s.getMin_age_limit() == ageLimit
                            && s.getAvailable_capacity() > 0)
                        {
                            result.add(
                                c.getName() + ", address: " + c.getAddress());
                        }
                    }
                }
            }
        }
        return result;
    }

    String parseCenters (List<String> centers)
    {
        StringBuilder message = new StringBuilder();
        Integer count = 1;

        for (String c : centers) {
            message.append(count + ". ");
            message.append(c);
            message.append("\n");
            count++;
        }
        return message.toString();
    }

    void sendEmail (String email, String message)
    {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);

        msg.setSubject("COVID Vaccination slot available near you!!");
        msg.setText("Hello Sir, \n " + message
            + " \n Thanks, Team GoShield Udaipur(Raj.)");

        javaMailSender.send(msg);

    }
}

/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.core;

import com.das.covidvaccineremainder.message.CowinSlotResponse;
import com.das.covidvaccineremainder.message.parse.Center;
import com.das.covidvaccineremainder.message.parse.Session;
import com.das.covidvaccineremainder.model.AlertRequestQueue;
import com.das.covidvaccineremainder.prototype.APIExchange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class NotificationScheduler
{

    @Autowired
    private APIExchange apiExchange;

    @Autowired
    private JavaMailSender javaMailSender;

    public int checkSlotAvailability (AlertRequestQueue alertRequestQueue)
        throws UnsupportedEncodingException
    {

        CowinSlotResponse cowinSlotResponse;
        List<String> centers = null;
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String strDate = formatter.format(new Date());
        // send notification max 4 times
        if (alertRequestQueue.getEmailNotifyCount() < 5) {

            String pinCodes = alertRequestQueue.getPinCodes();
            String[] pinCodeArray = pinCodes.split(",");

            for (String pin : pinCodeArray) {
                cowinSlotResponse = apiExchange.getSlots(pin, strDate);

                // check slot available centers
                if (null != cowinSlotResponse) {
                    centers =
                        filterCentersHavingSlots(cowinSlotResponse.getCenters(),
                            alertRequestQueue.getAgeGroup()
                        );
                }
            }

            //send email alert
            if (centers != null && centers.size() > 0) {
                sendEmail(alertRequestQueue.getEmailAddress(),
                    parseCenters(centers)
                );
            }
            // increment notification sent count
            return alertRequestQueue.getEmailNotifyCount() + 1;
        }

        return alertRequestQueue.getEmailNotifyCount();
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

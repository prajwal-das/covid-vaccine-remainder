/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.core;

import com.das.covidvaccineremainder.message.APIResponse;
import com.das.covidvaccineremainder.message.EnqueueRequest;
import com.das.covidvaccineremainder.prototype.EnqueueService;
import com.das.covidvaccineremainder.repositories.Reminders;
import com.das.covidvaccineremainder.repositories.RemindersDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
public class EnqueueServiceImpl implements EnqueueService
{

    @Autowired
    private RemindersDAO remindersDAO;

    @Override
    public APIResponse enqueueNotificationRequest (
        EnqueueRequest enqueueRequest)
    {
        APIResponse response = new APIResponse();
        if (!enqueueRequest.validate()) {
            response.setStatus(HttpStatus.BAD_REQUEST);
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            return response;
        }
        enqueueRequest.formatPinCodes();

        // push request to database
        boolean success = addRequestToQueue(enqueueRequest);

        if (success) {
            response.setStatus(HttpStatus.OK);
            response.setStatusCode(HttpStatus.OK.value());
        }
        else {
            response.setStatus(HttpStatus.BAD_REQUEST);
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
        }
        return response;
    }

    private boolean addRequestToQueue (EnqueueRequest enqueueRequest)
    {
        Reminders reminders;

        reminders = remindersDAO.findByEmail(enqueueRequest.getEmail());

        if (reminders == null) {
            reminders = new Reminders();
            reminders.setEmailAddress(enqueueRequest.getEmail());
            reminders.setEmailNotifyCount(1);
        }
        else if (reminders.getEmailNotifyCount() >= 5) {
            // not accepting any more request after 4 notifications already sent
            return false;
        }
        reminders.setAgeGroup(enqueueRequest.getAgeGroup());
        reminders.setPinCodes(enqueueRequest.getPinCodes());
        remindersDAO.save(reminders);
        return true;
    }
}

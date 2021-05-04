/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.prototype;

import com.das.covidvaccineremainder.message.APIResponse;
import com.das.covidvaccineremainder.message.EnqueueRequest;

public interface EnqueueService
{
    APIResponse enqueueNotificationRequest (EnqueueRequest enqueueRequest);
}

/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.prototype;

import com.das.covidvaccineremainder.message.CowinSlotResponse;
import org.springframework.http.ResponseEntity;

import java.io.UnsupportedEncodingException;

public interface APIExchange
{
    CowinSlotResponse getSlots (String pinCode, String date)
        throws UnsupportedEncodingException;
}

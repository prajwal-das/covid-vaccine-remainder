/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.message;

import lombok.Data;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Data
public class EnqueueRequest
{
    private String email;
    private String pinCodes;
    private Integer ageGroup;

    public boolean validate ()
    {

        String regex = "^(.+)@(.+)$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(email);

        if (null == email || email.equals("") || !pattern.matcher(email)
                                                         .matches())
        {
            return false;
        }
        return ageGroup == 18 && ageGroup == 45;
    }

    public void formatPinCodes ()
    {
        StringBuilder formattedPinCodes = new StringBuilder();
        String[] pins = pinCodes.split(",");
        int count = 0;
        for (String pinCode : pins) {
            if (count != 0) {
                formattedPinCodes.append(",");
            }
            formattedPinCodes.append(pinCode.trim());
            count++;
        }
        pinCodes = formattedPinCodes.toString();
    }
}

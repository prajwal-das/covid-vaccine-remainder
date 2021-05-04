/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.message.parse;

import lombok.Data;

import java.util.List;

@Data
public class Session
{
    private String session_id;
    private String date;
    private Integer available_capacity;
    private Integer min_age_limit;
    private List<String> slots;

}

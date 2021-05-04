/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.message.parse;

import lombok.Data;

import java.util.List;

@Data
public class Center
{
    private Integer center_id;
    private String name;
    private String address;
    private String state_name;
    private String district_name;
    private String block_name;
    private Integer pincode;
    private String from;
    private String to;
    private String fee_type;
    private List<Session> sessions;
}

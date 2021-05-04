/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.model;

import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class AlertRequestQueue
{
    private String name;
    private String emailAddress;
    private String pinCodes; // comma separated pin codes
    private Integer ageGroup;
    private String feeType;
    private String vaccineName;
    private Integer emailNotifyCount;

}

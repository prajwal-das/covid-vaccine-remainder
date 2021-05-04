/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.message;

import com.das.covidvaccineremainder.message.parse.Center;
import lombok.Data;

import java.util.List;

@Data
public class CowinSlotResponse
{
    private List<Center> centers;
}

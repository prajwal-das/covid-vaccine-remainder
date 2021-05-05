package com.das.covidvaccineremainder.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Reminders
{

    @Id
    private Long id;

    private String name;
    private String emailAddress;
    private String pinCodes; // comma separated pin codes
    private Integer ageGroup;
    private String feeType;
    private String vaccineName;
    private Integer emailNotifyCount;
}

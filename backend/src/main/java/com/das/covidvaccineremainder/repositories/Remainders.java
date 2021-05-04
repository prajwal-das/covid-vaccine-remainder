package com.das.covidvaccineremainder.repositories;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Remainders {

    @Id
    private Long id;

    private String name;
    private String email;
}

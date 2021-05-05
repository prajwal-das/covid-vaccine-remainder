package com.das.covidvaccineremainder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class CovidVaccineRemainderApplication
{

    public static void main (String[] args)
    {
        SpringApplication.run(CovidVaccineRemainderApplication.class, args);
    }

}

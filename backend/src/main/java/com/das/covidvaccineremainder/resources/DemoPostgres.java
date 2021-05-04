package com.das.covidvaccineremainder.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoPostgres {

    @GetMapping("/")
    public static String demo() {
        return "Success";
    }
}

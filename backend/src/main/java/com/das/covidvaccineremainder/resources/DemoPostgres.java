package com.das.covidvaccineremainder.resources;

import com.das.covidvaccineremainder.message.APIResponse;
import com.das.covidvaccineremainder.message.EnqueueRequest;
import com.das.covidvaccineremainder.model.Reminders;
import com.das.covidvaccineremainder.prototype.EnqueueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoPostgres {

    @Autowired
    EnqueueService enqueueService;

    @GetMapping("/")
    public static String demo() {
        return "Success";
    }

    @PostMapping("/vaccine/alert")
    public APIResponse demo (@RequestBody EnqueueRequest request) {
        return enqueueService.enqueueNotificationRequest(request);
    }
}

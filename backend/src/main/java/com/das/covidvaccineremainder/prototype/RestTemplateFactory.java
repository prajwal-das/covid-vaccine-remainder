/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.prototype;

import org.springframework.web.client.RestTemplate;

public interface RestTemplateFactory
{
    RestTemplate getRestTemplate ();

    RestTemplate getRestTemplate (int timeout);
}

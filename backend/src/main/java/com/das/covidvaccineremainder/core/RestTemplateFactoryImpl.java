/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.core;

import com.das.covidvaccineremainder.prototype.RestTemplateFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

@Component
public class RestTemplateFactoryImpl implements RestTemplateFactory
{
    @Override
    public RestTemplate getRestTemplate ()
    {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters()
                    .add(
                        0,
                        new StringHttpMessageConverter(StandardCharsets.UTF_8)
                    );
        return restTemplate;
    }

    @Override
    public RestTemplate getRestTemplate (int timeout)
    {
        SimpleClientHttpRequestFactory factory =
            new SimpleClientHttpRequestFactory();

        factory.setConnectTimeout(timeout);
        factory.setReadTimeout(timeout);

        return new RestTemplate(factory);
    }
}

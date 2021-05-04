/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.core;

import com.das.covidvaccineremainder.message.CowinSlotResponse;
import com.das.covidvaccineremainder.prototype.APIExchange;
import com.das.covidvaccineremainder.prototype.RestTemplateFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Arrays;

@Component
public class APIExchangeImpl implements APIExchange
{

    @Autowired
    private RestTemplateFactory restTemplateFactory;

    @Override
    public CowinSlotResponse getSlots (String pinCode, String date)
        throws UnsupportedEncodingException
    {

        // Declaration
        UriComponentsBuilder uriBuilder;
        HttpHeaders headers;

        String httpUrl =
            "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin";

        uriBuilder = UriComponentsBuilder.fromHttpUrl(httpUrl);
        uriBuilder.queryParam("pincode", pinCode);
        uriBuilder.queryParam("date", date);

        headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        ResponseEntity<CowinSlotResponse> responseEntity =
            restTemplateFactory.getRestTemplate().exchange(
                formatUriString(uriBuilder.toUriString()),
                HttpMethod.GET,
                new HttpEntity<>(headers),
                //            Object.class);
                CowinSlotResponse.class
            );
        return responseEntity.getBody();
    }

    public String formatUriString (String urlString)
        throws UnsupportedEncodingException
    {

        if (urlString != null && urlString != "") {
            return URLDecoder.decode(urlString, "UTF-8");
        }
        return urlString;
    }
}

/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.message;

import org.springframework.http.HttpStatus;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = "APIResponse")
@XmlRootElement(name = "APIResponse")
@XmlAccessorType(XmlAccessType.NONE)
public class APIResponse

{
    @XmlElement
    private HttpStatus status;

    @XmlElement
    private int statusCode;

    public HttpStatus getStatus ()
    {
        return status;
    }

    public void setStatus (HttpStatus status)
    {
        this.status = status;
    }

    @Override
    public String toString ()
    {
        return "APIResponse{" + "status=" + status + ", statusCode="
            + statusCode + '}';
    }

    public int getStatusCode ()
    {
        return statusCode;
    }

    public void setStatusCode (int statusCode)
    {
        this.statusCode = statusCode;
    }

}

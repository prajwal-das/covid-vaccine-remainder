/*
    Copyright (c) 2021 SAP Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: Vikram Singh Chouhan
*/
package com.das.covidvaccineremainder.repositories;

import com.das.covidvaccineremainder.model.Reminders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RemindersDAO extends JpaRepository<Reminders, Long>
{

    @Query("select r from Reminders r where r.emailAddress = :email")
    Reminders findByEmail (
        @Param("email")
            String email);

    @Query("select r from Reminders r where r.emailNotifyCount < :alertCountSent")
    Page<Reminders> fetchAll (
        @Param("alertCountSent")
            int alertCountSent, Pageable pageable);
}

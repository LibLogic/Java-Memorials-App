package com.liblogic.memorialApp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Subject {

    private final UUID id;
    private final String firstName;
    private final String middleName;
    private final String lastName;
    private final String maidenName;
    private final String birthYear;
    private final String deathYear;
    private final String city;
    private final String state;
    private final String county;
    private final String country;
    private final String cemeteryName;

    public Subject(@JsonProperty("id") UUID id, String firstName, String middleName, String lastName, String maidenName, String birthYear, String deathYear, String city, String state, String county, String country, String cemeteryName) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.maidenName = maidenName;
        this.birthYear = birthYear;
        this.deathYear = deathYear;
        this.city = city;
        this.state = state;
        this.county = county;
        this.country = country;
        this.cemeteryName = cemeteryName;
    }

    public UUID getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getLastName() {
        return lastName;
    }
    public String getMaidenName() {
        return maidenName;
    }

    public String getBirthYear() {
        return birthYear;
    }

    public String getDeathYear() {
        return deathYear;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getCounty() {
        return county;
    }

    public String getCountry() {
        return country;
    }

    public String getCemeteryName() {
        return cemeteryName;
    }
}


package com.liblogic.memorialApp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Subject {
    private final UUID id;
    @NotBlank
    public final String firstName;
    @NotBlank
    private final String middleName;
    @NotBlank
    private final  String lastName;
    @NotBlank
    private final String maidenName;
    @NotBlank
    private final String birthYear;
    @NotBlank
    private final String deathYear;
    @NotBlank
    private final String city;
    @NotBlank
    private final String state;
    @NotBlank
    private final String county;
    @NotBlank
    private final String country;
    @NotBlank
    private final String cemeteryName;

//    private Photos photos;
//
//    private Flowers flowers;
//
//    private Donors donors;
//
//    private Parents parents;

//    private GraveInfo graveInfo;

    public Subject(@JsonProperty("id") UUID id, @JsonProperty("firstName") String firstName, @JsonProperty("middleName") String middleName, @JsonProperty("lastName") String lastName, @JsonProperty("maidenName") String maidenName, @JsonProperty("birthYear") String birthYear, @JsonProperty("deathYear") String deathYear, @JsonProperty("city") String city, @JsonProperty("state") String state, @JsonProperty("county") String county, @JsonProperty("country") String country, @JsonProperty("cemeteryName") String cemeteryName) {
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


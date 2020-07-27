package com.liblogic.memorialApp.model;

import java.util.UUID;

public class Subject {

    private final UUID id;
    private final String firstName;

    public Subject(UUID id, String firstName) {
        this.id = id;
        this.firstName = firstName;
    }

    public String getFirstName() {
        return firstName;
    }
}

//    private final String middleName;
//    private final String lastName;
//    private final String maidenName;
//    private final String birthYear;
//    private final String deathYear;
//    private final String city;
//    private final String state;
//    private final String county;
//    private final String country;
//    private final String cemeteryName;

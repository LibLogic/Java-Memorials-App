package com.liblogic.memorialApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Data
@AllArgsConstructor
@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    public String firstName;
    private String middleName;
    private String lastName;
    private String maidenName;
    private String birthYear;
    private String deathYear;
    private String city;
    private String state;
    private String county;
    private String country;
    private String cemeteryName;
    @Embedded
    private Photos photos;
    @Embedded
    private Parents parents;
    @Embedded
    private Flowers flowers;
    @Embedded
    private Donors donors;
    @Embedded
    private GraveInfo graveInfo;

    public Subject () {}

}


package com.liblogic.memorialApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

@Data
@AllArgsConstructor
@Embeddable
public class Photos {
    private String mainPhoto;
    @Embedded
    private SubjectPhotos subjectPhotos;
    @Embedded
    private FamilyPhotos familyPhotos;

    public Photos(){}
}

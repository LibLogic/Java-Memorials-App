package com.liblogic.memorialApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

@Data
@AllArgsConstructor
@Embeddable
public class Parents {
    private String mother;
    private String father;
    @Embedded
    private FullChildren fullChildren;
    @Embedded
    private HalfChildren halfChildren;

    public Parents(){}
}

package com.liblogic.memorialApp.model;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

@Data
@AllArgsConstructor
@Embeddable
public class Donors {
    private String restHome;
    @Embedded
    private Individual individual;

    public Donors(){}
}

package com.liblogic.memorialApp.model;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Embeddable;

@Data
@AllArgsConstructor
@Embeddable
public class Individual {
    private List<Individual> individual = new ArrayList<>();

    public Individual (){}
}

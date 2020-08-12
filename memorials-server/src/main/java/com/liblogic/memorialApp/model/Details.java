package com.liblogic.memorialApp.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Embeddable;

@Data
@AllArgsConstructor
@Embeddable

public class Details {
 private List<Details> details = new ArrayList<>();

 public Details(){}
}

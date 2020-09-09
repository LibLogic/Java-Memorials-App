package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Individuals {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String donor;
	
	@ManyToOne
	@JsonIgnore
	private Donors donors;
	
	public Individuals() {}
	
	public Individuals(Long id, String donor, Donors donors) {
		super();
		this.id = id;
		this.donor = donor;
		this.donors = donors;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDonor() {
		return donor;
	}

	public void setDonor(String donor) {
		this.donor = donor;
	}

	public Donors getDonors() {
		return donors;
	}

	public void setDonors(Donors donors) {
		this.donors = donors;
	}
}

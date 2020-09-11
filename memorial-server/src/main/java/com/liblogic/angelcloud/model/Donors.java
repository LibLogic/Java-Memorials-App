package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Donors {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String donor;
	
	@ManyToOne
	@JsonIgnore
	private Sponsors sponsors;
	
	public Donors() {}
	
	public Donors(Long id, String donor, Sponsors sponsors) {
		super();
		this.id = id;
		this.donor = donor;
		this.sponsors = sponsors;
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

	public Sponsors getSponsors() {
		return sponsors;
	}

	public void setSponsors(Sponsors sponsors) {
		this.sponsors = sponsors;
	}
}

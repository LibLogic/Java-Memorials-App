package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Contributors {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String donorName;
	
	@ManyToOne
	@JsonIgnore
	private Donors donors;
	
	public Contributors() {}
	
	public Contributors(Long id, String donorName, Donors donors) {
		super();
		this.id = id;
		this.donorName = donorName;
		this.donors = donors;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDonorName() {
		return donorName;
	}

	public void setDonorName(String donorName) {
		this.donorName = donorName;
	}

	public Donors getDonors() {
		return donors;
	}

	public void setDonors(Donors donors) {
		this.donors = donors;
	}
}

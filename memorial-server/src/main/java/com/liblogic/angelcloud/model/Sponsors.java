package com.liblogic.angelcloud.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Sponsors {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @JsonIgnore
	private Long id;
	
	private String sponsor;
	
	@OneToMany(mappedBy="sponsors", cascade=CascadeType.ALL)
	private List<Donors> donors;
	
	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
    private Burial burial;
	
	public Sponsors() {}
	
	public Sponsors(Burial burial) {
		this.burial = burial;
	}
	
	public Sponsors(Long id, String sponsor, Burial burial) {
		this.id = id;
		this.sponsor = sponsor;
		this.burial = burial;
	}
	
	public Sponsors(Long id, String sponsor, List<Donors> donors, Burial burial) {
		super();
		this.id = id;
		this.sponsor = sponsor;
		this.donors = donors;
		this.burial = burial;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSponsor() {
		return sponsor;
	}

	public void setSponsor(String sponsor) {
		this.sponsor = sponsor;
	}

	public List<Donors> getDonors() {
		return donors;
	}

	public void setDonors(List<Donors> donors) {
		this.donors = donors;
	}

	public Burial getBurial() {
		return burial;
	}

	public void setBurial(Burial burial) {
		this.burial = burial;
	}

}

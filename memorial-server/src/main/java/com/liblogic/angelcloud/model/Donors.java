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
public class Donors {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String restHome;
	
	@OneToMany(mappedBy="donors", cascade=CascadeType.ALL)
	private List<Contributors> individuals;
	
	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
    private Burial burial;
	
	public Donors() {}
	
	public Donors(Long id, String restHome, List<Contributors> individuals, Burial burial) {
		super();
		this.id = id;
		this.restHome = restHome;
		this.individuals = individuals;
		this.burial = burial;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRestHome() {
		return restHome;
	}

	public void setRestHome(String restHome) {
		this.restHome = restHome;
	}

	public List<Contributors> getIndividuals() {
		return individuals;
	}

	public void setIndividuals(List<Contributors> individuals) {
		this.individuals = individuals;
	}

	public Burial getBurial() {
		return burial;
	}

	public void setBurial(Burial burial) {
		this.burial = burial;
	}

}

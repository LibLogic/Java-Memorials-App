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
public class Flowers {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	@OneToMany(mappedBy="flowers", cascade=CascadeType.ALL)
	List<Details> details;
	
	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
    private Burial burial;

	public Flowers() {}
	
	public Flowers(Long id, List<Details> details, Burial burial) {
		super();
		this.id = id;
		this.details = details;
		this.burial = burial;
	}

	public Long getId() {
		return id;
	}

	public List<Details> getDetails() {
		return details;
	}

	public void setDetails(List<Details> details) {
		this.details = details;
	}

	public Burial getBurial() {
		return burial;
	}

	public void setBurial(Burial burial) {
		this.burial = burial;
	}

}

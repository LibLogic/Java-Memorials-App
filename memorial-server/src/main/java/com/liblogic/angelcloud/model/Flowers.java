package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Flowers {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	private String leftBy;
	private String date;
	
	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
	private Burial burial;
	
	
	public Flowers() {}

	public Flowers(Long id, String leftBy, String date, Burial burial) {
		super();
		this.id = id;
		this.leftBy = leftBy;
		this.date = date;
		this.burial = burial;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLeftBy() {
		return leftBy;
	}

	public void setLeftBy(String leftBy) {
		this.leftBy = leftBy;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}

	public Burial getBurial() {
		return burial;
	}

	public void setBurial(Burial burial) {
		this.burial = burial;
	}

}

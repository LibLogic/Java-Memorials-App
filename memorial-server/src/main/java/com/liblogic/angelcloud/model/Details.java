package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Details {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	private String leftBy;
	private String date;
	
	@ManyToOne
	@JsonIgnore
	private Flowers flowers;
	
	public Details() {}

	public Details(Long id, String leftBy, String date, Flowers flowers) {
		super();
		this.id = id;
		this.leftBy = leftBy;
		this.date = date;
		this.flowers = flowers;
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

	public Flowers getFlowers() {
		return flowers;
	}

	public void setFlowers(Flowers flowers) {
		this.flowers = flowers;
	}

}

package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class HalfChildren {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String halfChild;
	
	@ManyToOne
	@JsonIgnore
	private Parents parents;
	
	public HalfChildren() {}

	public HalfChildren(Long id, String halfChild, Parents parents) {
		super();
		this.id = id;
		this.halfChild = halfChild;
		this.parents = parents;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getHalfChild() {
		return halfChild;
	}

	public void setHalfChild(String halfChild) {
		this.halfChild = halfChild;
	}

	public Parents getParents() {
		return parents;
	}

	public void setParents(Parents parents) {
		this.parents = parents;
	}
}

package com.liblogic.angelcloud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class FullChildren {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String fullChild;
	
	@ManyToOne
	@JsonIgnore
	private Parents parents;
	
	public FullChildren() {}

	public FullChildren(Long id, String fullChild, Parents parents) {
		super();
		this.id = id;
		this.fullChild = fullChild;
		this.parents = parents;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullChild() {
		return fullChild;
	}

	public void setFullChild(String fullChild) {
		this.fullChild = fullChild;
	}

	public Parents getParents() {
		return parents;
	}

	public void setParents(Parents parents) {
		this.parents = parents;
	}
}


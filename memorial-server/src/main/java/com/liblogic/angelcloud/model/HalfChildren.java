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
	@JsonIgnore
	private Long id;
	
	private String child;
	
	@ManyToOne
	@JsonIgnore
	private Parents parents;
	
	public HalfChildren() {}

	public HalfChildren(Long id, String child, Parents parents) {
		super();
		this.id = id;
		this.child = child;
		this.parents = parents;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getChild() {
		return child;
	}

	public void secChild(String child) {
		this.child = child;
	}

	public Parents getParents() {
		return parents;
	}

	public void setParents(Parents parents) {
		this.parents = parents;
	}
}

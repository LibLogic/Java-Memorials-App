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
public class Parents {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String mother;
	private String father;
	
	@OneToMany(mappedBy="parents", cascade=CascadeType.ALL)
	private List<FullChildren> fullChildren;
	
	@OneToMany(mappedBy="parents", cascade=CascadeType.ALL)
	private List<HalfChildren> halfChildren;
	
	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
    private Burial burial;

	public Parents() {}
	
	public Parents(Long id, Burial burial) {
		this.id = id;
		this.burial = burial;
	}
	
	public Parents(Long id, String mother, String father, List<FullChildren> fullChildren,
			List<HalfChildren> halfChildren, Burial burial) {
		super();
		this.id = id;
		this.mother = mother;
		this.father = father;
		this.fullChildren = fullChildren;
		this.halfChildren = halfChildren;
		this.burial = burial;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMother() {
		return mother;
	}

	public void setMother(String mother) {
		this.mother = mother;
	}

	public String getFather() {
		return father;
	}

	public void setFather(String father) {
		this.father = father;
	}

	public List<FullChildren> getFullChildren() {
		return fullChildren;
	}

	public void setFullChildren(List<FullChildren> fullChildren) {
		this.fullChildren = fullChildren;
	}

	public List<HalfChildren> getHalfChildren() {
		return halfChildren;
	}

	public void setHalfChildren(List<HalfChildren> halfChildren) {
		this.halfChildren = halfChildren;
	}

	public Burial getBurial() {
		return burial;
	}

	public void setBurial(Burial burial) {
		this.burial = burial;
	}

}

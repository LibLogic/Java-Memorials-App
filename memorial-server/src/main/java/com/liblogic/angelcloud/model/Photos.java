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
public class Photos {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id = 1L;
	
	private String mainPhoto;
	
	@OneToMany(mappedBy="photos", cascade=CascadeType.ALL)
	private List<SubjectPhoto> subjectPhotos;
	
	@OneToMany(mappedBy="photos", cascade=CascadeType.ALL)
	private List<FamilyPhoto> familyPhotos;

	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
    private Burial burial;
	
	public Photos() {}

	public Photos(Long id, String mainPhoto, List<SubjectPhoto> subjectPhotos, List<FamilyPhoto> familyPhotos,
			Burial burial) {
		super();
		this.id = id;
		this.mainPhoto = mainPhoto;
		this.subjectPhotos = subjectPhotos;
		this.familyPhotos = familyPhotos;
		this.burial = burial;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getMainPhoto() {
		return mainPhoto;
	}

	public void setMainPhoto(String mainPhoto) {
		this.mainPhoto = mainPhoto;
	}

	public List<SubjectPhoto> getSubjectPhotos() {
		return subjectPhotos;
	}
	
	public void setSubjectPhotos(List<SubjectPhoto> subjectPhotos) {
		this.subjectPhotos = subjectPhotos;
	}

	public List<FamilyPhoto> getFamilyPhotos() {
		return familyPhotos;
	}

	public void setFamilyPhotos(List<FamilyPhoto> familyPhotos) {
		this.familyPhotos = familyPhotos;
	}

	public Burial getBurial() {
		return burial;
	}

	public void setBurial(Burial burial) {
		this.burial = burial;
	}

}

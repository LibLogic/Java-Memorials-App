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
	private Long id;
	
	private String photo;
	
	@OneToMany(mappedBy="photos", cascade=CascadeType.ALL)
	private List<SubjectPhoto> subjectPhotos;
	
	@OneToMany(mappedBy="photos", cascade=CascadeType.ALL)
	private List<FamilyPhoto> familyPhotos;

	@ManyToOne
	@JoinColumn(name="burial_id")
	@JsonIgnore
    private Burial burial;
	
	public Photos() {}

	public Photos(Long id, Burial burial) {
		this.id = id;
		this.burial = burial;
	}
	
	public Photos(long id, String photo, List<SubjectPhoto> subjectPhotos, List<FamilyPhoto> familyPhotos,
			Burial burial) {
		super();
		this.id = id;
		this.photo = photo;
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

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
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

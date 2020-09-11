package com.liblogic.angelcloud.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Burial {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "burial_id")
    private Long id;
    
    private String firstName;
    private String middleName;
    private String lastName;
    private String maidenName;
    private String birthYear;
    private String deathYear;
    private String city;
    private String state;
    private String county;
    private String country;
    private String cemeteryName;
        
    @OneToOne(cascade=CascadeType.ALL)
    private Photos photos = new Photos();
    
    @OneToOne(cascade=CascadeType.ALL)
    private Parents parents = new Parents();
    
    @OneToOne(cascade=CascadeType.ALL)
    private Sponsors sponsors = new Sponsors();
    
    @OneToMany(mappedBy="burial", cascade=CascadeType.ALL)
    private List<Flowers> flowers;
    
	@ManyToOne
	@JsonIgnore
    private Site site;
    
	public Burial() {}

	public Burial(Long id, String firstName, String middleName, String lastName, String maidenName, String birthYear,
			String deathYear, String city, String state, String county, String country, String cemeteryName,
			Photos photos, Parents parents, Sponsors sponsors, List<Flowers> flowers, Site site) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.maidenName = maidenName;
		this.birthYear = birthYear;
		this.deathYear = deathYear;
		this.city = city;
		this.state = state;
		this.county = county;
		this.country = country;
		this.cemeteryName = cemeteryName;
		this.photos = photos;
		this.parents = parents;
		this.sponsors = sponsors;
		this.flowers = flowers;
		this.site = site;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMaidenName() {
		return maidenName;
	}

	public void setMaidenName(String maidenName) {
		this.maidenName = maidenName;
	}

	public String getBirthYear() {
		return birthYear;
	}

	public void setBirthYear(String birthYear) {
		this.birthYear = birthYear;
	}

	public String getDeathYear() {
		return deathYear;
	}

	public void setDeathYear(String deathYear) {
		this.deathYear = deathYear;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCemeteryName() {
		return cemeteryName;
	}

	public void setCemeteryName(String cemeteryName) {
		this.cemeteryName = cemeteryName;
	}
	
	public Photos getPhotos() {
		return photos;
	}

	public void setPhotos(Photos photos) {
		this.photos = photos;
	}

	public Parents getParents() {
		return parents;
	}

	public void setParents(Parents parents) {
		this.parents = parents;
	}

	public Sponsors getSponsors() {
		return sponsors;
	}

	public void setSponsors(Sponsors sponsors) {
		this.sponsors = sponsors;
	}

	public List<Flowers> getFlowers() {
		return flowers;
	}

	public void setFlowers(List<Flowers> flowers) {
		this.flowers = flowers;
	}

	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}
	
}

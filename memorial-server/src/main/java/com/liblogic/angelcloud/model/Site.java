package com.liblogic.angelcloud.model;

import java.util.List;

import javax.persistence.*;

@Entity
public class Site {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String stoneImg;
    private Double latitude;
    private Double longitude;
    
    @OneToMany(mappedBy="site", cascade=CascadeType.ALL)
    private List<Burial> burials;
    
    public Site(){}

	public Site(String stoneImg, Double latitude, Double longitude, List<Burial> burials) {
		this.stoneImg = stoneImg;
		this.latitude = latitude;
		this.longitude = longitude;
		this.burials = burials;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStoneImg() {
		return stoneImg;
	}

	public void setStoneImg(String stoneImg) {
		this.stoneImg = stoneImg;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	
    public List<Burial> getBurials() {
      return burials;
    }

	public void setBurials(List<Burial> burials) {
		this.burials = burials;
	}

}

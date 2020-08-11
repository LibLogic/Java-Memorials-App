package com.liblogic.memorialApp.model;

public class GraveInfo {

    public String stoneImg;
    public Double latitude;
    public Double longitude;

    public GraveInfo(String stoneImg, Double latitude, Double longitude) {
        this.stoneImg = stoneImg;
        this.latitude = latitude;
        this.longitude = longitude;
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
}

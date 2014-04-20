package com.palati.document;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasting")
public class Tasting {
	
	@Id
	private String Id;
	private Integer wineryId;
	private List<Wine> wines;
	private Date date;
	private List<String> metadata;
	private String user;
	private Winery winery;
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public Integer getWineryId() {
		return wineryId;
	}
	public void setWineryId(Integer wineryId) {
		this.wineryId = wineryId;
	}
	public List<Wine> getWines() {
		return wines;
	}
	public void setWines(List<Wine> wines) {
		this.wines = wines;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public List<String> getMetadata() {
		return metadata;
	}
	public void setMetadata(List<String> metadata) {
		this.metadata = metadata;
	}
	
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public Winery getWinery() {
		return winery;
	}
	public void setWinery(Winery winery) {
		this.winery = winery;
	}
	
	
	

}

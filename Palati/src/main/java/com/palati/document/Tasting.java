package com.palati.document;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import java.util.List;

@Document
public class Tasting {
	
	@Id
	private String Id;
	private String wineryId;
	private List<Wine> wines;
	private Date date;
	private List<String> metadata;
	@DBRef
	private Winery winery;
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getWineryId() {
		return wineryId;
	}
	public void setWineryId(String wineryId) {
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
	public Winery getWinery() {
		return winery;
	}
	public void setWinery(Winery winery) {
		this.winery = winery;
	}
	
	
	

}

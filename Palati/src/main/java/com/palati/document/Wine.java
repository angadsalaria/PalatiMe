package com.palati.document;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Document(collection = "wines")
@JsonIgnoreProperties({"objectId"})
public class Wine {

	@Id
	private String objectId;
	@Field("seqNum")
	private Integer id;
	private String title;
	private String description;
	private List<Attribute> basicList;
	private List<Attribute> extendedList;
	
	
	public String getObjectId() {
		return objectId;
	}
	public void setObjectId(String objectId) {
		this.objectId = objectId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Attribute> getBasicList() {
		return basicList;
	}
	public void setBasicList(List<Attribute> basicList) {
		this.basicList = basicList;
	}
	public List<Attribute> getExtendedList() {
		return extendedList;
	}
	public void setExtendedList(List<Attribute> extendedList) {
		this.extendedList = extendedList;
	}
	
	
	
}

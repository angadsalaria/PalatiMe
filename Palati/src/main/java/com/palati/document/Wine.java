package com.palati.document;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "wines")
//@JsonIgnoreProperties({"id"})
public class Wine {

	@Id
	private String id;
	private Integer seqNum;
	private String title;
	private String description;
	private List<Attribute> basicList;
	private List<Attribute> extendedList;
	
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Integer getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(Integer seqNum) {
		this.seqNum = seqNum;
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

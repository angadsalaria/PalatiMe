package com.palati.document;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Wine {

	@Id
	private String Id;
	private Integer seqNum;
	private String name;
	private String description;
	private List<Attribute> basicList;
	private List<Attribute> extendedList;
	
	
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public Integer getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(Integer seqNum) {
		this.seqNum = seqNum;
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

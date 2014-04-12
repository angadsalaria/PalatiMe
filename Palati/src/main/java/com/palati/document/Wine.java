package com.palati.document;

import java.util.List;

public class Wine {

	private String name;
	private String about;
	private List<Attribute> basicList;
	private List<Attribute> extendedList;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
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

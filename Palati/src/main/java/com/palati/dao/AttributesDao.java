package com.palati.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.palati.document.Attribute;

@Repository
public class AttributesDao {
	
	@Autowired
	MongoTemplate mongoTemplate;
	

	public List<Attribute> getBasicList() {
		Query query = new Query(Criteria.where("type").is("basic"));
		List<Attribute> basicList = mongoTemplate.find(query, Attribute.class);
		return basicList;
	}

	public List<Attribute> getExtendedList() {
		Query query = new Query(Criteria.where("type").is("extended"));
		List<Attribute> extendedList = mongoTemplate.find(query, Attribute.class);
		return extendedList;
	}

}

package com.palati.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.palati.document.Tasting;

@Repository
public class TastingDao {
	
	@Autowired
	MongoTemplate mongoTemplate;
	

	public List<Tasting> getUserTastings() {
		Query query = new Query();
		List<Tasting> tasting = mongoTemplate.find(query, Tasting.class);
		return tasting;
	}
	
	public String saveTasting(Tasting tasting){
		
		mongoTemplate.save(tasting);
		return "success";
		
	}
}

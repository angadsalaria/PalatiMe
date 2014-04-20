package com.palati.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.palati.document.Wine;
import com.palati.document.Winery;

@Repository
public class WineryDao {
	
	@Autowired
	MongoTemplate mongoTemplate;
	

	public Winery getWinery(Integer wineryId) {
		Query query = new Query(Criteria.where("_id").is(wineryId));
		Winery winery = mongoTemplate.findOne(query, Winery.class);
		return winery;
	}
	
	public List<Wine> getCurrentWines(Integer wineryId) {
		Query query = new Query(Criteria.where("wineryId").is(wineryId));
		List<Wine> wines = mongoTemplate.find(query, Wine.class);
		return wines;
	}
}

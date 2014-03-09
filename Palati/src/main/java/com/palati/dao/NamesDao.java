package com.palati.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.palati.document.Names;

@Repository
public class NamesDao{

	@Autowired
	MongoTemplate mongoTemplate;
	
	public List<Names> getNames(){
		List<Names> names =mongoTemplate.findAll(Names.class, "mynames");		
		return names;
		
	}
	
}

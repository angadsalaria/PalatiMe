package com.palati.config;

import java.net.UnknownHostException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.mongodb.MongoClient;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"com.palati.dao"}) 	
@ImportResource({"/WEB-INF/config/spring/applicationContext-common.xml"})
public class AppCommonConfig {

	@Bean
	public MongoDbFactory mongoDbFactory() throws UnknownHostException{
		return new SimpleMongoDbFactory(new MongoClient("127.0.0.1"), "names");
	}

	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
 		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
 		return mongoTemplate;
 	}
}

package com.palati.util;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;


public class JsonDateDeserializer extends JsonDeserializer<Date> {

	private static final SimpleDateFormat df = new SimpleDateFormat("MM/dd/yyyy");

	@Override
	public Date deserialize(JsonParser parser, DeserializationContext context) throws IOException, JsonProcessingException {

		try {
			return df.parse(parser.getText());
		} catch (ParseException e) {
			return null;
		}

	}

}
package com.palati.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.palati.dao.AttributesDao;
import com.palati.document.Attribute;

@Controller
public class AttributesController {
	

	@Autowired
	AttributesDao attributesDao;

	@ResponseBody
	@RequestMapping(value = "/getAttributesByType.do", method = RequestMethod.GET)
	public Map<String, List<Attribute>> getAttributes(HttpServletRequest request) throws IOException {
		List<Attribute> basicList = attributesDao.getBasicList();
		List<Attribute> extendedList = attributesDao.getExtendedList();
		Map<String, List<Attribute>> mp = new HashMap<String, List<Attribute>>();
		mp.put("basicList", basicList);
		mp.put("extendedList", extendedList);
		return mp;
	}
}

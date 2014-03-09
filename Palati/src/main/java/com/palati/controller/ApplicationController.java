package com.palati.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.palati.dao.NamesDao;
import com.palati.document.Names;

@Controller
public class ApplicationController {
	
	@Autowired
	NamesDao namesDao;
	
	
	@RequestMapping(value = "/login.htm", method = RequestMethod.GET)
	public String login(HttpServletRequest request, ModelMap model) throws IOException {
		return "index.html";
	}

	
	@ResponseBody
	@RequestMapping(value = "/testConnection.do", method = RequestMethod.GET)
	public String testConn(HttpServletRequest request) throws IOException {
		List<Names> names = namesDao.getNames();
		return "Success. Yayy!!!";
	}
}

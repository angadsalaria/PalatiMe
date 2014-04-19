package com.palati.controller;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.auth0.jwt.JWTVerifier;
import com.palati.dao.NamesDao;
import com.palati.util.ConstUtil;

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
		//List<Names> names = namesDao.getNames();
		return "Success. Yayy!!!";
	}
	
	@ResponseBody
	@RequestMapping(value = "/verifyToken.do", method = RequestMethod.GET)
	public String verifyToken(@RequestParam String token) throws InvalidKeyException, NoSuchAlgorithmException, IllegalStateException, SignatureException, IOException{
		
		Map<String,Object> decodedPayload =  new JWTVerifier(ConstUtil.JWT_SECRET, ConstUtil.JWT_AUDIENCE).verify(token);
		System.out.println(decodedPayload.get("name") + " logged in");
		return "success";	
	}
}

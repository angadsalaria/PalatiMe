package com.palati.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.palati.dao.TastingDao;
import com.palati.dao.WineryDao;
import com.palati.document.Tasting;
import com.palati.document.Wine;

@Controller
public class TastingController {
	

	@Autowired
	TastingDao tastingDao;

	@ResponseBody
	@RequestMapping(value = "/tastings.json", method = RequestMethod.GET)
	public List<Tasting> getUserTastings(HttpServletRequest request, @RequestParam String user) {
		List<Tasting> tasting = tastingDao.getUserTastings(user);
		return tasting;
	}
}

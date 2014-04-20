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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.palati.dao.WineryDao;
import com.palati.document.Wine;
import com.palati.document.Winery;

@Controller
public class WineryController {
	

	@Autowired
	WineryDao wineDao;

	@ResponseBody
	@RequestMapping(value = "/wines.json", method = RequestMethod.GET)
	public List<Wine> getWines(HttpServletRequest request, @RequestParam Integer wineryId) {
		List<Wine> wines = wineDao.getCurrentWines(wineryId);
		return wines;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getWineryDetails.do", method = RequestMethod.GET)
	public Map<String, Object> getAttributes(HttpServletRequest request, @RequestParam Integer wineryId) throws IOException {
		Winery winery = wineDao.getWinery(wineryId);
		List<Wine> wines = wineDao.getCurrentWines(wineryId);
		Map<String, Object> mp = new HashMap<String, Object>();
		mp.put("winery", winery);
		mp.put("wines", wines);
		return mp;
	}
}

package com.palati.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.palati.dao.TastingDao;
import com.palati.dao.WineryDao;
import com.palati.document.Tasting;
import com.palati.util.MapUtil;
import com.palati.util.MapUtil.GroupingExpression;

@Controller
public class TastingController {
	

	@Autowired
	TastingDao tastingDao;

	@Autowired
	WineryDao wineryDao;
	
	@ResponseBody
	@RequestMapping(value = "/tastings.json", method = RequestMethod.GET)
	public Map<String,Tasting> getUserTastings(HttpServletRequest request) {
		List<Tasting> tastings = tastingDao.getUserTastings();

		//TODO: find out how to use @DBRef instead of below
		for(Tasting tasting : tastings){
			tasting.setWinery(wineryDao.getWinery(tasting.getWineryId()));
		}
		
		Map<String,Tasting> mappedTastings = MapUtil.index(tastings, new GroupingExpression<String, Tasting>(){

			@Override
			public String groupBy(Tasting t) {
				return t.getId();
			}
			
		});
		return mappedTastings;
	}
	
	@ResponseBody
	@RequestMapping(value = "/saveTasting.do", method = RequestMethod.POST)
	public String saveTasting(HttpServletRequest request, @RequestBody Tasting tasting) {
		String response = tastingDao.saveTasting(tasting);
		return response;
	}
}

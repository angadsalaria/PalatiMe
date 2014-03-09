package com.palati;

import java.io.IOException;
import java.util.Properties;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;


public class AppServletContextListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {

		System.out.println("ServletContextListener started");
		ServletContext ctx = sce.getServletContext();
		Properties props = null;
		
		props = new Properties();
		//Set properties if need be;
		
		ctx.setAttribute("props", props);
		System.out.println("Context initialized");
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("ServletContextListener destroyed");
	}

}

package com.palati;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class AppContext implements ApplicationContextAware {

	// Singleton schema
	private AppContext() {
	}

	private static class Holder {
		public static final AppContext INSTANCE = new AppContext();
	}

	private static AppContext getInstance() {
		return Holder.INSTANCE;
	}

	// End singleton schema

	private ApplicationContext applicationContext;

	@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		getInstance().applicationContext = applicationContext;
	}

	public static ApplicationContext getContext() {
		return getInstance().applicationContext;
	}

}

package com.palati.object;

import java.util.HashMap;



public class ResponseMessage extends HashMap<String,Object>{
	private static final long serialVersionUID = 1L;

	private static final String MESSAGE = "message";
	private static final String SUCCESS = "success";
	
	
	public ResponseMessage() {
		this("", true);
	}

	public ResponseMessage(String message) {
		this(message, true);
	}

	public ResponseMessage(String message, boolean success) {
		this.put(MESSAGE, message);
		this.put(SUCCESS, success);
	}


}

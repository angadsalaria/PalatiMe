package com.palati.util;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.Map;

import com.auth0.jwt.JWTVerifier;

public class JWTUtil {
	
	public static Map<String,Object> getPayload(String token) throws InvalidKeyException, NoSuchAlgorithmException, IllegalStateException, SignatureException, IOException{
		Map<String,Object> decodedPayload =  new JWTVerifier(ConstUtil.JWT_SECRET, ConstUtil.JWT_AUDIENCE).verify(token);
		return decodedPayload;
	}
	
	public static String getEmail(String token) throws InvalidKeyException, NoSuchAlgorithmException, IllegalStateException, SignatureException, IOException{
		if(token==null){
			return "angadsalaria@gmail.com";
		}
		Map<String,Object> decodedPayload = getPayload(token);
		return (String) decodedPayload.get("email");		
	}

}

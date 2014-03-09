package com.palati.util;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashUtil {

	public static String hash(String rawPassword) {
		
		String hashedPassword;
		
		try {
			MessageDigest digest = MessageDigest.getInstance("MD5");

			byte[] passwordDigest = digest.digest(rawPassword.getBytes("UTF-8"));

			BigInteger bigInt = new BigInteger(1, passwordDigest);

			hashedPassword = bigInt.toString(16);
			
		} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}

		return hashedPassword;
	}
	
}

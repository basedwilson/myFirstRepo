package backend.models;

import javax.servlet.http.HttpServletRequest;

public class UserModel {
	public int userId;
	public String userName;
	public String phoneNumber;
	public String password;
	public boolean isAdmin;
	
	public UserModel(HttpServletRequest request) {
		userName = request.getParameter("userName");
		phoneNumber = request.getParameter("phoneNumber");
		password = request.getParameter("password");
		isAdmin = false;
		
		if (userName == null) { throw new IllegalArgumentException(); }
		if (phoneNumber == null) { throw new IllegalArgumentException(); }
		if (password == null) { throw new IllegalArgumentException(); }
	}
	
	public String toString() {
		return userId + " " + userName + " " + phoneNumber;
	}
}

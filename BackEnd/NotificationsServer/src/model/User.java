package model;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import backend.models.UserModel;

public class User extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private static ArrayList<UserModel> users = new ArrayList<UserModel>();
	
    public User() { super(); }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		int responseCode = HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
		boolean found = false;
		int i = 0;
		
		while (i < users.size() && !found) {
			if (userName.equals(users.get(i).userName)) {
				found = true;
				if (password.equals(users.get(i).password)) {
					responseCode = HttpServletResponse.SC_OK;
				} else {
					responseCode = HttpServletResponse.SC_FORBIDDEN;
				}
			}
			i++;
		}
		
		if (!found) {
			responseCode = HttpServletResponse.SC_FORBIDDEN;
		}
		
		response.setStatus(responseCode);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UserModel user = null;
		int responseCode = HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
		
		try {
			user = new UserModel(request);
		}
		catch (Exception exception) {
			responseCode = HttpServletResponse.SC_BAD_REQUEST;
			System.out.println(exception.getMessage());
		}
		
		if (user != null) {
			user.userId = users.size();
			boolean found = false;
			for (int i = 0; i < users.size(); i++) {
				if (users.get(i).userName.equals(user.userName)) {
					found = true;
					responseCode = HttpServletResponse.SC_FORBIDDEN;
				}
				else if (users.get(i).phoneNumber.equals(user.phoneNumber)) {
					found = true;
					responseCode = HttpServletResponse.SC_CONFLICT;
				}
			}
			if (!found) {
				users.add(user);
				responseCode = HttpServletResponse.SC_OK;
			}
		}
		
		for (int i = 0; i < users.size(); i++) {
			System.out.println(users.get(i));
		}
		
		response.setStatus(responseCode);
	}
}

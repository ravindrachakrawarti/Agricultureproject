package agrimarket.services;

import agrimarket.entities.Admin;

public interface AdminService {
	Admin validate(String userid,String pwd);
	void updateAdmin(Admin admin);
	long count();
	void createAdmin();
}

package AgriMarketBackend.services;

import AgriMarketBackend.Entity.Admin;

public interface AdminService {
	Admin validate(String userid,String pwd);
	void updateAdmin(Admin admin);
	long count();
	void createAdmin();
}

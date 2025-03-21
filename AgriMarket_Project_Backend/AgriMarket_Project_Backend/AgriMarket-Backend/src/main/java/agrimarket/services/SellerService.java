package agrimarket.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import agrimarket.entities.Seller;
import agrimarket.models.UpdateStatusDTO;

public interface SellerService {
	void registerSeller(Seller seller,MultipartFile photo);
	List<Seller> allSellers();
	Seller findById(int id);
	Seller validate(String userid,String pwd);
	void deleteSeller(int id);
	void updateStatus(UpdateStatusDTO dto);
	Seller getSellerById(int sellerId);
}

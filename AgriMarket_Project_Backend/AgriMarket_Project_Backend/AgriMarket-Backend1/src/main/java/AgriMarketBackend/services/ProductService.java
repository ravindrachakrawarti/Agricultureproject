package AgriMarketBackend.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import AgriMarketBackend.Entity.Product;



@Service
public interface ProductService {
	public void addProductData(Product productData);
	List<Product> findProducts(int sellerId);
	void updateProduct(Product p);
	void deleteProduct(int prodid);
	List<Product> allProducts();
	List<Product> categoryProducts(int pcat);
	Product findProductById(int prodid);
	Page<Product> allProductsPaginated(int page,int pagesize);
}

package AgriMarketBackend.services;

import java.util.List;

import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import AgriMarketBackend.Entity.Category;
import AgriMarketBackend.Entity.Product;
import AgriMarketBackend.Entity.Seller;
import AgriMarketBackend.daos.ProductDao;
import AgriMarketBackend.utils.DiskStorageServiceImpl;




@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired private ProductDao dao;
	@Autowired private DiskStorageServiceImpl storageService;
	@Autowired private SellerService sellerService;
	
	public void addProductData(Product product) {
		dao.save(product);
	}
	
	public void saveProduct(String pname,String descr, Category category, int price, byte[] photo, int sellerId) {
        Product product = new Product();
        product.setPname(pname);
        product.setDescr(descr);
        product.setCategory(category);
        product.setPrice(price);
        product.setPhoto(photo);
        Seller seller = sellerService.getSellerById(sellerId);
        if (seller != null) {
            product.setSeller(seller);
            dao.save(product);
        } else {
            // Handle the case when the seller with the given ID is not found
            // You can throw an exception or handle it based on your requirements
            throw new RuntimeException("Seller with ID " + sellerId + " not found");
        }
        dao.save(product);
    }
	
	
//	public void addProduct(Product p,MultipartFile pic) {
//		// TODO Auto-generated method stub
//		byte[] photo=((StorageService) storageService).store(pic);
//		//p.setPhoto(photo);
//		p.setPhoto(photo);
//		dao.save(p);
//	}

	@Override
	public List<Product> findProducts(int sellerId) {
		// TODO Auto-generated method stub
		return dao.findBySellerId(sellerId	,Sort.by(Sort.Direction.DESC,"prodid"));
	}

	@Override
	public void updateProduct(Product p) {
		Product pp=dao.getReferenceById(p.getProdid());
		p.setSeller(pp.getSeller());
		dao.save(p);
	}

	@Override
	public void deleteProduct(int prodid) {
		// TODO Auto-generated method stub
		Product p=dao.getReferenceById(prodid);
		dao.delete(p);
	}

	@Override
	public List<Product> allProducts() {
		// TODO Auto-generated method stub
		return dao.findAll(Sort.by(Sort.Direction.DESC,"prodid"));
	}

	@Override
	public Product findProductById(int prodid) {
		// TODO Auto-generated method stub
		return dao.getReferenceById(prodid);
	}

	@Override
	public List<Product> categoryProducts(int pcat) {
		// TODO Auto-generated method stub
		return dao.findByCategoryId(pcat,Sort.by(Sort.Direction.DESC,"prodid"));
	}
	
	@Override
	public Page<Product> allProductsPaginated(int page,int pagesize) {
		Page<Product> prods=dao.findAll(PageRequest.of(page, pagesize,Sort.by(Direction.DESC, "prodid")));
		System.err.println(prods.getSize());
		return prods;
	}
}

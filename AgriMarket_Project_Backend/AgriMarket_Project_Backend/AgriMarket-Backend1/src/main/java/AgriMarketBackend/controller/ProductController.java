package AgriMarketBackend.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import AgriMarketBackend.Entity.Category;
import AgriMarketBackend.Entity.Product;
import AgriMarketBackend.daos.ProductDao;
import AgriMarketBackend.models.ProductPagedResponseDTO;
import AgriMarketBackend.models.ProductResponseDTO;
import AgriMarketBackend.models.Response;
import AgriMarketBackend.services.CategoryService;
import AgriMarketBackend.services.ProductService;
import AgriMarketBackend.services.ProductServiceImpl;



@CrossOrigin
@RestController
@RequestMapping("/api/add-products")
public class ProductController {
	@Autowired private ProductService pservice;
	@Autowired private ProductServiceImpl productServiceImpl;
	@Autowired CategoryService cservice;
	
	@Autowired private ProductDao dao;
//	@PostMapping
//	public ResponseEntity<?> saveProduct(Product product,MultipartFile pic) {
//		pservice.addProduct(product,pic);
//		return Response.success("Product Saved successfully");
//	}
	@PostMapping
    public ResponseEntity<String> createProduct(
            @RequestParam("pname") String pname,
            @RequestParam("descr") String descr,
            @RequestParam("category") Category category,
            @RequestParam("sellerId") int sellerId,
            @RequestParam("price") int price,
            @RequestParam("photo") MultipartFile photo) {

        try {
        	productServiceImpl.saveProduct(pname, descr, category, price, photo.getBytes(), sellerId);
            return ResponseEntity.ok("Product created successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save product");
        }
    }
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateProduct(@RequestBody Product product,@PathVariable("id") int id) {
		product.setProdid(id);
		pservice.updateProduct(product);
		return Response.success("Product updated successfully");		
	}
	
	@GetMapping("{id}")
	public Product findBook(@PathVariable("id")int id) {
		Product book=pservice.findProductById(id);
		return book;
	}
	
	@GetMapping
	public ResponseEntity<?> findAllProducts(Optional<Integer> sellerid) {
		List<ProductResponseDTO> result = new ArrayList<ProductResponseDTO>();
		if(sellerid.isPresent()) {
			System.out.println(sellerid);
			for(Product p : pservice.findProducts(sellerid.get())) {
				result.add(ProductResponseDTO.fromEntity(p));
			}
			
		}else {
			for(Product p : pservice.allProducts()) {
				result.add(ProductResponseDTO.fromEntity(p));
			}
		}
		
		return Response.success(result);
	}
	
	@GetMapping("/available")
	public List<Product> findAvailableBooks() {
		return pservice.allProducts();
	}
	
	@GetMapping("/paginated")
	public ResponseEntity<?> paginatedProducts(int page,int pagesize) {
		List<ProductResponseDTO> result = new ArrayList<ProductResponseDTO>();
		Page<Product> data=pservice.allProductsPaginated(page, pagesize);
		data.forEach(item-> {
			result.add(ProductResponseDTO.fromEntity(item));
		});
		ProductPagedResponseDTO resp=new ProductPagedResponseDTO();
		resp.setPagesize(pagesize);
		resp.setCurrent(page);
		resp.setTotal(data.getTotalElements());
		resp.setPlist(result);
		return Response.success(resp);
	}
	
	@GetMapping("cats/{id}")
	public List<Product> findByCategory(@PathVariable("id") int id) {
		List<Product> result = new ArrayList<Product>();
		for(Product b : pservice.categoryProducts(id)) {
			result.add(b);
		}
		return result;
	}
		
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable("id") int id) {
		pservice.deleteProduct(id);
		return Response.status(HttpStatus.OK);
	}
}
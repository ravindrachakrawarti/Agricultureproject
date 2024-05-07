package AgriMarketBackend.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AgriMarketBackend.Entity.Product;



@Repository
public interface BookDao extends JpaRepository<Product, Integer> {
	
	List<Product> findByCategoryId(int catid);
}

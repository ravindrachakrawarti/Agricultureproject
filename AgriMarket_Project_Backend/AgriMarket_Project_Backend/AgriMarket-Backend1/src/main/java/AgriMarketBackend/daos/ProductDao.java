package AgriMarketBackend.daos;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AgriMarketBackend.Entity.Product;



@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
	List<Product> findBySellerId(int sellerId,Sort sort);
	List<Product> findByCategoryId(int catid,Sort sort);

}

package AgriMarketBackend.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AgriMarketBackend.Entity.Order;
import AgriMarketBackend.Entity.OrderDetails;



@Repository
public interface OrderDefailsDao extends JpaRepository<OrderDetails, Integer> {
	List<OrderDetails> findByOrder(Order order);
}

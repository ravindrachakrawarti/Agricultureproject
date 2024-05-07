package AgriMarketBackend.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AgriMarketBackend.Entity.Customer;
import AgriMarketBackend.Entity.Order;



@Repository
public interface OrderDao extends JpaRepository<Order, Integer> {
	List<Order> findByCustomer(Customer customer);
}

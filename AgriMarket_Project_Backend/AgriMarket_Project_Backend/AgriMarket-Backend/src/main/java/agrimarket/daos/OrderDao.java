package agrimarket.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrimarket.entities.Customer;
import agrimarket.entities.Order;

@Repository
public interface OrderDao extends JpaRepository<Order, Integer> {
	List<Order> findByCustomer(Customer customer);
}

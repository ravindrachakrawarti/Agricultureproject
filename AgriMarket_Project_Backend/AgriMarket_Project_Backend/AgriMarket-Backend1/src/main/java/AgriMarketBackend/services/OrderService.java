package AgriMarketBackend.services;

import java.util.List;

import AgriMarketBackend.Entity.Customer;
import AgriMarketBackend.Entity.Order;



public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
}

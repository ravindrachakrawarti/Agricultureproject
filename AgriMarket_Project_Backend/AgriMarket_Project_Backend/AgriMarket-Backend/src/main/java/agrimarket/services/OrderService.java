package agrimarket.services;

import java.util.List;

import agrimarket.entities.Customer;
import agrimarket.entities.Order;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
}

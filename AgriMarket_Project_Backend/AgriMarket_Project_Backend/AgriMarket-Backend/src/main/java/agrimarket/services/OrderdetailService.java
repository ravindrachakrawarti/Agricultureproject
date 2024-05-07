package agrimarket.services;

import java.util.List;

import agrimarket.entities.Order;
import agrimarket.entities.OrderDetails;

public interface OrderdetailService {

	void saveOrderDetails(OrderDetails od);
	OrderDetails findById(int id);
	List<OrderDetails> findByOrder(Order order);
}

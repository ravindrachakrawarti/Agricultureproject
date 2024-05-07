package AgriMarketBackend.services;

import java.util.List;

import AgriMarketBackend.Entity.Order;
import AgriMarketBackend.Entity.OrderDetails;



public interface OrderdetailService {

	void saveOrderDetails(OrderDetails od);
	OrderDetails findById(int id);
	List<OrderDetails> findByOrder(Order order);
}

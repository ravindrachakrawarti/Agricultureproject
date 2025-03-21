package agrimarket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import agrimarket.daos.OrderDefailsDao;
import agrimarket.entities.Order;
import agrimarket.entities.OrderDetails;

@Service
public class OrderDetailsServiceImpl implements OrderdetailService {

	@Autowired OrderDefailsDao dao;
	@Override
	public void saveOrderDetails(OrderDetails od) {
		// TODO Auto-generated method stub
		dao.save(od);
	}

	@Override
	public OrderDetails findById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

	@Override
	public List<OrderDetails> findByOrder(Order order) {
		// TODO Auto-generated method stub
		return dao.findByOrder(order);
	}

}

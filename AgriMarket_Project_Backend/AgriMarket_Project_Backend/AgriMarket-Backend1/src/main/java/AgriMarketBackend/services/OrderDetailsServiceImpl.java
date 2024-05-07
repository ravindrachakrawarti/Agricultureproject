package AgriMarketBackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AgriMarketBackend.Entity.Order;
import AgriMarketBackend.Entity.OrderDetails;
import AgriMarketBackend.daos.OrderDefailsDao;



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
		return dao.getReferenceById(id);
	}

	@Override
	public List<OrderDetails> findByOrder(Order order) {
		// TODO Auto-generated method stub
		return dao.findByOrder(order);
	}

}

package AgriMarketBackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AgriMarketBackend.Entity.Payment;
import AgriMarketBackend.daos.PaymentDao;



@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired PaymentDao dao;
	
	@Override
	public Payment savePayment(Payment payment) {
		// TODO Auto-generated method stub
		return dao.save(payment);
	}

	@Override
	public Payment findPaymentById(int id) {
		// TODO Auto-generated method stub
		return dao.getReferenceById(id);
	}

}

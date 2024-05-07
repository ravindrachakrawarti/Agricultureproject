package AgriMarketBackend.services;

import AgriMarketBackend.Entity.Payment;

public interface PaymentService {
	Payment savePayment(Payment payment);
	Payment findPaymentById(int id);
}

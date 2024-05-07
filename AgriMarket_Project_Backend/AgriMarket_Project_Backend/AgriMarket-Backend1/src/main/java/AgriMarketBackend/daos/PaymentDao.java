package AgriMarketBackend.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import AgriMarketBackend.Entity.Payment;



public interface PaymentDao extends JpaRepository<Payment, Integer> {

}

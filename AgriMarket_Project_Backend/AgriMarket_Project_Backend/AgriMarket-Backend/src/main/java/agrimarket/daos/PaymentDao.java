package agrimarket.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import agrimarket.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}

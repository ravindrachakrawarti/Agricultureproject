package AgriMarketBackend.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AgriMarketBackend.Entity.Contact;



@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}

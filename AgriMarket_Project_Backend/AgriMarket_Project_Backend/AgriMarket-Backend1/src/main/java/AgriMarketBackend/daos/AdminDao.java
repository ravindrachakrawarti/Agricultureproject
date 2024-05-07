package AgriMarketBackend.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AgriMarketBackend.Entity.Admin;


@Repository
public interface AdminDao extends JpaRepository<Admin, String> {

}

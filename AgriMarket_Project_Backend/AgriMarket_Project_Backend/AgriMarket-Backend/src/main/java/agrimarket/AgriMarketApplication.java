package agrimarket;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import agrimarket.services.AdminService;
//Final E-Farmers Market  project
@SpringBootApplication
@EnableJpaAuditing
@ComponentScan("agrimarket")
public class AgriMarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriMarketApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(AdminService srv) {
	    return (args) -> {
	    	if(srv.count()==0) {
	    		srv.createAdmin();
	    	}
	    };
	}

}

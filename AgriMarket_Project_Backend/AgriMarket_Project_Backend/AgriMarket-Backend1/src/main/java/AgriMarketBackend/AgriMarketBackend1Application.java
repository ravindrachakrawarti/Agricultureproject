package AgriMarketBackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import AgriMarketBackend.services.AdminService;




@SpringBootApplication
@EnableJpaAuditing
@ComponentScan("agrimarket")
public class AgriMarketBackend1Application {

	public static void main(String[] args) {
		SpringApplication.run(AgriMarketBackend1Application.class, args);
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

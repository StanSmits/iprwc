package nl.stansmits.iprwc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * The main (begin) class of the application
 */
@SpringBootApplication
@EnableSwagger2
public class IPRWCApiApplication {

	/**
	 * The main method
	 * @param args the arguments given to the application
	 */
	public static void main(String[] args) {
		SpringApplication.run(IPRWCApiApplication.class, args);
	}

	@Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.basePackage("nl.stansmits"))
          .paths(PathSelectors.any())                          
          .build();                                           
    }

}

package com.application.profee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ProfeeEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfeeEurekaApplication.class, args);
	}

}

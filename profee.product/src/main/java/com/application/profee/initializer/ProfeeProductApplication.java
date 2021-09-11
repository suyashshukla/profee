package com.application.profee.initializer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.application.profee.services", "com.application.profee.initializer", "com.application.profee.controllers"})
@EntityScan(basePackages = "com.application.profee.data")
@EnableJpaRepositories("com.application.profee.repositories")
public class ProfeeProductApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProfeeProductApplication.class, args);
    }
}

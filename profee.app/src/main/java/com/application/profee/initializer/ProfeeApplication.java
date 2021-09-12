package com.application.profee.initializer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.trace.http.HttpTraceRepository;
import org.springframework.boot.actuate.trace.http.InMemoryHttpTraceRepository;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.application.profee.services", "com.application.profee.initializer", "com.application.profee.controllers"})
@EntityScan(basePackages = "com.application.profee.data")
@EnableJpaRepositories("com.application.profee.repositories")
@EnableZuulProxy
@EnableEurekaClient
public class ProfeeApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProfeeApplication.class, args);
  }

}

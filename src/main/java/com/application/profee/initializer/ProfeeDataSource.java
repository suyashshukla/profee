package com.application.profee.initializer;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class ProfeeDataSource {

  @Bean
  @ConfigurationProperties("spring.datasource")
  public HikariDataSource hikariDataSource(){
    return DataSourceBuilder
      .create()
      .type(HikariDataSource.class)
      .build();
  }

}

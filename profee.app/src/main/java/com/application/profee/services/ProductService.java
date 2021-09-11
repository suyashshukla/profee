package com.application.profee.services;

import com.application.profee.data.Product;
import com.application.profee.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ProductService {

  @Autowired
  ProductRepository productRepository;

  public List<Product> getAllProducts() {
    return StreamSupport.stream(productRepository.findAll().spliterator(), false).collect(Collectors.toList());
  }

  public Product getProduct(int productId) {
    return productRepository.findById(productId).get();
  }

  public boolean addProduct(Product product) {
    productRepository.save(product);
    return true;
  }

  public boolean updateProduct(Product product) {
    if (productRepository.existsById(product.getId())) {
      productRepository.save(product);
      return true;
    }
    return false;
  }

  public void deleteProduct(int productId) {
    if (productRepository.existsById(productId)) {
      this.productRepository.delete(productRepository.findById(productId).get());
    }
  }

}

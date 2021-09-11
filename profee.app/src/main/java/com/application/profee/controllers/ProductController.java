package com.application.profee.controllers;

import com.application.profee.data.Product;
import com.application.profee.repositories.ProductRepository;
import com.application.profee.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/product")
@RestController
public class ProductController {

  @Autowired
  ProductService productService;

  @GetMapping("/all")
  public List<Product> getAllProducts() {
    return productService.getAllProducts();
  }

  @GetMapping("/{productId}")
  public Product getProduct(@PathVariable int productId) {
    return productService.getProduct(productId);
  }

  @PostMapping("/add")
  public boolean addProduct(@RequestBody Product product) {
    return productService.addProduct(product);
  }

  @PutMapping("/update")
  public boolean updateProduct(@RequestBody Product product) {
    return productService.updateProduct(product);
  }

  @DeleteMapping("/{productId}/delete")
  public void deleteProduct(@PathVariable int productId) {
    productService.deleteProduct(productId);
  }

}

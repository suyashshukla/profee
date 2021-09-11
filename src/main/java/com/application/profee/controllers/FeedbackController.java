package com.application.profee.controllers;

import com.application.profee.data.Feedback;
import com.application.profee.data.Product;
import com.application.profee.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RequestMapping("/api/feedback")
@RestController
public class FeedbackController {

  @Autowired
  FeedbackService feedbackService;

  @GetMapping("/product/{productId}/all")
  public List<Feedback> getAllProductFeedback(@PathVariable int productId) {
    return feedbackService.getProductFeedbacks(productId);
  }

  @PostMapping("/add")
  public boolean addProductFeedback(@RequestBody Feedback feedback) {
    return feedbackService.addProductFeedback(feedback);
  }

  @PutMapping("/update")
  public boolean updateProductFeedback(@RequestBody Feedback feedback) {
    return feedbackService.updateProductFeedback(feedback);
  }

  @DeleteMapping("{feedbackId}/delete")
  public void deleteProductFeedback(@PathVariable int feedbackId) {
    feedbackService.deleteProductFeedback(feedbackId);
  }
}

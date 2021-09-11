package com.application.profee.services;

import com.application.profee.data.Feedback;
import com.application.profee.repositories.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

  @Autowired
  FeedbackRepository feedbackRepository;

  public List<Feedback> getProductFeedbacks(int productId) {
    return feedbackRepository.findAllByProductId(productId);
  }

  public boolean addProductFeedback(Feedback feedback) {
    feedbackRepository.save(feedback);
    return true;
  }

  public boolean updateProductFeedback(Feedback feedback) {
    if (feedbackRepository.existsById(feedback.getId())) {
      feedbackRepository.save(feedback);
      return true;
    }
    return false;
  }

  public void deleteProductFeedback(int feedbackId) {
    if (feedbackRepository.existsById(feedbackId)) {
      feedbackRepository.delete(feedbackRepository.findById(feedbackId).get());
    }
  }
}

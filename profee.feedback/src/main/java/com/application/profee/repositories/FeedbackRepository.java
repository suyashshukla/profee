package com.application.profee.repositories;


import com.application.profee.data.Feedback;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FeedbackRepository extends CrudRepository<Feedback, Integer> {

  List<Feedback> findAllByProductId(Integer productId);

}

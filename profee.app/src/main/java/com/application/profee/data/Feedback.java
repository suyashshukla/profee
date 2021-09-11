package com.application.profee.data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Feedback {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "Id", nullable = false)
  private Integer id;

  @Lob
  @Column(name = "Title", nullable = false)
  private String title;

  @Lob
  @Column(name = "Content", nullable = false)
  private String content;

  @Column(name = "ProductId", nullable = false)
  private Integer productId;

  @Column(name = "Rating", nullable = false)
  private Integer rating;

  @Column(name = "GivenBy", nullable = false, length = 128)
  private String givenBy;

  @Column(name = "GivenOn", nullable = false)
  private LocalDate givenOn;

  public LocalDate getGivenOn() {
    return givenOn;
  }

  public void setGivenOn(LocalDate givenOn) {
    this.givenOn = givenOn;
  }

  public String getGivenBy() {
    return givenBy;
  }

  public void setGivenBy(String givenBy) {
    this.givenBy = givenBy;
  }

  public Integer getRating() {
    return rating;
  }

  public void setRating(Integer rating) {
    this.rating = rating;
  }

  public Integer getProductId() {
    return productId;
  }

  public void setProductId(Integer productId) {
    this.productId = productId;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }
}

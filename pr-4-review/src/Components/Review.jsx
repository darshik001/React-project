import React, { useState } from "react";
import "./Review.css";
import ShowReview from "./ShowReview";

const Review = () => {
  const emailregex = /^[^@]+@[^@]+\.[^@]+$/;
  const initial = {
    uname: "",
    email: "",
    review: "",
    rating: 0,
  };

  const [inputForm, setInputForm] = useState(initial);
  const [inputErr, setInputErr] = useState({});
  const [allReviews, setAllReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleErrors()) {
      setAllReviews([...allReviews, inputForm]);
      setInputForm(initial);
      setInputErr({});
      alert("Thank you for your feedback!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleRating = (num) => {
    setInputForm({ ...inputForm, rating: num });
  };

  const handleErrors = () => {
    let errors = {};
    if (inputForm.uname === "") {
      errors.unameErr = "Enter your username"
    }
    if (inputForm.email === "") {
      errors.emailErr = "Enter your email address"
    }else if (!emailregex.test(inputForm.email)) {
      errors.emailErr = "Enter a valid email"
    }
    if (inputForm.rating === 0) {
      errors.ratingErr = "Please rate this product"
    }
    if (inputForm.review === "") {
      errors.reviewErr = "Please share your review"
    }

    setInputErr(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="main-form">
      <div className="review-card">
        <h2>Rate & Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Username</label>
            <input type="text" name="uname" value={inputForm.uname} onChange={handleChange} placeholder="Enter your name" />
            {inputErr.unameErr && <span className="errors">{inputErr.unameErr}</span>}
          </div>

          <div className="form-input">
            <label>Email</label>
            <input type="text" name="email" value={inputForm.email} onChange={handleChange} placeholder="Enter your email" />
            {inputErr.emailErr && <span className="errors">{inputErr.emailErr}</span>}
          </div>

          <div className="form-rating">
            <label>Rating</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  onClick={() => handleRating(num)}
                  style={{
                    cursor: "pointer",
                    fontSize: "32px",
                    color: num <= inputForm.rating ? "#ffc107" : "#ccc",
                    transition: "0.3s",
                  }}
                >
                  &#9733;
                </span>
              ))}
            </div>
            {inputErr.ratingErr && <span className="errors">{inputErr.ratingErr}</span>}
          </div>

          <div className="form-input">
            <label>Write Review</label>
            <textarea name="review" value={inputForm.review} onChange={handleChange} placeholder="Share your experience..." rows="4" />
            {inputErr.reviewErr && <span className="errors">{inputErr.reviewErr}</span>}
          </div>

          <button type="submit">Submit Review</button>
        </form>
      </div>

      <ShowReview sendreview={allReviews} />
    </div>
  );
};

export default Review;

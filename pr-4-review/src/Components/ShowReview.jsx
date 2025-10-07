import React from "react";
import "./ShowReview.css";

const ShowReview = ({ sendreview }) => {
  if (!sendreview || sendreview.length === 0) {
    return (
      <div className="review-list">
        <p className="no-review">No reviews yet. Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="review-list">
      <h3 className="review-heading">Customer Reviews</h3>
      {sendreview.map((r, index) => (
        <div key={index} className="review-item">
          <div className="review-header">
            <h4 className="review-username">{r.uname}</h4>
            <p className="review-email">{r.email}</p>
          </div>

          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`star ${num <= r.rating ? "active" : ""}`}
              >
                &#9733;
              </span>
            ))}
          </div>

          <p className="review-text">{r.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowReview;

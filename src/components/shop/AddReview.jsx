import React, { useState } from "react";

function AddReview({ product_id,setRender }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      product_id: product_id,
      comment: comment,
      rating: rating,
      created_at: new Date(),
      user: user,
    };
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...existingReviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setRender(true)
    setRating(0);
    setComment("");
  };

  return (
    <div>
      <div className="rating-star">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`fa fa-star rate fr ${index < rating ? "checked" : ""}`}
            onClick={() => handleStarClick(index)}
          ></span>
        ))}
      </div>


      <div className="comm">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="rating" value={rating} id="rating-value" />
          <textarea
            placeholder="Comment"
            className="question-body input com-input"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="com-btn">
            Submit Rating
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddReview;

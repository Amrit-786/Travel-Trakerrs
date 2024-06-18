import React, { useState } from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";

export const Review_Page = () => {
  const initialData = [
    {
      id: "1",
      reviewer: "Sarvjyoti",
      review: "Good Services. Thank you Travel Trakkers.",
      rating: 4,
    },
    {
      id: "2",
      reviewer: "Ricky",
      review: "It works great. Very good services provided.",
      rating: 5,
    },
    {
      id: "3",
      reviewer: "Amrit",
      review: "Good Services. Thank you Travel Trakkers.",
      rating: 4,
    },
  ];

  const [reviewData, setReviewData] = useState(initialData);
  const [newReview, setNewReview] = useState({
    reviewer: "",
    review: "",
    rating: 0,
  });
  const [editingReviewId, setEditingReviewId] = useState(null);

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setNewReview({ ...newReview, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newReview.reviewer || !newReview.review || newReview.rating === 0) {
      alert("Please fill out all fields and provide a rating.");
      return;
    }

    if (editingReviewId) {
      setReviewData(
        reviewData.map((review) =>
          review.id === editingReviewId ? { ...review, ...newReview } : review
        )
      );
      setEditingReviewId(null);
    } else {
      setReviewData([
        ...reviewData,
        { ...newReview, id: Date.now().toString() },
      ]);
    }
    setNewReview({ reviewer: "", review: "", rating: 0 });
  };

  return (
    <div
      className="review-page"
      style={{
        width: "100%",
        minHeight: "100vh",
        // padding: "5px",
        background: "linear-gradient(to right, #81aafe, #b3d4fc)",
        marginTop:'110px',
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "40px" }}>
        Reviews ⭐⭐⭐⭐⭐
      </h2>

      <div
        className="review-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {reviewData.map((review) => (
          <div
            key={review.id}
            className="review-card"
            style={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transform: "scale(1)",
              transition: "transform 0.3s",
            }}
          >
            <div
              className="reviewerName_logo"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <FaUserCircle
                className="user-icon"
                style={{
                  fontSize: "40px",
                  marginRight: "10px",
                  color: "#63a1ff",
                }}
              />
              <h3 style={{ fontSize: "20px", margin: 0, color: "#333" }}>
                {review.reviewer}
              </h3>
            </div>
            <p style={{ color: "#555", marginBottom: "10px" }}>
              {review.review}
            </p>
            <div
              className="rating"
              style={{ display: "flex", marginBottom: "10px" }}
            >
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} color="#ffc107" />
              ))}
            </div>
            <div
              className="review-actions"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                onClick={() => {
                  setNewReview(review);
                  setEditingReviewId(review.id);
                }}
                style={{
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  border: "none",
                  cursor: "pointer",
                  color: "#63a1ff",
                }}
              >
                <CiEdit />
              </button>
              <button
                onClick={() =>
                  setReviewData(reviewData.filter((r) => r.id !== review.id))
                }
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#e74c3c",
                }}
              >
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="review-form"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "600px",
            marginRight: "20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Add Review
          </h2>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="reviewer"
              value={newReview.reviewer}
              onChange={handleInputChange}
              placeholder="Type your name"
              style={{
                width: "85%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <textarea
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              placeholder="Give your review..."
              style={{
                width: "85%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                minHeight: "100px",
              }}
            />
          </div>
          <div
            className="rating"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              fontSize: "24px",
            }}
          >
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={index}
                onClick={() => handleRatingChange(index + 1)}
                color={index < newReview.rating ? "#ffc83d" : "#ccc"}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
          <button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: editingReviewId ? "#58b24c" : "#63a1ff",
              color: "#ffffff",
              fontSize: "18px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            {editingReviewId ? <GrUpdate /> : "Add Review"}
          </button>
        </form>
        <div style={{ display: "none" }}>
          <img
            src="https://media.istockphoto.com/id/1451079337/photo/customer-review-good-rating-concept-hand-pressing-user-and-five-star-icon-on-visual-screen.jpg?s=612x612&w=0&k=20&c=KftvGEGrkQRLO_dqRyHmMW0EDFraAOjD9lrpMKpQR1w="
            alt=""
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

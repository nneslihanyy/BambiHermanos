import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";

const Reviews = ({ active, singleProduct, setSingleProduct }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [users, setUsers] = useState([]);
  const thisReview = [];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  singleProduct.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user);
    matchingUsers.forEach((matchingUser) => {
      thisReview.push({
        review: review,
        user: matchingUser,
      });
    });
  });

  const handleDelete = async (reviewId) => {
    try {
      const updatedReviews = singleProduct.reviews.filter((review) => review._id !== reviewId);
      const res = await fetch(`${apiUrl}/api/products/${singleProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviews: updatedReviews }),
      });

      if (!res.ok) {
        message.error("Bir şeyler yanlış gitti.");
        return;
      }

      const data = await res.json();
      setSingleProduct(data);
      message.success("Yorum başarıyla silindi.");
    } catch (error) {
      console.log(error);
      message.error("Bir şeyler yanlış gitti.");
    }
  };

  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct.reviews.length > 0 ? (
        <div className="comments">
          <ol className="comment-list">
            {thisReview.map((item, index) => (
              <ReviewItem
                key={index}
                reviewItem={item}
                onDelete={handleDelete}
              />
            ))}
          </ol>
        </div>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}
      <div className="review-form-wrapper">
        <h2>Yeni Yorum Ekle</h2>
        <ReviewForm singleProduct={singleProduct} setSingleProduct={setSingleProduct} />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object.isRequired,
  setSingleProduct: PropTypes.func.isRequired,
};

export default Reviews;

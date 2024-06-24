import { useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
const ReviewForm = ({ singleProduct , setSingleProduct }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const handleRatingChange = (e, newRating) => {
    e.preventDefault();
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      reviews: [
        ...singleProduct.reviews,
        {
          text: review,
          rating: parseInt(rating),
          user: user.id || user._id ,
        },
      ],
    };
    try {
      const res = await fetch(`${apiUrl}/api/products/${singleProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        message.error("Bir şeyler yanlış gitti.");
        return;
      }

      const data = await res.json();
      setSingleProduct(data);
      setReview("");
      setRating(0);
      message.success("Yorum başarıyla eklendi.");
    } catch (error) {
      console.log(error);
      message.error("Bir şeyler yanlış gitti.");
    }
  

  


    console.log(formData);
  };
    return (
      <form className="comment-form" onSubmit={handleSubmit}>
        <p className="comment-notes">
        E-posta hesabınız yayımlanmayacak. Gerekli alanlar işaretlendi
          <span className="required">*</span>
        </p>
        <div className="comment-form-rating">
          <label>
           Sizin Dereceniz
            <span className="required">*</span>
          </label>
          <div className="stars">
          <a
            href="#"
            className={`star ${rating === 2 && "active"}`}
            onClick={(e) => handleRatingChange(e, 2)}
          >
              <i className="bi bi-star-fill"></i>
            </a>
            <a href="#" className="star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
            <a
            href="#"
            className={`star ${rating === 3 && "active"}`}
            onClick={(e) => handleRatingChange(e, 3)}
          >
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
            <a
            href="#"
            className={`star ${rating === 4 && "active"}`}
            onClick={(e) => handleRatingChange(e, 4)}
          >
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
            <a
            href="#"
            className={`star ${rating === 5 && "active"}`}
            onClick={(e) => handleRatingChange(e, 5)}
          >
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </a>
          </div>
        </div>
        <div className="comment-form-comment form-comment">
          <label htmlFor="comment">
          Yorumunuz
            <span className="required">*</span>
          </label>
          <textarea
          id="comment"
          cols="50"
          rows="10"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>
        </div>
        <div className="comment-form-cookies">
          <input id="cookies" type="checkbox" />
          <label htmlFor="cookies">
          Bir dahaki sefere kullandığımda kullanılmak üzere adımı, e-posta adresimi ve web site adresimi bu tarayıcıya kaydet
            <span className="required">*</span>
          </label>
        </div>
        <div className="form-submit">
          <input type="submit" className="btn submit" />
        </div>
      </form>
    );
  };
  
  export default ReviewForm;
  ReviewForm.propTypes = {
    singleProduct: PropTypes.object,
    setSingleProduct: PropTypes.func,
  };
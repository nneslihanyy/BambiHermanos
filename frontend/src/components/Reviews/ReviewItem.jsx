import PropTypes from "prop-types";

const ReviewItem = ({ reviewItem, onDelete }) => {
  const { review, user } = reviewItem;
  const { text, createdAt, rating } = review;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString("tr-TR", options);

  const handleDelete = () => {
    if (window.confirm("Bu yorumu silmek istediğinizden emin misiniz?")) {
      onDelete(review._id);
    }
  };

  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  // Konsolda currentUser ve user bilgilerini kontrol edin.
  console.log("Current User:", currentUser);
  console.log("Review User:", user);

  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src={user.avatar} alt="" width={60} />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          {Array.from({ length: rating }, (_, index) => (
            <li key={index}>
              <i className="bi bi-star-fill"></i>
            </li>
          ))}
        </ul>
        <div className="comment-meta">
          <strong>{user.firstName}</strong>
          <span> - </span>
          <time>{formattedDate}</time>
        </div>
        <div className="comment-description">
          <p>{text}</p>
        </div>
        {currentUser && currentUser.id === user._id ? (
          <button onClick={handleDelete} className="delete-button">
            Sil
          </button>
        ) : null}
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  reviewItem: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReviewItem;

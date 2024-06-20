import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../shop/shop.css";
import AddReview from "../../components/shop/AddReview";
import StarRating from "../../components/shop/StarRating";
import Reviews from "../../components/shop/Reviews";

function ProductDetails() {
  const [render, setRender] = useState(false);
  const [avgRating, setAvgRating] = useState(0);
  const [allReviews, setAllReviews] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  useEffect(() => {
    const reviewObj = JSON.parse(localStorage.getItem("reviews")) || [];
    const AllReviews = reviewObj.filter((item) => item.product_id === data.id);
    setAllReviews(AllReviews);

    if (AllReviews.length > 0) {
      const sumRatings = AllReviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const Avg = sumRatings / AllReviews.length;
      setAvgRating(Avg.toFixed(1));
    } else {
      setAvgRating(0);
    }

    setRender(false);
  }, [render, data.id]);

  const handleCart = () => {
    const cartData = { ...data, quantity: 1 };
    let existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (!Array.isArray(existingCartItems)) {
      existingCartItems = [];
    }
    const updatedCartItems = [...existingCartItems, cartData];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    navigate("/cart");
  };

  return (
    <div>
      <Navbar />
      <div className="body" style={{ top: 0, position: "absolute" }}>
        <div className="show">
          <div
            onClick={() => navigate("/shop")}
            className="back show-back"
            style={{ cursor: "pointer" }}
          >
            Back
          </div>
          <div className="show-product">
            <div>
              <img
                src={data.product_image}
                alt="Product"
                className="show_image"
              />
            </div>
            <hr />
            <div className="show-text">
              <h1 className="show-name">{data.product_name}</h1>
              <p className="show-description">{data.product_description}</p>
              {data.user ? (
                <p>
                  seller: {data?.user?.username} | {data?.user?.email}
                </p>
              ) : (
                <p> seller: demo | seller@gmail.com</p>
              )}
              <div style={{display:'flex',gap:'10px'}}>
                <StarRating averageRating={avgRating} />
                <div className="show-avg">{avgRating}/5</div>
              </div>
              <h4 className="show-price">Price: Rs {data.price}</h4>
              <div className="add-to-cart" onClick={handleCart}>
                Add to Cart
              </div>
            </div>
          </div>
          <div>
            <Reviews reviews={allReviews} />
          </div>
          <div className="add-review">
            <AddReview product_id={data.id} setRender={setRender} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

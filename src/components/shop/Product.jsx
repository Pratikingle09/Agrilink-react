import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const data = product;
    navigate("/productdetail", { state: { data } });
  };
  return (
    <>
      <div className="product-card">
        <div onClick={handleNavigate} className="link">
          {product.product_image && (
            <img
              src={product.product_image}
              alt={product.product_name}
              className="product_image"
            />
          )}
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(product.price)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;

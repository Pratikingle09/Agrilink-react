import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";

function DashboardIndex() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [render, setRender] = useState(false)


  useEffect(() => {
    const initialProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(initialProducts);
    setRender(false)
  }, [render]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <>
      <div className="index">
        <h1 style={{ marginTop: "60px" }}>Your Listed Products</h1>
        {products.length > 0 ? (
          <table id="customers">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.product_name}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>{product.quantity}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      className="cart-remove"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditProductId(product.id);
                        setShowPopup(true);
                      }}
                    >
                      Edit
                    </p>
                    &nbsp;|&nbsp;
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(product.id)}
                      className="cart-remove text"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products listed yet.</p>
        )}
      </div>
      {showPopup && (
        <EditProduct
          productData={products.find((product) => product.id === editProductId)}
          setShowPopup={setShowPopup}
          setRender={setRender}
        />
      )}
    </>
  );
}

export default DashboardIndex;

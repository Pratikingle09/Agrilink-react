import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Navbar from "../../components/navbar/Navbar";

const ShoppingCart = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(data);
  }, []);

  useEffect(() => {
    if (cartItems.length != 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    const newOrder = {
      id: Date.now(),
      mobile: user.mobile,
      address: address,
      order_items: cartItems,
      created_at: new Date(),
    };
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  
    alert("Your order has been placed successfully");
    setCartItems([]);
    localStorage.removeItem("cartItems");
    navigate("/");
  };
  

  const increment = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const decrement = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="shope-cart">
        <h1 className="cart-head">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr key={cartItem.id}>
                    <td className="cart-product">
                      <div>
                        <img
                          src={cartItem.product_image}
                          alt={cartItem.product_name}
                          className="cart-image"
                        />
                      </div>
                      <div className="cart-product-name">
                        {cartItem.product_name}
                      </div>
                    </td>
                    <td>
                      <div className="quantity-wrapper">
                        <button
                          type="button"
                          onClick={() =>
                            decrement(cartItem.id, cartItem.quantity)
                          }
                          className="decrement"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={cartItem.quantity}
                          min="1"
                          className="cart-input"
                          onChange={(e) =>
                            updateQuantity(
                              cartItem.id,
                              parseInt(e.target.value)
                            )
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            increment(cartItem.id, cartItem.quantity)
                          }
                          className="increment"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{`₹${cartItem.price.toFixed(2)}`}</td>
                    <td>{`₹${(cartItem.price * cartItem.quantity).toFixed(
                      2
                    )}`}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(cartItem.id)}
                        className="cart-remove"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5">
                    <strong>Total: </strong>
                    {`₹${total.toFixed(2)}`}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="checkout">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCheckout();
            }}
          >
            <div className="cart-field">
              <textarea
                placeholder="Address"
                className="cart-address input"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button type="submit" className="checkout-btn">
              Checkout
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

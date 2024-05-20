import React, { useEffect } from "react";
import { useState } from "react";
import "./Cart.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Pay from "../components/Pay";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [showCheckout, setShowCheckout] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const handleCheckOut = () => {
    setShowCheckout(!showCheckout);
  };

  useEffect(() => {
    cart.items.map(
      (item) => item.type === "Groceries" && setShowDetails(false)
    );
  }, [cart]);

  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <div className="title">
          <h1>YOUR BAG</h1>
        </div>
        <div className="top">
          <div className="top-button">CONTINUE SHOPPING</div>
          <div className="top-texts">
            <div className="top-text">Shopping Bag(2)</div>
            <div className="top-text">Your Wishlist(0)</div>
          </div>
          <button
            type="button"
            className="top-button checkout"
            onClick={handleCheckOut}
          >
            CHECKOUT NOW
          </button>
        </div>
        <div className="bottom">
          <div className="c-info">
            {cart.items.map((product) => (
              <div className="c-product" style={{ marginBottom: "30px" }}>
                <div className="product-detail">
                  <img
                    src={product.img}
                    alt=""
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <div className="details">
                    <div className="product-name">
                      <b>Product : </b>
                      {product.title}
                    </div>
                    <div className="product-id">
                      <b>Product Id : </b>
                      {product._id}
                    </div>
                    {showDetails && (
                      <div>
                        <div
                          className="product-color"
                          style={{
                            backgroundColor: product.color,
                            border: "2px solid black",
                          }}
                        ></div>
                        {product.categories["Electronics"] && (
                          <div className="product-size">
                            <b>Size : </b> {product.size}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <hr />
                </div>
                <div className="price-details">
                  <div className="pa-container">
                    <button className="remove">
                      <RemoveOutlinedIcon className="a-icon" />
                    </button>
                    <div className="amount">{product.quantity}</div>
                    <button className="add">
                      <AddOutlinedIcon className="a-icon" />
                    </button>
                  </div>
                  <span className="p-price">$ {product.price}</span>
                </div>
                <hr />
              </div>
            ))}
          </div>
          {showCheckout && (
            <div className="summary">
              <div className="summary-title">ORDER SUMMARY</div>
              <div className="summary-item">
                <div className="summary-item-text">Subtotal</div>
                <div className="summary-item-price">${cart.totalPrice}</div>
              </div>
              <div className="summary-item">
                <div className="summary-item-text">Estimated Shipping</div>
                <div className="summary-item-price">$5.90</div>
              </div>
              <div className="summary-item">
                <div className="summary-item-text">Shipping Discount</div>
                <div className="summary-item-price">$ -5.90</div>
              </div>
              <div className="summary-item total">
                <div className="summary-item-text total">Total</div>
                <div className="summary-item-price">${cart.totalPrice}</div>
              </div>
              <Pay />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

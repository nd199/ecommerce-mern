import React from "react";
import { useState } from "react";
import "./Cart.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Pay from "../components/Pay";

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckOut = () => {
    setShowCheckout(!showCheckout);
  };

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
            <div className="c-product">
              <div className="product-detail">
                <img src="images/shoes.png" alt="" />
                <div className="details">
                  <div className="product-name">
                    <b>Product : </b>Air Jordan 1 Mid SE
                  </div>
                  <div className="product-id">
                    <b>Product Id :</b> 3242323243
                  </div>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <div className="product-size">
                    <b>Size : </b>40
                  </div>
                </div>
              </div>
              <div className="price-details">
                <div className="pa-container">
                  <button className="remove">
                    <RemoveOutlinedIcon className="a-icon" />
                  </button>
                  <div className="amount">2</div>
                  <button className="add">
                    <AddOutlinedIcon className="a-icon" />
                  </button>
                </div>
                <span className="p-price">$45</span>
              </div>
            </div>
            <hr />
            <div className="c-product">
              <div className="product-detail">
                <img src="images/hoodie.png" alt="" />
                <div className="details">
                  <div className="product-name">
                    <b>Product : </b>Supreme Bluza Hoodie
                  </div>
                  <div className="product-id">
                    <b>Product Id :</b> 2313212243
                  </div>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "#332" }}
                  ></div>
                  <div className="product-size">
                    <b>Size : </b>L
                  </div>
                </div>
              </div>
              <div className="price-details">
                <div className="pa-container">
                  <button className="remove">
                    <RemoveOutlinedIcon className="a-icon" />
                  </button>
                  <div className="amount">1</div>
                  <button className="add">
                    <AddOutlinedIcon className="a-icon" />
                  </button>
                </div>
                <span className="p-price">$50</span>
              </div>
            </div>
          </div>
          {showCheckout && (
            <div className="summary">
              <div className="summary-title">ORDER SUMMARY</div>
              <div className="summary-item">
                <div className="summary-item-text">Subtotal</div>
                <div className="summary-item-price">$95</div>
              </div>
              <div className="summary-item">
                <div className="summary-item-text">Estimated Shipping</div>
                <div className="summary-item-price">$5.90</div>
              </div>
              <div className="summary-item">
                <div className="summary-item-text">Shipping Discount</div>
                <div className="summary-item-price">$ -5.90</div>
              </div>
              <div className="summary-item">
                <div className="summary-item-text">Product Discount</div>
                <div className="summary-item-price">$40</div>
              </div>
              <div className="summary-item total">
                <div className="summary-item-text total">Total</div>
                <div className="summary-item-price">$55</div>
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

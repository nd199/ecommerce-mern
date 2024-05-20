import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="f-left">
        <div className="logo">
          <h1>codeNaren.</h1>
        </div>
        <div className="f-desc">
          CodeNaren Clothing Store, your one-stop shop for the latest fashion
          trends. Our online store offers a wide range of clothing options for
          men, women, and children, ensuring that everyone can find something
          they love.
        </div>
        <div className="social-container">
          <div className="s-icon">
            <FacebookIcon style={{ background: "#385999" }} />
          </div>
          <div className="s-icon">
            <TwitterIcon style={{ background: "#55ACEE" }} />
          </div>
          <div className="s-icon">
            <InstagramIcon style={{ background: "#E4405F" }} />
          </div>
          <div className="s-icon">
            <WhatsAppIcon style={{ background: "green" }} />
          </div>
        </div>
      </div>
      <div className="f-center">
        <div className="c-title">
          <h3>Useful Links</h3>
        </div>
        <ul className="list">
          <div className="l-item">Home</div>
          <div className="l-item">Cart</div>
          <div className="l-item">Men Fashion</div>
          <div className="l-item">Women Fashion</div>
          <div className="l-item">Accessories</div>
          <div className="l-item">My Account</div>
          <div className="l-item">Order Tracking</div>
          <div className="l-item">Wishlist</div>
          <div className="l-item">Terms</div>
        </ul>
      </div>
      <div className="f-right">
        <div className="r-title">
          <h1>CONTACT</h1>
        </div>
        <div className="r-info">
          <div className="r-address">
            <h3>
              <PlaceOutlinedIcon style={{ marginRight: "10px" }} />
              Address
            </h3>
            <p>Chennai, India</p>
          </div>
          <div className="phone">
            <h3>
              <CallOutlinedIcon style={{ marginRight: "10px" }} />
              Phone
            </h3>
            <p>+91 8072205480</p>
          </div>
          <div className="mail">
            <h3>
              <MailOutlineOutlinedIcon style={{ marginRight: "10px" }} />
              Email
            </h3>
            <p>naren06251999@gmail.com</p>
          </div>
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
          className="payment"
        />
      </div>
    </div>
  );
};

export default Footer;

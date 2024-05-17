import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="left">
          <div className="language">English</div>
          <div className="search-container">
            <SearchIcon
              style={{ color: "gray", fontSize: 16 }}
              className="cart-nav-icon"
            />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="middle">
          <div className="logo">
            <h1>.codeNAREN</h1>
          </div>
        </div>
        <div className="right">
          <div className="menu-item">REGISTER</div>
          <div className="menu-item">SIGN IN</div>
          <Badge badgeContent={4} color="" className="menu-item">
            <ShoppingCartCheckoutOutlinedIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

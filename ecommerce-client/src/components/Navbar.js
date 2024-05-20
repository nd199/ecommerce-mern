import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

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
          <Link to={"/Cart"}>
            <Badge
              badgeContent={totalQuantity}
              color="secondary"
              className="menu-item"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

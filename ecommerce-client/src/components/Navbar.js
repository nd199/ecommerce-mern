import React, { useState } from "react";
import "./Navbar.css";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import Alert from "@mui/material/Alert";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(logout());
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="left">
          <div className="language">English</div>
          <Link to={"/"}>
            <div className="menu-item">HOME</div>
          </Link>
          {!currentUser && (
            <Link to={"/Register"}>
              <div className="menu-item">REGISTER</div>
            </Link>
          )}
        </div>
        <div className="middle">
          {showAlert && (
            <Alert severity="success" className="alert">
              Logged Out Successfully
            </Alert>
          )}
          <div className="logo">
            <h1>.codeNAREN</h1>
          </div>
        </div>
        <div className="right">
          {!currentUser && (
            <Link to={"/Login"}>
              <div className="menu-item">SIGN IN</div>
            </Link>
          )}
          {currentUser && (
            <div className="menu-item" onClick={handleLogout}>
              LOG OUT
            </div>
          )}
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

import React from "react";
import "./Product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Product = ({ item }) => {
  return (
    <div className="p-container">
      <div className="circle"></div>
      <img src={item.img} alt="" />
      <div className="p-info">
        <div className="icons">
          <ShoppingCartIcon className="icon"/>
          <SearchIcon className="icon"/>
          <FavoriteIcon className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Product;

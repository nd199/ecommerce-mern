import React from "react";
import "./CategoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="ci-container">
      <Link to={`/Products/${item.category}`}>
        <img src={item.img} alt="" />
        <div className="info">
          <h1>{item.title}</h1>
          <button type="button">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;

import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="ci-container">
      <img src={item.img} alt="" />
      <div className="info">
        <h1>{item.title}</h1>
        <button type="button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;

import React from "react";
import "./Categories.css";
import { categories } from "../Data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="c-container">
      {categories.map((category, index) => (
        <CategoryItem item={category} key={index}/>
      ))}
    </div>
  );
};

export default Categories;

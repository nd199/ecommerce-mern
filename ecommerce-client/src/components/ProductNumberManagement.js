import React from "react";
import "./PM.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";


const ProductNumberManagement = ({ quantityHandler, quantity }) => {

  return (
    <div>
      <div className="amount-container">
        <button className="remove" onClick={() => quantityHandler("dec")}>
          <RemoveOutlinedIcon className="a-icon" />
        </button>
        <div className="amount">{quantity}</div>
        <button className="add" onClick={() => quantityHandler("inc")}>
          <AddOutlinedIcon className="a-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductNumberManagement;

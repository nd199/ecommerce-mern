const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    title: { type: "String", required: true, unique: true },
    desc: { type: "String", required: true },
    img: { type: "String", required: true },
    categories: { type: Array, default: [] },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);

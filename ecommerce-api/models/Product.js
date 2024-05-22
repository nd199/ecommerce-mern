const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    title: { type: "String", required: true, unique: true },
    desc: { type: "String", required: true },
    img: { type: Array, required: true },
    categories: { type: Array, default: [] },
    size: { type: Array },
    color: { type: Array },
    type: { type: "String" },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);

const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: "String", default: "" },
    lastName: { type: "String", default: "" },
    username: { type: "String", required: true, unique: true },
    email: { type: "String", required: true, unique: true },
    password: { type: "String", required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);

import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="n-container">
      <h1>NewsLetter.</h1>
      <div className="n-desc">
        <p>Get timely updates of your favorite products to your mailbox</p>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Your Email" />
        <button type="submit">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

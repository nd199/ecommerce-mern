import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div>
          <h1>CREATE AN ACCOUNT</h1>
        </div>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last-name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm-password" />
          <div className="agreement">
            <div className="agreement-text">
              By Creating an account. I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </div>
          </div>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

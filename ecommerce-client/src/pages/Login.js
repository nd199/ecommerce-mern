import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-container">
        <div className="login-wrapper">
          <div>
            <h1>SIGN IN</h1>
          </div>
          <form action="" method="post">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button className="button">LOGIN</button>
            <div className="links">
              <a href="#">FORGOT PASSWORD?</a>
              <a href="#">CREATE A NEW ACCOUNT</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

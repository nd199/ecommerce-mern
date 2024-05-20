import React, { useState } from "react";
import "./Login.css";
import { login } from "../redux/ApiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-container">
        <div className="login-wrapper">
          <div>
            <h1>SIGN IN</h1>
          </div>
          <form action="" method="post">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button" onClick={loginHandler}>
              LOGIN
            </button>
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

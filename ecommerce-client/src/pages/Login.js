import React, { useState } from "react";
import "./Login.css";
import { login } from "../redux/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

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
            <button
              className="button"
              onClick={loginHandler}
              disabled={isFetching}
            >
              LOGIN
            </button>
            {error && (
              <div className="error">
                <span>Oops Something Went Wrong!...</span>
              </div>
            )}
            <div className="links">
              <a href="#">FORGOT PASSWORD?</a>
              <Link to={"/Register"}>
                <a href="#">CREATE A NEW ACCOUNT</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

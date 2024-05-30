import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/ApiCalls";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(dispatch, { username, password });
    } catch (err) {
      console.error(
        "Login error: ",
        err.response?.data?.error || "An unexpected error occurred"
      );
      setError(err.response?.data?.error || "An unexpected error occurred");
    }
  };

  return (
    <div className="loginAdmin">
      <div className="loginCard">
        <h1>Login</h1>
        <div className="inputs">
          <label>User Name:</label>
          <input
            type="text"
            placeholder="username"
            className="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}{" "}
        <button className="btn" onClick={loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

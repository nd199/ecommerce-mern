import React, { useState } from "react";
import "./Register.css";
import { register } from "../redux/ApiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const userRegHandler = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!firstname || !lastname || !email || !username || !password) {
      setError("Please fill out all fields");
      return;
    }

    register(dispatch, { firstname, lastname, email, username, password })
      .then(() => {
        setSuccess("Registration successful");
        navigate("/Login");
      })
      .catch(() => {
        setError("Registration failed. Please try again");
      });
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div>
          <h1>CREATE AN ACCOUNT</h1>
        </div>
        <form method="post" onSubmit={userRegHandler}>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="agreement">
            <div className="agreement-text">
              By Creating an account. I consent to the processing of my personal
              data in accordance with the{" "}
              <a href="#">
                <b>PRIVACY POLICY</b>
              </a>
            </div>
          </div>
          <button type="submit">CREATE</button>
        </form>
        {error && (
          <div className="error">
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="success">
            <span>{success}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;

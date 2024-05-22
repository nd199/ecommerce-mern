import React, { useState } from "react";
import "./Register.css";
import { register } from "../redux/ApiCalls";
import { useDispatch} from "react-redux";


const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [error, showError] = useState(false);

  const userRegHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(password === confirmPassword);
      register(dispatch, { name, lastName, email, username, password });
    } else {
      showError(true);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div>
          <h1>CREATE AN ACCOUNT</h1>
        </div>
        <form action="/register" method="post">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm-password"
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
          <button onClick={userRegHandler}>CREATE</button>
          {error && (
            <div className="error">
              <span>Oops Something Went Wrong!...</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;

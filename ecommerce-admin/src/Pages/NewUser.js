import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="nUTitle">New User</h1>
      <form className="nUForm">
        <div className="nuItem">
          <label htmlFor="">UserName</label>
          <input type="text" name="" placeholder="John222" id="" />
        </div>
        <div className="nuItem">
          <label htmlFor="">Full Name</label>
          <input type="text" name="" placeholder="John Doe" id="" />
        </div>
        <div className="nuItem">
          <label htmlFor="">Email</label>
          <input type="email" name="" placeholder="John@gmail.com" id="" />
        </div>
        <div className="nuItem">
          <label htmlFor="">Password</label>
          <input type="password" name="" placeholder="password" id="" />
        </div>
        <div className="nuItem">
          <label htmlFor="">Phone</label>
          <input type="text" name="" placeholder="+1 123 456 78" id="" />
        </div>
        <div className="nuItem">
          <label htmlFor="">Address</label>
          <input type="text" name="" placeholder="Los Vegas, US" id="" />
        </div>
        <div className="nuItem">
          <label htmlFor="">Gender</label>
          <div className="userGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="nuItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserActiveSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="submit">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;

import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  return (
    <div className="s-menu">
      <div className="s-title">
        <h1>{props.title}</h1>
      </div>
      <ul className="s-list">
        {props.stuff?.map((iconStuff, index) => (
          <li className="s-listItem" key={index}>
            {iconStuff.link ? (
              <Link to={iconStuff.link} className="i-link">
                <div className="s-i-item">
                  <div className="s-icon">{iconStuff.icon}</div>
                  <div className="s-name">{iconStuff.name}</div>
                </div>
              </Link>
            ) : (
              <div className="s-i-item">
                <div className="s-icon">{iconStuff.icon}</div>
                <div className="s-name">{iconStuff.name}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;

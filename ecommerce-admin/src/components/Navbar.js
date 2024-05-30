import React from "react";
import "./Navbar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLocStorage = () => {
    localStorage.removeItem("persist:root");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <div className="nav-left">
          <span className="logo">Admin-DashBoard</span>
        </div>
        <div className="nav-right">
          <div className="nav-iconContainer">
            <LogoutIcon
              style={{ fontSize: "26px", color: "white" }}
              titleAccess="Logout"
            />
            <span className="notification logout" onClick={handleLocStorage}>
              Logout
            </span>
          </div>
          <div className="nav-iconContainer">
            <NotificationsNoneOutlinedIcon
              style={{ fontSize: "26px", color: "white" }}
              titleAccess="Notification"
            />
            <span className="notification">2</span>
          </div>
          <div className="nav-iconContainer">
            <LanguageOutlinedIcon
              titleAccess="Language"
              style={{ fontSize: "26px", color: "white" }}
            />
            <span className="notification">2</span>
          </div>
          <div className="nav-iconContainer">
            <AdminPanelSettingsOutlinedIcon
              titleAccess="Settings"
              style={{ fontSize: "26px", color: "white" }}
            />
            <span className="notification">2</span>
          </div>
          <img
            src="/images/naren.png"
            alt=""
            className="avatar"
            title="Admin"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

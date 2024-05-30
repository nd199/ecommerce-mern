import React from "react";
import "./UserInfoAndEdit.css";
import {
  CalendarTodayOutlined,
  LocationOnOutlined,
  MailOutlined,
  Person2Outlined,
  PhoneAndroidOutlined,
  PublishOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserInfoAndEdit = () => {
  return (
    <div className="uEdit">
      <div className="uTitleContainer">
        <h1 className="uTitle">Edit User</h1>
        <Link to={"/NewUser"}>
          <button className="userAdd">Create</button>
        </Link>
      </div>
      <div className="uContainer">
        <div className="uInfo">
          <div className="uInfoContainer">
            <img
              src="https://imgs.search.brave.com/WZirnZKPnJp5y-WxleFntqVsyNaurlBGbRfxIDuvPSI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/NTY1ODYzNC9waG90/by9iZWF1dGlmdWwt/d29tYW4td2Vhcmlu/Zy1zd2VhdGVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/UVRrMFN3a0o3SWgt/M19Vb3pnU3pEU0JN/cTM3YUMxOXU4QnlT/ZTduYUs4PQ"
              alt=""
              className="userInfoImg"
            />
            <div className="uInfoText">
              <h3 className="uInfoName">Becky Rose</h3>
              <span className="uInfoTitle">Software Engineer</span>
            </div>
            <div className="uInformation">
              <span className="userInfoTitle">Account Details</span>
              <div className="uInfoMore">
                <Person2Outlined />
                <span className="userShowInfo">b_Rose277</span>
              </div>
              <div className="uInfoMore">
                <CalendarTodayOutlined />
                <span className="userShowInfo">25.06.1999</span>
              </div>
              <span className="userInfoTitle">Contact Details</span>
              <div className="uInfoMore">
                <PhoneAndroidOutlined />
                <span className="userShowInfo">+123 2324 2232</span>
              </div>
              <div className="uInfoMore">
                <MailOutlined />
                <span className="userShowInfo">beckyRose@gmail.com</span>
              </div>
              <div className="uInfoMore">
                <LocationOnOutlined />
                <span className="userShowInfo">LV, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="uUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form className="userUpdateForm">
            <div className="uUpLeft">
              <div className="uUpLeftItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="b_Rose277"
                  className="userUpInput"
                />
              </div>
              <div className="uUpLeftItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Becky Rose"
                  className="userUpInput"
                />
              </div>
              <div className="uUpLeftItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="beckyRose@gmail.com"
                  className="userUpInput"
                />
              </div>
              <div className="uUpLeftItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+123 2324 2232"
                  className="userUpInput"
                />
              </div>
              <div className="uUpLeftItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="LV, USA"
                  className="userUpInput"
                />
              </div>
            </div>
            <div className="uUpRight">
              <div className="uUpRightUpload">
                <img
                  src="https://imgs.search.brave.com/WZirnZKPnJp5y-WxleFntqVsyNaurlBGbRfxIDuvPSI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/NTY1ODYzNC9waG90/by9iZWF1dGlmdWwt/d29tYW4td2Vhcmlu/Zy1zd2VhdGVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/UVRrMFN3a0o3SWgt/M19Vb3pnU3pEU0JN/cTM3YUMxOXU4QnlT/ZTduYUs4PQ"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishOutlined className="uUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInfoAndEdit;

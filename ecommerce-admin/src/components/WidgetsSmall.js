import React, { useState, useEffect } from "react";
import "./WidgetsSmall.css";
import { VisibilityOutlined } from "@mui/icons-material";
import { userRequest } from "../AxiosMethods";

const WidgetsSmall = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userRequest().get("users/?new=true");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="widgetSmall">
      <span className="wsTitle">Newly Joined Members</span>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>{error}</p>
        </div>
      ) : (
        <ul className="wsList">
          {users?.length > 0 ? (
            users?.map((user) => (
              <li className="wsListItem" key={user._id}>
                <img
                  src={
                    user?.image ||
                    "https://images.unsplash.com/photo-1636308600707-e19abecd6246?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvbWFuJTIwZmFjZSUyMGhvdHxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt=""
                  className="wsImage"
                />
                <div className="wsUser">
                  <span className="wsUsername">{user.username}</span>
                  <span className="wsUserTitle">
                    {user.title || "No Title"}
                  </span>
                </div>
                <button className="wsButton">
                  <VisibilityOutlined className="ws-icon" />
                  Display
                </button>
              </li>
            ))
          ) : (
            <div className="loading">
              <p>No Users Found</p>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default WidgetsSmall;

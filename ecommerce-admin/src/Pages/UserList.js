import React, { useState, useEffect } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../redux/ApiCalls";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    // Fetch users when component mounts
    fetchUsers(dispatch);
  }, [dispatch]);

  const fetchUserList = () => {
    // Refetch user list after deletion
    fetchUsers(dispatch);
  };

  const deleteUserHandler = async (id) => {
    try {
      // Delete the user
      await deleteUser(id, dispatch);
      
      // Refetch user list after successful deletion
      fetchUserList();
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "userName",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ulUser">
            <img className="ulImg" src={params.row.avatar} alt="User Avatar" />
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "online",
      headerName: "Online Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            style={{
              color: params.row.online ? "green" : "red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {params.row.online ? "Online" : "Not Online"}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="ulActions">
            <Link to={"/User/" + params.row._id}>
              <EditOutlined className="ulEdit" />
            </Link>
            <DeleteOutlineOutlined
              className="ulDelete"
              onClick={() => deleteUserHandler(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="ulist">
      <DataGrid
        rows={users}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
        checkboxSelection
        headerClassName="header-class"
      />
    </div>
  );
};

export default UserList;

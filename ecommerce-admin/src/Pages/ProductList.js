import { React, useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/ApiCalls";

const ProductList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.products);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const fetchProductList = () => {
    fetchProducts(dispatch);
  };

  const deleteProductHandler = async (id) => {
    try {
      await deleteProduct(id, dispatch);
      fetchProductList();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "name",
      headerName: "ProductName",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="plProduct">
            <img className="plImg" src={params.row.img} />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="plActions">
            <Link to={"/Product/" + params.row._id}>
              <EditOutlined className="plEdit" />
            </Link>
            <DeleteOutlineOutlined
              className="plDelete"
              onClick={() => deleteProductHandler(params.row._id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productListPage">
      <div className="create">
        <Link to="/NewProduct">
          <button className="productAdd">Create</button>
        </Link>
      </div>
      <div className="productList" style={{ overflow: "scroll" }}>
        <DataGrid
          rows={items}
          disableRowSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 50 },
            },
          }}
          pageSizeOptions={[20]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default ProductList;

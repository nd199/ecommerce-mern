import React, { useEffect, useMemo, useState } from "react";
import "./ProductInfoAndEdit.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { PublishOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userRequest } from "../AxiosMethods";

const ProductInfoAndEdit = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [file, setFile] = useState(null);
  const fileUploadHandler = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFile(fileURL);
    }
  };

  const MONTHS = useMemo(() => {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  }, []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest().get("/orders/income?pid=" + productId);
        const formattedData = res.data.map((item) => ({
          name: MONTHS[item._id - 1],
          Sales: item.total,
        }));
        setProductStats(formattedData);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="pEdit">
      <div className="pTitleContainer">
        <h1 className="pTitle">Product</h1>
        <Link to="/NewProduct">
          <button className="productAdd">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productStats}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={
                product.img ||
                "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg"
              }
              alt=""
              className="productInfoImage"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">id:</div>
              <div className="productInfoValue">{product._id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">sales :</div>
              <div className="productInfoValue">4323</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">sizes :</div>
              <div className="productInfoValue">{`[${product.size}]`}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">colors :</div>
              <div className="productInfoValue">{`[${product.color}]`}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock :</div>
              <div className="productInfoValue">
                {product.inStock === true ? <p>Yes</p> : <p>No</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="number" placeholder={product.price} />
            <label>Stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormCentre">
            <img
              src={
                product.img ||
                "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg"
              }
              alt=""
              className="productUploadImg"
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <label htmlFor="file">
                <PublishOutlined className="pUpdateIcon" />{" "}
                <p>Upload new Image</p>
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={fileUploadHandler}
              />
            </div>
            {file && (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={file}
                  alt="Product Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    padding: "2px",
                    border: "1px solid black",
                  }}
                />
              </div>
            )}
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductInfoAndEdit;

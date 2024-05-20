import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../AxiosMethods";
import { addItemToCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products, setProducts] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let pricePerItem = products.price;
  const [total, setTotal] = useState(pricePerItem);
  const [showColorSize, setShowColorSize] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/Products/" + id);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    products.type === "Groceries" && setShowColorSize(false);
  }, [products]);

  const quantityHandler = (type) => {
    if (type === "inc") {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setTotal((newQuantity * pricePerItem).toFixed(2));
    } else {
      const newQuantity = quantity - 1;
      quantity > 0 && setQuantity(newQuantity);
      total > 0 && setTotal((newQuantity * pricePerItem).toFixed(2));
    }
  };

  const clickHandler = () => {
    dispatch(addItemToCart({ ...products, quantity, color, size }));
  };

  return (
    <div className="sp-container">
      <NavBar />
      <Announcement />
      <div className="sp-wrapper">
        <div className="sp-image-container">
          <img src={products.img} alt="" style={{ objectFit: "contain" }} />
        </div>
        <div className="sp-info-container">
          <div
            className="title"
            style={{ display: "block", alignItems: "center" }}
          >
            <h1 className="sp-title">{products.title}</h1>
          </div>
          <div className="sp-desc">
            <p>{products.desc}</p>
          </div>
          <div className="price">
            <div>
              <p style={{ fontSize: "40px", marginTop: "5px" }}>
                ${quantity === 1 ? pricePerItem : total}
              </p>
            </div>
          </div>
          {showColorSize && (
            <div className="filter-container">
              <div className="filter">
                <h3>Color</h3>
                {products.color?.map((color) => (
                  <div
                    className="f-color"
                    style={{ backgroundColor: color }}
                    key={color}
                    onClick={() => setColor(color)}
                  ></div>
                ))}
              </div>
              <div className="filter">
                <h3>Size</h3>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="" disabled>
                    Size
                  </option>
                  {products.size?.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div className="add-to-cart">
            <div className="amount-container">
              <button className="remove" onClick={() => quantityHandler("dec")}>
                <RemoveOutlinedIcon className="a-icon" />
              </button>
              <div className="amount">{quantity}</div>
              <button className="add" onClick={() => quantityHandler("inc")}>
                <AddOutlinedIcon className="a-icon" />
              </button>
            </div>
            <button className="add-cart" onClick={clickHandler}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;

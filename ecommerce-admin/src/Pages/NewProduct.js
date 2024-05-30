import React, { useState, useEffect } from "react";
import "./NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { addProduct } from "../redux/ApiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const [input, setInput] = useState({});
  const [file, setFile] = useState({});
  const [categories, setCategories] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.values(input).every((value) => value) && file.name) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [input, file]);

  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "checkbox" ? e.target.checked : value;

    setInput((prev) => ({
      ...prev,
      [name]: name === "inStock" ? parsedValue === "true" : parsedValue,
    }));
  };

  const changeCategoryHandler = (e) => {
    setCategories(e.target.value.split(","));
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload failed: ", error);
      },
      () => {
        try {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = { ...input, img: downloadURL, categories };
            addProduct(product, dispatch);
          });
        } catch (error) {
          console.error("Error getting download URL: ", error);
        }
      }
    );

    try {
      await uploadTask;
    } catch (error) {
      console.error("Upload failed: ", error);
    }
  };

  return (
    <div className="newProduct">
      <div className="productCreate">
        <div className="pTitle">New Product</div>
        <form className="pForm">
          <div className="pItem">
            <label>Product Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              style={{
                height: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
          </Box>
          <div className="pItem">
            <label>Name</label>
            <input
              name="title"
              type="text"
              placeholder="Samsung S24"
              onChange={changeHandler}
            />
          </div>
          <div className="pItem">
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="100"
              onChange={changeHandler}
            />
          </div>
          <div className="pItem">
            <label>Categories</label>
            <input
              type="text"
              placeholder="jeans, skirts"
              onChange={changeCategoryHandler}
            />
          </div>
          <div className="pItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="Description"
              name="desc"
              onChange={changeHandler}
            />
          </div>
          <div className="pItem">
            <label>Stock</label>
            <select name="inStock" id="inStock" onChange={changeHandler}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button
            onClick={clickHandler}
            className={`pButton ${isButtonDisabled ? "disabled" : ""}`}
            disabled={isButtonDisabled}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;

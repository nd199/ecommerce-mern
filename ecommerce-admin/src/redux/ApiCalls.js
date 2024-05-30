import axios from "axios";
import { publicRequest, userRequest } from "../AxiosMethods";
import {
  addProductsFailure,
  addProductsStart,
  addProductsSuccess,
  deleteProductsFailure,
  deleteProductsStart,
  deleteProductsSuccess,
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
  updateProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
} from "./ProductsRedux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "./userSlice";

// Login
export const login = async (dispatch, userInfo) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", userInfo);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(loginFailure(error.response.data));
      throw error;
    } else {
      dispatch(loginFailure({ error: "An unexpected error occurred" }));
      throw new Error("An unexpected error occurred");
    }
  }
};

// Fetch Products
export const fetchProducts = async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(fetchProductsSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(fetchProductsFailure(error.response.data));
    } else {
      dispatch(fetchProductsFailure({ error: "An unexpected error occurred" }));
    }
  }
};

// Delete Product
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductsStart());
  try {
    await userRequest().delete(`/products/${id}`);
    dispatch(deleteProductsSuccess(id));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(deleteProductsFailure(error.response.data));
    } else {
      dispatch(
        deleteProductsFailure({ error: "An unexpected error occurred" })
      );
    }
  }
};

// Update Product
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductsStart());
  try {
    const res = await userRequest().put(`/products/${id}`, product);
    dispatch(updateProductsSuccess({ id, product: res.data }));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(updateProductsFailure(error.response.data));
    } else {
      dispatch(
        updateProductsFailure({ error: "An unexpected error occurred" })
      );
    }
  }
};

// Add Product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductsStart());
  try {
    const res = await userRequest().post("/products", product);
    dispatch(addProductsSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(addProductsFailure(error.response.data));
    } else {
      dispatch(addProductsFailure({ error: "An unexpected error occurred" }));
    }
  }
};

// Update User
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest().put(`/users/${id}`, user);
    dispatch(updateUserSuccess({ id, user: res.data }));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(updateUserFailure(error.response.data));
    } else {
      dispatch(updateUserFailure({ error: "An unexpected error occurred" }));
    }
  }
};

// Delete User
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await userRequest().delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(deleteUserFailure(error.response.data));
    } else {
      dispatch(deleteUserFailure({ error: "An unexpected error occurred" }));
    }
  }
};

// Fetch Users
export const fetchUsers = async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const res = await userRequest().get("/users");
    dispatch(fetchUsersSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(fetchUsersFailure(error.response.data));
    } else {
      dispatch(fetchUsersFailure({ error: "An unexpected error occurred" }));
    }
  }
};

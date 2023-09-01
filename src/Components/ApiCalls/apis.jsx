import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

// const tokens =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiIxIiwiaWF0IjoxNjkyODYzNTI3LCJleHAiOjE2OTI4NjcxMjd9.84vrKkh3GjIKWMXPd2jzZOo6pzXNmHk2OhXY2ePOH7Y";

// Login
export const login = async (values) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://e-commerce-sbtq.onrender.com/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    });
    // console.log(res.data);
    return res;
  } catch (error) {
    let errorRes = error.response.data.error;
    // console.log(errorRes);
    return errorRes;
  }

  // return res;
};

// Signup
export const signupData = async (values) => {
  const res = await axios({
    url: "https://e-commerce-sbtq.onrender.com/api/user/sign_up",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: values,
  });
  return res;
};

// Get Categories
export const getCategories = async () => {
  const res = await axios({
    mode: "cors",
    // url: "https://fakestoreapi.com/products/categories",
    url: "https://e-commerce-sbtq.onrender.com/api/category/Category",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // Authorization: `Bearer ${tokens}`,
    },
  });
  console.log("res", res);
  return res;
};

//////////SELLER APIS//////////
export const productUplolad = async (values, id) => {
  console.log("Values", values, id);
  await axios({
    url: `https://e-commerce-sbtq.onrender.com/api/product/uploadProduct`,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      // Authorization: `Bearer ${token}`,
      Authentication: "Bearer {token}",
    },
    data: values,
  })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};

// Get Seller's Product
export const getSellerProducts = async () => {
  try {
    const res = await axios({
      url: `https://e-commerce-sbtq.onrender.com/api/product/getSellerProduct`,
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get All Products
export const getAllProducts = async (categoryName) => {
  const res = await axios({
    method: "GET",
    url: `https://e-commerce-sbtq.onrender.com/api/product/getProducts?categoryName=${categoryName}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// Get Products by Category
export const getProductByCategory = async (payload) => {
  const res = await axios({
    method: "GET",
    // url: `https://e-commerce-sbtq.onrender.com/api/product/getProductByCategory?categoryName=${payload}`,
    url: `https://fakestoreapi.com/products/category/${payload}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

// Get All Products by FAKEAPI
export const getProducts = async () => {
  const res = await axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

//Add to Cart
export const addToCart = async () => {
  const res = await axios({
    method: "get",
    url: "https://fakestoreapi.com/carts",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

//Forgot Password
export const forgotPassword = async (values) => {
  await axios({
    url: "https://e-commerce-sbtq.onrender.com/api/user/forget_password",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: values,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

// Get Product Detail
export const getProductDetail = async (payload) => {
  const res = await axios({
    method: "get",
    url: `https://fakestoreapi.com/products/${payload}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

//Reset Password
export const resetPassword = async (values) => {
  await axios({
    url: "https://e-commerce-sbtq.onrender.com/api/user/reset_password",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: values,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

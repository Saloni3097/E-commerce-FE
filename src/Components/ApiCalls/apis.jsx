import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
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
    // console.log("Error: ", errorRes);
    return errorRes;
  }
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
    url: "https://e-commerce-sbtq.onrender.com/api/category/Category",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log("res", res);
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
      Authorization: `Bearer ${token}`,
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
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get All Products
export const getAllProducts = async () => {
  // console.log(categoryName);
  const res = await axios({
    method: "GET",
    url: `https://e-commerce-sbtq.onrender.com/api/product/getProducts`,
    //  api/product/getProducts?productName=dg

    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("res>", res);
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
// export const getProducts = async () => {
//   const res = await axios({
//     method: "GET",
//     url: "https://fakestoreapi.com/products",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return res;
// };

//Add to Cart(POST)
export const addToCart = async (values) => {
  try {
    const res = await axios({
      url: "https://e-commerce-sbtq.onrender.com/api/product/addCart",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    });
    return res;
  } catch (error) {
    let errorResponse = error.response.data.message;
    console.log("Error:", errorResponse);
    return errorResponse;
  }
};

//Add to Cart(GET)
export const getCartData = async (payload) => {
  try {
    const res = await axios({
      url: `https://e-commerce-sbtq.onrender.com/api/product/addCart/${payload}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//Forgot Password
export const forgotPassword = async (values) => {
  try {
    const res = await axios({
      url: "https://e-commerce-sbtq.onrender.com/api/user/forget_password",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    });
    console.log("Res>>>>", res);
    return res;
  } catch (error) {
    let errorMessage = error.response.data.message;
    console.log("Error: ", errorMessage);
    return errorMessage;
  }
};

//Reset Password
export const resetPassword = async (values) => {
  // debugger;
  try {
    const res = await axios({
      url: "https://e-commerce-sbtq.onrender.com/api/user/reset_password",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      data: values,
    });
    console.log("res token", res);
    return res;
  } catch (error) {
    let errorMsg = error.response.data.msg;
    console.log("ErrorMsg: ", errorMsg);
    return errorMsg;
  }
};
// Get Product Detail
export const getProductDetail = async (id) => {
  const res = await axios({
    method: "GET",
    url: `https://e-commerce-sbtq.onrender.com/api/product/products/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

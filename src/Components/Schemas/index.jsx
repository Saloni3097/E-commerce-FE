import * as Yup from "yup";

//Login Schema
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!"),
});

//Add Product Schema
export const addProductSchema = Yup.object({
  productName: Yup.string().required("Please enter product name!"),
  productDescription: Yup.string().required(
    "Please enter product description!"
  ),
  productPrice: Yup.number().required("Please enter product Price!"),
  stock: Yup.number().required("Please enter stock availability!"),
  category: Yup.string().required("Please select the category!"),
});

//Signup Schema
export const signupSchema = Yup.object({
  username: Yup.string().min(2).required("Please enter your username!"),
  email: Yup.string().email().required("Please enter your email!"),
  password: Yup.string().min(6).required("Please enter the password!"),
  role: Yup.string().required("Please select role!"),
});

//Forgot Password Schema
export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email!"),
});

//Reset Password Schema
export const resetPasswordSchema = Yup.object({
  new_password: Yup.string().min(8).required("Please enter the password!"),
  // .matches(/[0-9]/, "Password requires a number")
  // .matches(/[a-z]/, "Password requires a lowercase letter")
  // .matches(/[A-Z]/, "Password requires an uppercase letter")
  // .matches(/[^\w]/, "Password requires a symbol"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});

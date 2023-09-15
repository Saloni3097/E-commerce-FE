import * as Yup from "yup";

//Login Schema
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!"),
});

//Add Product Schema
export const addProductSchema = Yup.object({
  productName: Yup.string().required("Please enter product name!"),
  description: Yup.string().required("Please enter product description!"),
  price: Yup.number().required("Please enter product Price!"),
  // stock: Yup.number().required("Please enter stock availability!"),
  category: Yup.string().required("Please select the category!"),
});

//Signup Schema
export const signupSchema = Yup.object({
  username: Yup.string().min(2).required("Please enter your username!"),
  email: Yup.string().email().required("Please enter your email!"),
  password: Yup.string()
    .min(8)
    .required("Please enter the password!")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  role: Yup.string().required("Please select role!"),
});

//Forgot Password Schema
export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email!"),
});

//Reset Password Schema
export const resetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .min(8)
    .required("Please enter the password!")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

//Check PhoneNumber Schema
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const phoneNumberSchema = Yup.object({
  phoneNumber: Yup.string()
    .min(10)
    .max(10)
    .matches(phoneRegExp, "Phone number is not valid"),

  pincode: Yup.string().max(6).matches(phoneRegExp, "Invalid pincode"),
});

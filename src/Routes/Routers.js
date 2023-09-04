import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Cart from "../Pages/CartProduct/index";
import Products from "../Pages/Moreproducts/index";
import Category from "../Pages/CategorySection/index";
import Profile from "../Pages/Profile/index";
import ProductDetails from "../Pages/DetailPage/index";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import User from "../Components/layout/User";
import Seller from "../Components/layout/Seller";
import AddProduct from "../Components/AddProduct";
import AllProducts from "../Components/AllProducts";
import NotFound from "../Components/NotFound";
import SellerLogin from "../Pages/SellerLogin/SellerLogin";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<User />}>
        <Route exact index element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/categoryProducts/:categoryName" element={<Category />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/userProfile" element={<Profile />} />

        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route index element={<Home />} />
      </Route>
      <Route path="/seller" element={<SellerLogin />} />
      <Route path="/seller/dashboard" element={<Seller />}>
        <Route index element={<AllProducts />} />
        <Route path="/seller/dashboard/addProduct" element={<AddProduct />} />
      </Route>
      {/* NotFound should be the last route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

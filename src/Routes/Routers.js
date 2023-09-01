import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
import Login from "../Components/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Cart from "../Pages/CartProduct/index";
import Products from "../Pages/Moreproducts/index";
import Category from "../Pages/CategorySection/index";
import ProductDetails from "../Pages/DetailPage/index";
// import SellerDashBoard from "../Pages/Seller";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import User from "../Components/layout/User";
import Seller from "../Components/layout/Seller";
import AddProduct from "../Components/AddProduct";
import AllProducts from "../Components/AllProducts";
import SellerLogin from "../Pages/SellerLogin";
import NotFound from "../Components/NotFound";
// import CategoryDetail from "../Pages/CategoryDetail/CategoryDetail";
// import User from "../Components/layout/User";
// import Seller from "../Components/layout/Seller";
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
        <Route
          path="/productDetail/:productName"
          element={<ProductDetails />}
        />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route index element={<Home />} />
      </Route>
      <Route exact path="/seller" element={<SellerLogin />} />
      {/* <Route index element={} /> */}
      <Route exact path="/seller/dashboard" element={<Seller />}>
        <Route exact index element={<AllProducts />} />
        <Route
          exact
          path="/seller/dashboard/addProduct"
          element={<AddProduct />}
        />
      </Route>
      {/* </Route> */}
      {/* <Route path="/" element={<Navigate to="home" />} /> */}
      {/* <Route path="/categoryDetail" element={<CategoryDetail />} /> */}
      {/* <Route path="/seller/products/:id" element={<AllProducts />} /> */}

      {/* NotFound should be the last route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

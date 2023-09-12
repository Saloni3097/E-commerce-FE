import React, { useState, useEffect } from "react";
// import {CardJson} from '../../JsonData/AddtoCart';
import Cart from "./Cart";
import { getCartData } from "../../Components/ApiCalls/apis";
const Index = () => {
  useEffect(() => {
    carts();
  }, []);

  const [cartData, setcartData] = useState([]);
  const carts = async () => {
    try {
      const res = await getCartData();
      console.log("Cart", res);
      setcartData(res?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {/* <section><Cart cart_data={CardJson} /></section> */}
      <Cart cart_data={cartData} />
    </>
  );
};

export default Index;

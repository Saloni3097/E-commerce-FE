import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Cart from "./Cart";
import { getCartData } from "../../Components/ApiCalls/apis";

const Index = () => {
  useEffect(() => {
    carts();
  }, []);

  const [cartData, setcartData] = useState([]);
  // const { tempId } = useParams();

  const carts = async () => {
    try {
      const res = await getCartData();
      setcartData(res?.data?.result[0]);
      console.log("Cart???", res?.data?.result[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Cart cart_data={cartData} />
    </>
  );
};

export default Index;

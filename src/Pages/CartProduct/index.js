import React, {useState, useEffect} from "react";
// import {CardJson} from '../../JsonData/AddtoCart';
import Cart from "./Cart";
import {addToCart} from "../../Components/ApiCalls/apis";
const Index = () => {
  useEffect(() => {
    carts();
  }, []);

  const [cartss, setcartss] = useState([]);
  const carts = async () => {
    try {
      const res = await addToCart();
      // console.log("Cart", res);
      setcartss(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {/* <section><Cart cart_data={CardJson} /></section> */}
      <Cart cart_data={cartss}/>
    </>
  );
};

export default Index;

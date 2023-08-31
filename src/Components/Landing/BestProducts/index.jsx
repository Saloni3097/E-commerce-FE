import React, {useEffect, useState} from "react";
// import { BestProduct } from "../../../JsonData/BestProduct";
import BestProducts from "./BestProducts";
import { getProducts} from "../../ApiCalls/apis";
// import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    product();
  }, []);
  // const getProducts = async () => {
  //   const res = await getProducts();
  //   console.log("response: ", res);
  // };
const [bestProducts, setBestProducts] = useState([]);
const product = async () => {
    try {
      const res = await getProducts();
      console.log("Product", res);
      setBestProducts(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* <button onClick={product}>Save</button> */}
      <BestProducts best_product={bestProducts} />
      <BestProducts best_product={bestProducts} />

      {/* <BestProducts best_product={BestProduct} />
      <BestProducts best_product={BestProduct} /> */}
    </>
  );
};

export default Index;

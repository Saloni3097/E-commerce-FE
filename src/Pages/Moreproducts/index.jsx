import React, { useEffect, useState, useParams } from "react";
// import { useParams } from "react-router-dom";
import Products from "./Products";
import { getAllProducts } from "../../Components/ApiCalls/apis";

const Index = () => {
  const [productsData, setProductsData] = useState([]);
  //   const { categoryName } = useParams();

  useEffect(() => {
    getProductCategory();
  }, []);

  const getProductCategory = async () => {
    const res = await getAllProducts();
    setProductsData(res?.data?.result);
  };
  console.log("data", productsData);
  return (
    <>
      <Products cate_data={productsData} />
    </>
  );
};

export default Index;

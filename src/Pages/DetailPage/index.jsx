import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { getAllProducts } from "../../Components/ApiCalls/apis";
// import { Container } from "react-bootstrap";
// import { ProductDetailJson } from "../../JsonData/ProductDetailJson";

const Index = () => {
  const [prodDetail, setProdDetail] = useState([]);
  const { productName } = useParams();

  const getProducDetail = async () => {
    const res = await getAllProducts(productName);
    setProdDetail(res?.data?.data);
  };

  useEffect(() => {
    getProducDetail();
  }, []);
  return (
    <>
      <section>
        <ProductDetail product_detail={prodDetail} />
      </section>
    </>
  );
};

export default Index;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { getProductDetail } from "../../Components/ApiCalls/apis";

const Index = () => {
  const [prodDetail, setProdDetail] = useState([]);
  const { id } = useParams();
  console.log("data", prodDetail);
  const getProducDetail = async () => {
    console.log(">>", id);
    const res = await getProductDetail(id);
    console.log("result>>>>>: ", res);
    setProdDetail(res?.data?.data);
  };
  console.log("prodDetail>>>", prodDetail);
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

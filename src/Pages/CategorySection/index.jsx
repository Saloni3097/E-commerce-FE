import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorySection from "./CategorySection";
import { getAllProducts } from "../../Components/ApiCalls/apis";

const Index = () => {
  const { id } = useParams();
  const [productByCate, setProductByCate] = useState([]);
  const getProductByCat = async () => {
    const res = await getAllProducts();
    setProductByCate(
      res?.data?.data?.filter((product) => product?.categoryId == id)
    );
  };
  useEffect(() => {
    getProductByCat();
  }, []);
  return (
    <>
      <section>
        <CategorySection category_data={productByCate} category_id={id} />
      </section>
    </>
  );
};

export default Index;

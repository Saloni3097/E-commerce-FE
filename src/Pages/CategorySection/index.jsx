import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorySection from "./CategorySection";
import { getAllProducts } from "../../Components/ApiCalls/apis";

const Index = () => {
  const { categoryName } = useParams();
  const [productByCate, setProductByCate] = useState([]);

  const getProductByCat = async () => {
    const res = await getAllProducts();
    setProductByCate(
      res?.data?.data.filter((product) => product.category === categoryName)
    );
  };
  console.log("data", productByCate);
  useEffect(() => {
    getProductByCat();
  }, []);
  return (
    <>
      <section>
        <CategorySection
          category_data={productByCate}
          category_name={categoryName}
        />
      </section>
    </>
  );
};

export default Index;

import React, { useEffect, useState } from "react";
import Categories from "./Categories/Category";
import Cardslider from "./Cardslide/Cardslider";
import BestProducts from "./BestProducts/BestProducts";
import { getCategories } from "../ApiCalls/apis";
// import Productcard from "./Multicards/Productcard";

const Landing = () => {
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  useEffect(() => {
    getcategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getcategory = async () => {
    try {
      const res = await getCategories();
      setCategories(res?.data);
      setCategoryIds(res?.data.map((item) => item.id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Categories product_category={categories} />
      <Cardslider />
      <BestProducts categoryIds={categoryIds} />
      {/* <Productcard /> */}
    </>
  );
};

export default Landing;

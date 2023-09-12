import React, { useEffect, useState } from "react";
import Categories from "./Categories/Category";
import Cardslider from "./Cardslide/Cardslider";
import BestProducts from "./BestProducts/BestProducts";
import { getCategories } from "../ApiCalls/apis";
// import Productcard from "./Multicards/Productcard";

const Landing = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesName, setCategoriesName] = useState([]);
  useEffect(() => {
    getcategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getcategory = async () => {
    try {
      const res = await getCategories();
      setCategories(res?.data);
      setCategoriesName(res?.data.map((item) => item.categoryName));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Categories product_category={categories} />
      <Cardslider />
      <BestProducts category_name={categoriesName} />
    </>
  );
};

export default Landing;

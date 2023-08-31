import React, { useEffect, useState } from "react";
import Categories from "./Categories/Category";
import Cardslider from "./Cardslide/Cardslider";
import BestProducts from "./BestProducts/BestProducts";
import { getCategories } from "../ApiCalls/apis";
// import Productcard from "./Multicards/Productcard";

const Landing = () => {
  const [categories, setCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  useEffect(() => {
    getcategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getcategory = async () => {
    console.log("res");
    try {
      const res = await getCategories();
      setCategories(res?.data);
      setCategoryNames(res?.data.map((name) => name.categoryName));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Categories product_category={categories} />
      <Cardslider />
      <BestProducts categoryNames={categoryNames} />
      {/* <Productcard /> */}
    </>
  );
};

export default Landing;

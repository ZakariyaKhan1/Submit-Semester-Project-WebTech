import { useParams } from "react-router-dom";
import ProductList from "../products/productlist";
import { useState } from "react";

const Category = () => {
  const { id } = useParams();
  const catagory=useState('');

  if (parseInt(id) === 1) {
    return <ProductList catagory={"Mobiles"} />;
  } else if (parseInt(id) === 2) {
    return <ProductList catagory={"Watches"} />;
  } else if (parseInt(id) === 3) {
    return <ProductList catagory={"Chargers"} />;
  } else if (parseInt(id) === 4) {
    return <ProductList catagory={"Headphones"} />;
  }
};
export default Category;

import { useState, useEffect, useContext } from "react";
import "./productlist.css";
import { Link } from "react-router-dom";
import Feature from "../featured/feature";
import { StoreContext } from "../../context/StoreContext";

const ProductList = ({ catagory }) => {
  const { products } = useContext(StoreContext);

  const filteredProducts = products.filter(
    (product) => product.category === catagory
  );

  

  return (
    <div className="pcontainer">
      <div className="pcontainer2">
        <h4 className="pcont4-h4">{}</h4>

        <div className="pcontainer3">
          {filteredProducts.map((products) => (
            <Link to={`/cell/${products._id}`} className="listc1">
              <div className="list-cont2">
                <div className="pimage">
                  <img src={products.image}></img>
                </div>
                <div className="pdetails">
                  <div className="pprice">
                    {" "}
                    <h4>Rs {products.price}</h4>{" "}
                  </div>
                  <div className="ptitle">
                    <p>{products.title}</p>
                    <p>{products.description}</p>
                  </div>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>

        <Feature />
      </div>
    </div>
  );
};
export default ProductList;

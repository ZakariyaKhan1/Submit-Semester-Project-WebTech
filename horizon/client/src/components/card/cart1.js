import { useParams, useNavigate } from "react-router-dom";
import "./cart1.css";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import Bucket from "./Bucket";
import { FaHeart } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";
const Cart1 = () => {
  const { products, addToCart, catList,addToWish } = useContext(StoreContext);

  const navigate = useNavigate();
  const { _id } = useParams();
  console.log(_id);
  const product = products.find((item) => item._id.toString() === _id);
  const category = catList.find((item) => item.catagory === product.category);

  const addToBucket = (product) => {
    addToCart(product);
  };
  const addtowish=(product)=>{
    addToWish(product);
    
  }
  

  return (
    <div className="maincart">
      <div className="Cartcontainer">
        <div className="backbtn">
          <button onClick={() => navigate(`/catagory/${category._id}`)}>
            <FaBackward />
          </button>
        </div>

        <div className="cartcontainer2">
          <div className="cartdetails">
            <div className="product">
              <div className="imagep">
                <img src={product.image}></img>
              </div>
              <div className="details">
                <div className="d-title">
                  <h2>{product.title}</h2>
                </div>
                <div className="d-details">
                  {" "}
                  <p>{product.category}</p>
                  <p>{product.description}</p>
                  <div class="color-chooser">
  <h3>Choose a Color:</h3>
  <input type="radio" id="red" name="color" value="red"/>
  <label for="red">Red</label>
  <input type="radio" id="blue" name="color" value="blue"/>
  <label for="blue">Blue</label>
  <input type="radio" id="green" name="color" value="green"/>
  <label for="green">Green</label>
</div>
                </div>
                <div className="d-price">
                  {" "}
                  <h2>Rs {product.price}</h2>
                </div>
                <div className="d-btn">
                  <button
                    className="d-btn1"
                    onClick={() => navigate("/payment")}
                  >
                    Buy Now
                  </button>
                  <button
                    className="d-btn2"
                    onClick={() => addtowish(product)}
                  >
                    <FaHeart size={25}/>
                  </button>
                  <button
                    className="d-btn2"
                    onClick={() => addToBucket(product)}
                  >
                    Add To Bucket
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
      </div>
    </div>
  );
};
export default Cart1;

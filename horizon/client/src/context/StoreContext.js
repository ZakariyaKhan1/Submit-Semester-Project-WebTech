import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { getProducts } from "../services/api";
export const StoreContext = createContext();


export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish,setWish]=useState([]);

  const source = axios.CancelToken.source();

  useEffect(() =>{
    fetch()
  }, []);

  async function fetch(){
      const data = await getProducts();
      setProducts(data);
  }


  const addToCart = (product) => {
    const check = cart.find((item) => item._id === product._id);
    if (!check) {
      setCart([...cart, product]);
    }   
  };
  const addToWish = (product) => {
    const checkw = wish.find((items) => items._id === product._id);
    if (!checkw) {
      setWish([...wish, product]);
    }
  };

  const removeItem =(product)=>{
    const updatedCart=cart.filter((item)=>product._id!==item._id)
    setCart(updatedCart)
  }
  const removeItemWish =(product)=>{
    const updatedWish=wish.filter((item)=>product._id!==item._id)
    setWish(updatedWish)
  }

  const menuList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const catList = [
    { id: 1, name: "Cell Phones",catagory:'Mobiles', path: "/catagory" },
    { id: 2, name: "Smart Watches", catagory:'Watches',path: "/catagory" },
    { id: 3, name: "Mobile Accessories", catagory:'Chargers',path: "/catagory" },
    { id: 4, name: "HeadPhones", catagory:'Headphones',path: "/catagory" },
  ];

  const store = {
    products,
    cart,
    addToCart,
    catList,
    menuList,
    removeItem,
    addToWish,
    wish,
    removeItemWish
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

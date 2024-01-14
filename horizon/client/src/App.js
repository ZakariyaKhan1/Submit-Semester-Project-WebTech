import Header from "./components/header/header";
import { BrowserRouter, Router } from "react-router-dom";
import { Route , Routes } from "react-router-dom";
import Home from "./components/pages/home.js";
import Category from "./components/category/category";
import LoginSignup from "./components/pages/loginsignup";
import ProductList from "./components/products/productlist";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Cart1 from "./components/card/cart1";
import About from "./components/pages/about";
import BuyNow from "./components/products/buynow";
import Bucket from "./components/card/Bucket";
import { useEffect } from "react";
import WishList from "./components/card/wishlist";
import ProductForm from "./components/dashboard/ProductForm";
import Signup from "./components/pages/signup";
import AdminDash from "./components/dashboard/admindash";
import Payment from "./components/pages/payment";

function App() {
  
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginsignup" element={<LoginSignup/>}> </Route>
        <Route path="/catagory/:id" element={<Category/>}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path='/cell/:_id' element={<Cart1 />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/buynow' element={<BuyNow />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/wishlist' element={<WishList />}/>
        <Route path='/addproduct' element={<ProductForm />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/admindash' element={<AdminDash />}/>
        <Route path='/payment' element={<Payment />}/>
        
        


      </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;

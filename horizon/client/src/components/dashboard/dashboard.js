import "./dashboard.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import Category from "../dashboard/category";

const Dashboard = () => {
  const [category,setCategory]=useState('viewproduct')

  const handleAddProduct =()=>{
    setCategory('addProduct')
  }
  
  const viewProduct =()=>{
    setCategory('viewproduct')
  }


  return (
    <div className="d-container">
      <div className="d-container1">
        <div className="d-container2">
          <div className="d-cont1">
            <div className="d-cont11">
              <div>
                <FaBars size={20} />
              </div>
              <p>Dashboard</p>
            </div>
            <div className="d-cont12">
              <ul className="d-list">
              <li> <button onClick={viewProduct} className="d-cont12-link">
                  
                    <div>
                      <FaBriefcase />
                    </div>
                    Your Products
                  
                </button></li>
                <li><button onClick={handleAddProduct} className="d-cont12-link" to='/addproduct'>
                  
                    <div>
                      <FaFolderPlus />
                    </div>
                    Add Product
                  
                </button></li>
                
              </ul>
            </div>
          </div>
          <div className="d-cont2">
            <div className="d-cont21">
            </div>
            <Category category={category}/>
          </div>
        </div>

        <div className="d-cont3"></div>
      </div>
    </div>
  );
};
export default Dashboard;

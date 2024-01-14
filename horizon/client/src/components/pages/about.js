import React from "react";
import "./about.css";

const About = () => {
  const brandInfo = {
    brandName: "Horizon",
    products: ["Mobiles", "Headphones", "Accessories", "Watches"],
  };

  return (
    <div className="abouttop">
      <div className="about-container">
        <h2 className="brand-name">{brandInfo.brandName}</h2>
        <p className="brand-description">
          Welcome to Horizon Mobile, where innovation meets mobility. We are a
          dynamic and forward-thinking mobile brand dedicated to providing
          cutting-edge smartphones and an exceptional user experience. Our
          mission is to redefine the way people connect, communicate, and
          explore the world through technology.<br/> Horizon is a renowned brand that
          specializes in the following products:
        </p>
        <ul className="product-list">
          {brandInfo.products.map((product, index) => (
            <li key={index} className="product-item">
              {product}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

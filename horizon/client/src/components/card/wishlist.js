import React from "react";
import "./bucket.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const WishList = () => {
  const { wish, removeItemWish} = useContext(StoreContext);

  return (
    <div className="bucket-container">
      <div className="bc-2">
      <h2>Your Hearted Product</h2>
      {wish && wish.length > 0 ? (
        <ul className="bucket-list">
          {wish.map((item) => (
            <li key={item.id} className="bucket-item">
              <img
                src={item.image}
                alt={item.title}
                className="bucket-item-image"
              />
              <div className="bucket-item-details">
                <h3 className="bucket-item-title">{item.title}</h3>
                <p className="bucket-item-price">Price: Rs {item.price}</p>
                
              </div>
              <button className="btn1" onClick={()=> removeItemWish(item)}>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the wishlist</p>
      )}
    </div></div>
  );
};

export default WishList;

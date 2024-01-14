import "../pages/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { useContext, createContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Home = () => {

  const { addToCart ,products} = useContext(StoreContext);
  const feature = [
    {
      icon: FaShippingFast,
      tag: "Free Delivery",
      pretag: "Free Shipping on all order",
    },
    {
      icon: FaServer,
      tag: "Online Support 24/7",
      pretag: "Support Online 24 hours a day",
    },
    {
      icon: FaMoneyCheck,
      tag: "Money Return",
      pretag: "Back gurrantee under 7 days",
    },
    {
      icon: FaPercent,
      tag: "Member Discount",
      pretag: "on every order over 50$",
    },
  ];

  const [Category, setCategory] = useState(products);

  const handleCategoryClick = (category) => {
    const result = products.filter((curData) => {
      return curData.category === category;
    });
    setCategory(result);
  };

  const catList = [
    { name: "Cell Phones", path: "/cell" },
    { name: "Smart Watches", path: "/cell" },
    { name: "Mobile Accessories" },
    { name: "HeadPhones" },
  ];

  return (
    <div className="homecontainer">
      <div className="hometop">
        <div className="hometop2">
          <div className="htop1">
            <div className="main1">
              <img src="./photos/cover2.jpg"></img>

            </div>
            <div className="main2">
              <div className="main2-1">
                <img src="./photos/cover3.jpg"></img>
              </div>
              <div className="main2-2">
                <img src="./photos/cover4.jpg"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="hometop3">
          {feature.map((feature) => (
            <div className="homefeature">
              <div className="hf-circle">
                <div className="hf-circle2">
                  <div className="hf-circle-img">
                    {feature.icon && <feature.icon size={28} />}
                  </div>
                </div>
              </div>
              <div className="hf-details">
                <h4>{feature.tag}</h4>
                <p>{feature.pretag}</p>
              </div>
            </div>
          ))}
          ;
        </div>

        <div className="hometop4">
          <div className="ht4">
            <div className="ht4-1">
              {Category.filter((item) => item.category === "Mobiles")
                .slice(0, 1)
                .map((item) => (
                  <div key={item.id}>
                    <Link to={`/cell/${item._id}`} className="ht4-11-link">
                      <div className="ht4-11">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="ht4-12">
                        <h2>{item.title}</h2>
                        <h4>{`Rs ${item.price}`}</h4>
                        <p>{item.description}</p>
                        <p>
                          While the giants dominate the market, there's a world
                          of emerging challengers waiting to make their mark.
                          Dive into the realms of brands like OnePlus, Xiaomi,
                          Oppo, and others who bring fresh perspectives and
                          unique offerings to the table. Experience their quest
                          for innovation, affordable yet feature-packed devices,
                          and disruptive approaches that challenge the status
                          quo.
                        </p>
                      </div>
                    </Link>
                    <button onClick={addToCart(item)} className="btn">
                      Add To Bucket
                    </button>
                  </div>
                ))}
            </div>
            <div className="ht4-2">
              {Category.filter((item) => item.category === "Chargers")
                .slice(0, 1)
                .map((item) => (
                  <Link className="link" to={`/cell/${item._id}`}>
                    <div className="ht4-21">
                      <img src={item.image}></img>
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              {Category.filter((item) => item.category === "Headphones")
                .slice(0, 1)
                .map((item) => (
                  <Link className="link" to={`/cell/${item._id}`}>
                    <div className="ht4-22">
                      <img src={item.image}></img>
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="hometop5"></div>
                
      </div>
                    
      

      
    </div>
  );
};
export default Home;

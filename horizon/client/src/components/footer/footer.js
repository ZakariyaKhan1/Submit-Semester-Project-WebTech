import "./footer.css";
import logo from "../header/horizon.png";
import { Link } from "react-router-dom";
import { createContext } from "react";

const Footer = () => {
  const infolist = [
    {
      name: "Categories", path:"",
      h1: "Cell Phones",
      h2: "Watches",
      h3: "Chargers",
      h4: "Headphones",
    },
    { name: "Locations", h1: "Contact Us" },
    { name: "Get in Touch", h1: "Terms & Conditions" },
    
  ];

  return (
    <div className="Mainfooter">
      <div className="footer1">
        <div className="footerA">
          <Link to="/">
            <img src={logo}></img>
          </Link>

        </div>

        <div className="footerB">
          {infolist.map((listdetails) => (
            <div className="information">
              <h2>{listdetails.name}</h2>
              <Link href="#">
                {" "}
                <p>{listdetails.h1}</p>
              </Link>
              <Link href="#">
                {" "}
                <p> {listdetails.h2} </p>{" "}
              </Link>
              <Link href="#">
                {" "}
                <p> {listdetails.h3} </p>{" "}
              </Link>
              <Link href="#">
                {" "}
                <p> {listdetails.h4} </p>{" "}
              </Link>
              <Link href="#">
                {" "}
                <p> {listdetails.h5} </p>{" "}
              </Link>
              <div className="images">
                <Link href="#">
                  {" "}
                  <img src={listdetails.image1}></img>{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <img src={listdetails.image2}></img>{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;

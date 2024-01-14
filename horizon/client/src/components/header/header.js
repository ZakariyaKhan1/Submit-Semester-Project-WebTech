import "./header.css";
import logo from "./horizon.png";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Header = () => {
  const { cart, catList, menuList,wish } = useContext(StoreContext);

  return (
    <div className="header">
      <div className="headercontainer1">
        <div className="headercontainer2">
          <div className="logo">
            <Link to="/">
            <img src={logo}></img></Link>
          </div>

          <div className="search">
            <form id="form" role="search">
              <input
                className="isearch"
                type="search"
                id="query"
                name="q"
                placeholder="Search for products"
                aria-label="Search through site content"
              ></input>
              <button className="searchbutton1">
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="accounticon">
            <Link to="/loginsignup" className="acclink">
              <div className="account">
                <div className="accicon">
                  <FaUser size={25} />
                </div>
                <p>
                  Sign in
                  <br />
                  Account
                </p>
              </div>
            </Link>

            <Link className="wishlink" to='/wishlist'> <Badge badgeContent={wish.length} color="primary" > <FaRegHeart size={25} /></Badge></Link>
            <Link className="bucketlink" to="/bucket">
              {" "}
              <Badge badgeContent={cart.length} color="primary">
                <FaCartPlus size={25} />
              </Badge>{" "}
            </Link>
          </div>
        </div>
        <div className="headerbottom1">
          <div className="headerbottom2">
            <ul className="menu">
              {menuList.map((menuList) => (
                <li>
                  <Link className="headerLink" to={menuList.path}>
                    {menuList.name}
                  </Link>{" "}
                </li>
              ))}
              {catList.map((menuList) => (
                <li>
                  <Link
                    className="headerLink"
                    to={menuList.path + `/${menuList.id}`}
                  >
                    {menuList.name}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

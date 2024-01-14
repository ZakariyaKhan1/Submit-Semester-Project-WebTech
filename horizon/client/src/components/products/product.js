import { Link } from "react-router-dom";
import "./productlist";

const Product = ({ products }) => {
  <Link to={`/cell/${products.id}`} className="listc1">
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
        </div>
      </div>
    </div>{" "}
  </Link>;
};
export default Product;

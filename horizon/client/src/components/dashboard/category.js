import ProductForm from "./ProductForm";
import "./dashboard.css";
import ViewProduct from "./viewproduct";
import ViewUser from "./viewuser";

const Category = ({ category }) => {
  if (category === "viewproduct") {
    return (
      <>
        <div className="d-cont22">
          <ViewProduct/>
        </div>
      </>
    );
  } else if (category === "addProduct") {
    console.log("addproduct");
    return (
      <>
        <div className="d-cont22">
          <ProductForm/>
        </div>
      </>
    );
  } else if (category === "users") {
    console.log("users");
    return (
      <>
        <div className="d-cont22">
          <ViewUser/>
        </div>
      </>
    );
  }

};

export default Category;

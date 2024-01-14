import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import "./buynow.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const BuyNow = () => {
  const { products } = useContext(StoreContext);

  const navigate = useNavigate();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    province: "",
    cityCode: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional logic or API calls with deliveryDetails here
    navigate("/confirmation"); // Navigate to the confirmation page after form submission
  };

  return (
    <div className="buynowconatiner">
      <div className="buynowconatiner2">
        <div className="backbtn">
          <button onClick={() => navigate("/bucket")}>
            <FaBackward />
          </button>
        </div>
        <div className="buy-now-container">
          <h2 className="buy-now-heading">Buy Now</h2>
          <form onSubmit={handleSubmit} className="buy-now-form">
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                value={deliveryDetails.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </label>
            <br />
            <label className="form-label">
              Address:
              <input
                type="text"
                name="address"
                value={deliveryDetails.address}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </label>
            <br />
            <label className="form-label">
              City:
              <select
                name="city"
                value={deliveryDetails.city}
                onChange={handleInputChange}
                required
                className="form-input"
              >
                <option value="">Select City</option>
                <option value="City A">Peshawar</option>
                <option value="City B">Islamabad</option>
                <option value="City C">Abbottabad</option>
              </select>
            </label>
            <br />
            <label className="form-label">
              Province:
              <select
                name="province"
                value={deliveryDetails.province}
                onChange={handleInputChange}
                required
                className="form-input"
              >
                <option value="">Select Province</option>
                <option value="Province A">KPK</option>
                <option value="Province B">Punjab</option>
                <option value="Province C">Gilgit-Baltistan</option>
                <option value="Province D">Sindh</option>
              </select>
            </label>
            <br />
            <label className="form-label">
              City Code:
              <input
                type="text"
                name="cityCode"
                value={deliveryDetails.cityCode}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </label>
            <br />
            <label className="form-label">
              Quantity:
              <input
                type="number"
                name="quantity"
                value={deliveryDetails.quantity}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </label>
            <br />
            <button type="submit" className="form-submit-btn">
              Place Order
            </button>
          </form>

          <div className="gap"></div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;

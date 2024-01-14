import { getProducts, deleteProduct, editProduct } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      // Find the product to edit based on the ID
      const productToEdit = products.find((product) => product.id === id);

      // Call the editProduct function from the API
      await editProduct(id, productToEdit);

      // Fetch the updated products list
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {products.map((product) => (
        <div className="list-cont2" key={product.id}>
          <div className="pimage">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="pdetails">
            <div className="pprice">
              <h4>Rs {product.price}</h4>
            </div>
            <div className="ptitle">
              <p>{product.title}</p>
              <p>{product.description}</p>
            </div>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
            <button onClick={() => handleEdit(product._id)}>Edit</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewProduct;

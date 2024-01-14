import axios from "axios";


const url = 'http://localhost:8000';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getUsers = async () => {
//   try {
//     const response = await axios.get(`${url}/user`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getUsers = async(token)=>{
  return await axios.get(URL+'/user',{
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}

export const postUsers = async ({ email, password }) => {
  try {
    const response = await axios.post(`${url}/user/signup`, { email, password });
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteProduct = async (productId) => {
  try {
    console.log(productId)
    const response = await axios.delete(`${url}/products/${productId}`);
  } catch (error) {
    console.log(error);
  }
};


export const editProduct = async (productId, updatedProductData) => {
  try {
    const response = await axios.put(`${url}/products/${productId}`, updatedProductData);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

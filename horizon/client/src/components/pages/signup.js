import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post('http://localhost:8000/signup', {
        email: inputs.email,
        password: inputs.password,
      });
      const data = res.data;
      return data;
      console.log(data);
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check: Prevent form submission if any field is empty
    if ( !inputs.email || !inputs.password) {
      alert('Please fill in all fields.');
      return;
    }

    sendRequest()
    .then(() => history('/about'));
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto', width: '50%' ,border:'2px solid green' ,height:"250px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
          <label>name:</label>
          <input
            type="text"
            name="email"
            value={inputs.name}
            onChange={handleChange}
            style={{ padding: '5px', marginLeft: '10px', border: '2px solid black' }}
          />
        </div>
       
        <div style={{ marginBottom: '20px' }}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            style={{ padding: '5px', marginLeft: '10px', border: '2px solid black' }}
          />
        </div>
        <div style={{ marginBottom: '20px',border: "2px solid red" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            style={{ padding: '5px', marginLeft: '10px', border: '2px solid black' }}
          />
        </div>
        <div style={{width:"10px" ,padding: '1px', marginLeft: '10px', border: '2px solid black' }} >
        <button style={{ backgroundColor: '#007BFF', color: '#FFF', border: 'none', borderRadius: '4px', cursor: 'pointer',border:'2px solid green' }}>
          Signup
        </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

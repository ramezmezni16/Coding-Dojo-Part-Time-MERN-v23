import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {


  const nav = useNavigate()



  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
      axios.post('http://localhost:8000/api/products', {title,price,description})
        .then(res => nav("/"))
        .catch(err => {
          const errorResponse = err.response.data.errors
          const errorArr = []
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr)
        })
  } 
      

  return (
    <div className="container mt-5">
      <h2>Product Manager</h2>
      <form onSubmit={(e)=> onSubmitHandler(e)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
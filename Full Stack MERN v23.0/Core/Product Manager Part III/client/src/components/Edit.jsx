import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/`+id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/`+id, { title, price, description })
            .then(res => {
                console.log(res.data);
                nav("/products");
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                }
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    {errors.map((err, index) => (<p key={index}>{err}</p>))}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Edit;
import React, { useState } from 'react';
import axios from 'axios';

function Create(props) {
    const { setDesplayUp } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/", { title, price, description })
            .then(res => {
                if (res && res.data) {
                    setTitle("");
                    setPrice("");
                    setDescription("");
                    setErrors([]);
                    setDesplayUp(res.data);
                }
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                } else {
                    console.error(err);
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
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;
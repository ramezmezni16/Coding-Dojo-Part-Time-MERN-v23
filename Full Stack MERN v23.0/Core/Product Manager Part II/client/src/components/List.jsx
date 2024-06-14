import React, { useEffect, useState } from 'react';
import axios from 'axios';


function List() {



    const [products, setProducts] = useState([])

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))
    },[])

    return (
        <div className='container mt-5'>
            <h1>Products List</h1>
            <table className='table table-sm table-bordred'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(c => (
                        <tr key={c._id}>
                            <td>
                                <Link to={`/c/${c._id}`}>{c.title}</Link> 
                                </td>
                            <td>{c.price}</td>
                            <td>{c.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};


export default List;
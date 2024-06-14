import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function One() {

    const {id} =useParams()
    const nav = useNavigate()
    const [c,setC] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/"+id)
            .then(res=>setC(res.data))
            .catch(err=>console.error(err))
    },[id])






    return(
        <div className='container mt-5'>
            <div className='card'>
                <h1>{c.title}</h1>
                <div className='card-body'>
                    <h3>{c.price}</h3>
                    <h3>{c.description}</h3>
                </div>
            </div>
        </div>
    )
}






export default One;
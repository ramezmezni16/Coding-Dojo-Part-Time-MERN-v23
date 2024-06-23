import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function One() {
    const nav = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>(
        axios.get("http://localhost:8000/api/products/"+ id)
            .then(res=>setProduct.data)
            .catch(err=>console.error(err))
    ),[id])

  return (
    <div>
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={()=>nav("/products")}>Home</button>
    </div>
  )
}

export default One
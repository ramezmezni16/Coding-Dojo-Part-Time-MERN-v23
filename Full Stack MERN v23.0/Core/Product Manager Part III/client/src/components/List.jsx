import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function List(props) {

    const nav = useNavigate()

const {displayUp} = props

    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res =>setProducts(res.data))
            .catch(err=>console.error(err))
    },[displayUp])

    const deleteP = (id) => {
        axios.delete("http://localhost:8000/api/products/"+ id)
            .then(res=> setProducts(products.filter((p,i)=> p._id !== id)))
            .catch(err=>console.error(err))
    }
    

  return (
    <div>
        {products.map((p,i)=>(
            <div>
                <h4><Link to={"/products/"+p._id}>{p.title}</Link></h4>
                <button onClick={()=>nav("/edit/"+p._id)}>Edit</button>
                <button onClick={()=>deleteP(p._id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default List
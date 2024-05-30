import React from "react";
import { useParams } from "react-router-dom";


const Word = () => {
    const {input} = useParams();
    return <div>{input}</div>
}


export default Word;
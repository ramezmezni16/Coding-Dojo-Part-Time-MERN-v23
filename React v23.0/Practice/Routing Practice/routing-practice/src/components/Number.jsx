import React from "react";
import { useParams } from "react-router-dom";


const Number = () => {
        const {input} = useParams();
        return <div>{input}</div>;
};


export default Number;
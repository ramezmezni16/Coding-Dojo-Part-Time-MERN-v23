import React from "react";
import { useParams } from "react-router-dom";


const StyledWord = () => {
    const {word, color, backgColor} = useParams();
    const style = {color: color, backgroundColor: backgColor}
return <div style={style}>{word}</div>};


export default StyledWord;
import React, { Component } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import StyledWord from './components/StyledWord';
 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<InputChecker />} />
        <Route path="/:word/:color/:backgColor" element={<StyledWord />} />
      </Routes>
    </div>
  );
};


  const InputChecker = () => {
    const {input} = useParams()
    return isNaN(input) ? <Word input= {input}/> : <Number input= {input}/>
};
    
export default App;
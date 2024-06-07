import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Character from './components/Character';
import Planet from './components/Planet';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
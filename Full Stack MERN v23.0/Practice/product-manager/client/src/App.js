import React from 'react';
import {Routes, Route} from 'react-router-dom';
import List from './components/List';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<ProductForm/>} />
      </Routes>
    </div>
  );
}

export default App;

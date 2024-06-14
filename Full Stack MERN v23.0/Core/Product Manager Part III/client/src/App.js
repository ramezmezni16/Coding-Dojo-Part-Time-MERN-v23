import React from 'react';
import {Routes, Route} from 'react-router-dom';
import List from './components/List';
import ProductForm from './components/ProductForm';
import One from './components/One';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<ProductForm/>} />
        <Route path='/List' element= {<List/>} />
        <Route path='/One' element= {<One/>} />
        <Route element={<Update/>} path='/:id/edit'/>
      </Routes>
    </div>
  );
}

export default App;
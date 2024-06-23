import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import List from './components/List';
import One from './components/One';
import Edit from './components/Edit'

function App() {
  const [displayUp, setDisplayUp] = useState({}) 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/products' element={<> <Create setDisplayUp={setDisplayUp}/> <List displayUp={displayUp}/> </> }/>
          <Route path='/products/:id' element={<One/>} />
          <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        const names = response.data.results.map(pokemon => pokemon.name);
        setPokemonList(names);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
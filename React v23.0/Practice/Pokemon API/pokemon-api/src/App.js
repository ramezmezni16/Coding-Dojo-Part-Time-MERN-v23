import './App.css';
import { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => {
        const names = data.results.map(pokemon => pokemon.name);
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

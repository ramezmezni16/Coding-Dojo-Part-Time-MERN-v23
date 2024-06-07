import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = ({ id }) => {
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
        if (response.data.homeworld) {
          const homeworldResponse = await axios.get(response.data.homeworld);
          setHomeworld(homeworldResponse.data.name);
        }
      } catch (error) {
        setError("These aren't the droids you're looking for");
      }
    };
    fetchCharacter();
  }, [id]);

  if (error) {
    return (
      <div>
        <h1 className="error-message">{error}</h1>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fscreenrant.com%2Fonly-diehard-star-wars-fans-know-obi-wan-kenobi%2F&psig=AOvVaw1wlTQK2i9T5oVeKj9sVTJN&ust=1717869819173000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLi_542KyoYDFQAAAAAdAAAAABAE" alt="Obi-Wan Kenobi"  />
      </div>
    );
  }

  return (
    <div className="resource-details">
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Homeworld: {homeworld && <a href={`/planets/${character.homeworld.split('/').slice(-2, -1)}`}>Homeworld</a>}</p>
    </div>
  );
};
export default Character;
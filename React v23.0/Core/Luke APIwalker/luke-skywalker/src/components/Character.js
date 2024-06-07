import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        setCharacter(response.data);
        if (response.data.homeworld) {
          axios.get(response.data.homeworld)
            .then(homeworldResponse => {
              setHomeworld(homeworldResponse.data.name);
            });
        }
      })
      .catch(() => {
        setError("These aren't the droids you're looking for");
      });
  }, [id]);

  if (error) {
    return (
      <div>
        <h1 className="error-message">{error}</h1>
        <img src="https://i.ytimg.com/vi/pUZo2Do2mcY/maxresdefault.jpg" alt="Obi-Wan Kenobi" className="obi-wan-img" />
      </div>
    );
  }

  return (
    <div className="resource-details">
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
          <p>Homeworld: {homeworld && <a href={`/planets/${character.homeworld.split('/').slice(-2, -1)}`}>Homeworld</a>}</p>
        </>
      )}
    </div>
  );
};

export default Character;
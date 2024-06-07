import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
      .then(response => {
        setPlanet(response.data);
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
      {planet && (
        <>
          <h1>{planet.name}</h1>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </>
      )}
    </div>
  );
};

export default Planet;
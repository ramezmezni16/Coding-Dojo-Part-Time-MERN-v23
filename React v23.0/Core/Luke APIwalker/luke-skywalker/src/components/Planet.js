import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
        setPlanet(response.data);
      } catch (error) {
        setError("These aren't the droids you're looking for");
      }
    };
    fetchPlanet();
  }, [id]);

  if (error) {
    return (
      <div>
        <h1 className="error-message">{error}</h1>
        <img src="/obi-wan.jpg" alt="Obi-Wan Kenobi" />
      </div>
    );
  }

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resource-details">
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
};

export default Planet;
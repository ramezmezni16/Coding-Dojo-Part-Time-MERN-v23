import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [resource, setResource] = useState('planets');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id) {
      navigate(`/${resource}/${id}`);
    }
  };

  return (
    <div>
      <h1>I'm a Star Wars enthusiast 😖👉👈</h1>
      <div id="search-container">
        <label htmlFor="resource-select">Search for:</label>
        <select id="resource-select" value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
        </select>
        <label htmlFor="id-input">ID:</label>
        <input
          id="id-input"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Home;

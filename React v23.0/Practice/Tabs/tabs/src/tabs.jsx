import React, { useState } from 'react';
import './App.css';

const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab-header ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tab-contents">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab-content ${index === activeIndex ? 'active' : ''}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

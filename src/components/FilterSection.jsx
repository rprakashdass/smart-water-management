import React, { useState } from 'react';
import './FilterSection.css';

const FilterSection = ({ patterns, onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('all');

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div className="filter-section">
      <label htmlFor="cropFilter">Filter by Crop Pattern:</label>
      <select id="cropFilter" value={filterValue} onChange={handleFilterChange}>
        <option value="all">All Patterns</option>
        {patterns.map((pattern, index) => (
          <option key={index} value={pattern.pattern}>
            {pattern.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSection;
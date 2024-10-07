import React, { useState } from 'react';
import './components/App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Section from './components/Section.jsx';
import FilterSection from './components/FilterSection.jsx';
import CropPatternGrid from './components/CropPatternGrid.jsx';
import WaterManagementInfo from './components/WaterManagementInfo.jsx';

const patterns = [
  {
    pattern: 'row',
    title: 'Row Planting',
    image: 'row_crops.jpg',
    description: 'A common method where crops are planted in straight lines.',
  },
  {
    pattern: 'mixed',
    title: 'Mixed Cropping',
    image: 'mixed_crops.jpg',
    description: 'A method where two or more crops are grown together in the same field.',
  },
  {
    pattern: 'intercropping',
    title: 'Intercropping',
    image: 'intercropping.jpg',
    description: 'Growing two or more crops in proximity for a more efficient use of space and resources.',
  },
  // Add more patterns here...
];

const App = () => {
  const [filterValue, setFilterValue] = useState('all');

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <Section title="Introduction">
        <p>In modern agriculture, geospatial data plays a crucial role in improving efficiency and sustainability. By analyzing crop patterns, geospatial technology helps optimize water supply, saving resources and increasing crop yields.</p>
      </Section>
      <Section title="Geospatial Data Overview">
        <p>Geospatial data involves collecting and analyzing information about the physical world, including landscapes, vegetation, and water bodies, through various technologies like satellites, drones, and GPS. This data allows farmers and water management systems to understand the environment in real-time and make more informed decisions for resource optimization.</p>
        <ul>
          <li>
            <strong>Soil Moisture Levels:</strong> Detects dry or waterlogged areas in fields, enabling targeted irrigation to prevent water waste.
          </li>
          <li>
            <strong>Cropland Boundaries:</strong> Identifies field boundaries, crop types, and planting densities to optimize resource allocation.
          </li>
          <li>
            <strong>Weather Patterns:</strong> Provides real-time updates on rainfall, temperature, and wind conditions to adjust watering schedules and protect crops from extreme weather.
          </li>
          <li>
            <strong>Crop Health Monitoring:</strong> Uses satellite imagery to detect stress in crops due to pests, diseases, or insufficient water supply.
          </li>
          <li>
            <strong>Water Resource Availability:</strong> Tracks water levels in nearby reservoirs, rivers, and aquifers to ensure sustainable water usage for irrigation.
          </li>
        </ul>
      </Section>
      <Section title="Analyzing Crop Patterns">
        <FilterSection patterns={patterns} onFilterChange={handleFilterChange} />
        <CropPatternGrid patterns={patterns} filterValue={filterValue} />
        <WaterManagementInfo filterValue={filterValue} patterns={patterns} />
      </Section>
      <Section title="Water Supply Management">
        <p>Effective water supply management is essential for sustainable agriculture. By leveraging geospatial data, we can determine the best irrigation practices, monitor water usage, and reduce waste.</p>
      </Section>
      <Section title="Benefits of Smart Water Management">
        <ul>
          <li>Increased Crop Yields: Efficient water usage leads to healthier crops and higher yields.</li>
          <li>Resource Conservation: Minimizes water wastage and optimizes resource allocation.</li>
          <li>Environmental Sustainability: Reduces the environmental impact of farming practices.</li>
          <li>Cost Savings: Lowers operational costs associated with irrigation and crop management.</li>
        </ul>
      </Section>
    </div>
  );
};

export default App;
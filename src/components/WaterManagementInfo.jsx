import React from 'react';
import './WaterManagementInfo.css';

const WaterManagementInfo = ({ filterValue, patterns }) => {
  const info = patterns.find((pattern) => pattern.pattern === filterValue);

  return (
    <div id="waterManagementInfo">
      {info && (
        <div>
          <h3>Water Management for {info.title}</h3>
          <p>{info.description}</p>
        </div>
      )}
    </div>
  );
};

export default WaterManagementInfo;
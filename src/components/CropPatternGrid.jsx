import React from 'react';
import './CropCard.css';

const CropCard = ({ pattern, image, title, description }) => {
  return (
    <div className="crop-card" data-pattern={pattern}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CropCard;
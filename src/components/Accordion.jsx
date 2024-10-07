import React from 'react';
import './Accordion.css';

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <button className={`accordion-button ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        {title}
      </button>
      <div className={`accordion-panel ${isActive ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
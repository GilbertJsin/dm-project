import React from 'react';
import './TextDisplay.css';

const TextDisplay = ({ text, title }) => {
  return (
    <div className="text-display-container">
      <div className="text-display-content">
        {title && <h2 className="text-display-title">{title}</h2>}
        <div className="text-display-box">
          <p className="text-display-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextDisplay;
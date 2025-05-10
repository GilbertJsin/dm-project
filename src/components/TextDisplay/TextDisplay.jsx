import React, { useRef, useEffect } from 'react';
import './TextDisplay.css';

const TextDisplay = ({ text, title }) => {
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (textBoxRef.current) {
      textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight;
    }
  }, [text]); 
  
  return (
    <div className="text-display-container">
      <div className="text-display-content">
        {title && <h2 className="text-display-title">{title}</h2>}
        <div className="text-display-box" ref={textBoxRef}>
          <p className="text-display-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextDisplay;
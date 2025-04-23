import React from 'react';
import { useLocation } from 'react-router-dom';

const CharSheet = () => {
  const location = useLocation();
  const character = location.state;

  return (
    <div className="char-sheet-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Character Sheet</h1>
      
      <div className="char-info" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '2rem',
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div className="info-section">
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Class</h3>
          <p style={{ fontSize: '1.2rem', color: '#000000' }}>{character?.class}</p>
          
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem', marginTop: '2rem' }}>Race</h3>
          <p style={{ fontSize: '1.2rem', color: '#000000' }}>{character?.race}</p>
        </div>
        
        <div className="info-section">
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Background</h3>
          <p style={{ fontSize: '1.2rem', color: '#000000' }}>{character?.background}</p>
          
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem', marginTop: '2rem' }}>Equipment</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {character?.equipment?.map((item, index) => (
              <li key={index} style={{ 
                marginBottom: '0.5rem',
                padding: '0.5rem',
                backgroundColor: 'white',
                borderRadius: '4px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                color: '#000000'
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharSheet;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterStats from '../CharacterStats/CharacterStats';
import Conditions from '../Conditions/Conditions';
import AbilityScores from '../AbilityScores/AbilityScores';
import SavingThrows from '../SavingThrows/SavingThrows';

const CharSheet = () => {
  const location = useLocation();
  const character = location.state;
  const [showConditions, setShowConditions] = useState(false);
  const [activeConditions, setActiveConditions] = useState([]);

  const handleConditionToggle = (conditionId) => {
    setActiveConditions(prev => {
      if (prev.includes(conditionId)) {
        return prev.filter(id => id !== conditionId);
      }
      return [...prev, conditionId];
    });
  };

  return (
    <div className="char-sheet-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <CharacterStats character={character} />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
        <AbilityScores scores={character?.abilityScores} />
        <SavingThrows 
          scores={character?.abilityScores}
          proficiencies={character?.savingThrowProficiencies} 
        />
      </div>

      <button 
        onClick={() => setShowConditions(true)}
        style={{
          backgroundColor: '#12161a',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Manage Conditions
      </button>

      <Conditions 
        isOpen={showConditions}
        onClose={() => setShowConditions(false)}
        onConditionToggle={handleConditionToggle}
        activeConditions={activeConditions}
      />
      
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
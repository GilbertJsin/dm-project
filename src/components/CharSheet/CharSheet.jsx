import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterStats from '../CharacterStats/CharacterStats';
import Conditions from '../Conditions/Conditions';
import AbilityScores from '../AbilityScores/AbilityScores';
import SavingThrows from '../SavingThrows/SavingThrows';
import './CharSheet.css';

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
    <div className="char-sheet-container">
      <CharacterStats character={character} />
      
      <div className="ability-scores-grid">
        <AbilityScores scores={character?.abilityScores} />
        <SavingThrows 
          scores={character?.abilityScores}
          proficiencies={character?.savingThrowProficiencies} 
        />
      </div>

      <button 
        onClick={() => setShowConditions(true)}
        className="manage-conditions-button"
      >
        Manage Conditions
      </button>

      <Conditions 
        isOpen={showConditions}
        onClose={() => setShowConditions(false)}
        onConditionToggle={handleConditionToggle}
        activeConditions={activeConditions}
      />
      
      <h1 className="char-sheet-title">Character Sheet</h1>
      
      <div className="char-info">
        <div className="info-section">
          <h3>Class</h3>
          <p>{character?.class}</p>
          
          <h3>Race</h3>
          <p>{character?.race}</p>
        </div>
        
        <div className="info-section">
          <h3>Background</h3>
          <p>{character?.background}</p>
          
          <h3>Equipment</h3>
          <ul className="equipment-list">
            {character?.equipment?.map((item, index) => (
              <li key={index} className="equipment-item">
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
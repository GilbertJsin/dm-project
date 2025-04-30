// import React, { useState } from 'react';
import './CharacterStats.css';
import Conditions from '../Conditions/Conditions';
import AbilityScores from '../AbilityScores/AbilityScores';

const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const CharacterStats = ({ character }) => {
  // const [showConditions, setShowConditions] = useState(false);
  // const [activeConditions, setActiveConditions] = useState([]);

  // const handleConditionToggle = (conditionId) => {
  //   setActiveConditions(prev => {
  //     if (prev.includes(conditionId)) {
  //       return prev.filter(id => id !== conditionId);
  //     }
  //     return [...prev, conditionId];
  //   });
  // };

  return (
    <div className="character-container">
      <button className="back-button">&#8592;</button>
      <div className="character-header">
        <h1 className="character-name">{capitalize(character?.name) || 'Tester'}</h1>
        <h2 className="character-subtitle">{capitalize(character?.race) || 'Dwarf'} {capitalize(character?.class) || 'Paladin'} Level {character?.level || '1'}</h2>
      </div>
      <div className="stats-grid">
        <div className="stat-box armor">
          <div className="stat-value">13</div>
          <div className="stat-label">ARMOR<br />CLASS</div>
        </div>

        <div className="stat-box initiative">
          <div className="stat-value">+5</div>
          <div className="stat-label">INITIATIVE</div>
        </div>

        <div className="character-portrait">
          <div className="portrait-inner">
            <span className="inspiration-badge">HEROIC INSPIRATION</span>
          </div>
        </div>

        <div className="stat-box hit-points">
          <div className="stat-value">12/12</div>
          <div className="stat-label">HIT POINTS</div>
        </div>

        <div className="action-icons">
          <div className="icon">🔥</div>
          {/* <div className="icon" onClick={() => setShowConditions(true)}>⚙️</div> */}
        </div>
      </div>

      {/* <AbilityScores scores={{
        strength: 10,
        dexterity: 16,
        constitution: 13,
        intelligence: 14,
        wisdom: 14,
        charisma: 8
      }} /> */}

      {/* <Conditions 
        isOpen={showConditions}
        onClose={() => setShowConditions(false)}
        onConditionToggle={handleConditionToggle}
        activeConditions={activeConditions}
      /> */}
    </div>
  );
};

export default CharacterStats;
// import React, { useState } from 'react';
import './CharacterStats.css';

const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const CharacterStats = ({ character }) => {

  return (
    <div className="character-container">
      <div className="stats-grid">
        <div className="stat-box armor">
          <div className="stat-value">13</div>
          <div className="stat-label">ARMOR<br />CLASS</div>
        </div>

        <div className="stat-box initiative">
          <div className="stat-value">+5</div>
          <div className="stat-label">INITIATIVE</div>
        </div>
        
        <div className="character-header">
          <h1 className="character-name">{capitalize(character?.name) || 'Tester'}</h1>
          <h2 className="character-subtitle">{capitalize(character?.race) || 'Dwarf'} {capitalize(character?.class) || 'Paladin'} Level {character?.level || '1'}</h2>
        </div>
        
        <div className="stat-box hit-points">
          <div className="stat-value">12/12</div>
          <div className="stat-label">HIT POINTS</div>
        </div>

        <div className="stat-box rest">
          <div className="stat-value">165</div>
          <div className="stat-label">GOLD</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;
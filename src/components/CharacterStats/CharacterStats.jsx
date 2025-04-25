import React from 'react';
import './CharacterStats.css';

const CharacterStats = ({ character }) => {
  return (
    <div className="character-container">
      <button className="back-button">&#8592;</button>
      <div className="character-header">
        <h1 className="character-name">{character?.name || 'Tester'}</h1>
        <h2 className="character-subtitle">{character?.race || 'Dwarf'} {character?.class || 'Paladin'} {character?.level || '1'}</h2>
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
          <div className="icon">⚙️</div>
        </div>

        <div className="conditions-box">
          <h3>CONDITIONS</h3>
          <div className="conditions-list">
            {/* Conditions will be mapped here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;
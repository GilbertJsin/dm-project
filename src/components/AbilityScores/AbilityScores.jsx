import React from 'react';
import './AbilityScores.css';

const AbilityScores = ({ scores }) => {
  const getModifier = (score) => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : modifier.toString();
  };

  const abilityScores = [
    { name: 'STRENGTH', score: scores?.strength || 10 },
    { name: 'DEXTERITY', score: scores?.dexterity || 16 },
    { name: 'CONSTITUTION', score: scores?.constitution || 13 },
    { name: 'INTELLIGENCE', score: scores?.intelligence || 14 },
    { name: 'WISDOM', score: scores?.wisdom || 14 },
    { name: 'CHARISMA', score: scores?.charisma || 8 },
  ];

  return (
    <div className="ability-scores-grid">
      {abilityScores.map((ability) => (
        <div key={ability.name} className="ability-score-box">
          <div className="ability-name">{ability.name}</div>
          <div className="modifier">{getModifier(ability.score)}</div>
          <div className="base-score">{ability.score}</div>
        </div>
      ))}
    </div>
  );
};

export default AbilityScores;
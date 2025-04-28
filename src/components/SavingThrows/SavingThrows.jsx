import React from 'react';
import './SavingThrows.css';

const SavingThrows = ({ scores, proficiencies }) => {
  const getModifier = (score) => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : modifier.toString();
  };

  const savingThrows = [
    { name: 'STRENGTH', value: scores?.strength || 10, mod: 0 },
    { name: 'DEXTERITY', value: scores?.dexterity || 16, mod: 3 },
    { name: 'CONSTITUTION', value: scores?.constitution || 13, mod: 1 },
    { name: 'INTELLIGENCE', value: scores?.intelligence || 14, mod: 2 },
    { name: 'WISDOM', value: scores?.wisdom || 18, mod: 4 },
    { name: 'CHARISMA', value: scores?.charisma || 12, mod: 1 }
  ];

  return (
    <div className="saving-throws-container">
      <h3>Saving Throws</h3>
      <div className="saving-throws-grid">
        {savingThrows.map((save) => (
          <div key={save.name} className="saving-throw-item">
            <div className={`proficiency-indicator ${proficiencies?.includes(save.name.toLowerCase()) ? 'proficient' : ''}`} />
            <span className="save-modifier">{getModifier(save.value)}</span>
            <span className="save-name">{save.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingThrows;
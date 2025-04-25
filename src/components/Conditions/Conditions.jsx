import React, { useState } from 'react';
import './Conditions.css';

const conditions = [
  { id: 'blinded', name: 'Blinded', icon: '👁️' },
  { id: 'charmed', name: 'Charmed', icon: '💝' },
  { id: 'deafened', name: 'Deafened', icon: '👂' },
  { id: 'frightened', name: 'Frightened', icon: '💀' },
  { id: 'grappled', name: 'Grappled', icon: '🤼' },
  { id: 'incapacitated', name: 'Incapacitated', icon: '😵' },
  { id: 'invisible', name: 'Invisible', icon: '👻' },
  { id: 'paralyzed', name: 'Paralyzed', icon: '⚡' },
  { id: 'petrified', name: 'Petrified', icon: '🗿' },
  { id: 'poisoned', name: 'Poisoned', icon: '☠️' },
  { id: 'prone', name: 'Prone', icon: '🔽' },
  { id: 'restrained', name: 'Restrained', icon: '⛓️' },
  { id: 'stunned', name: 'Stunned', icon: '💫' },
  { id: 'unconscious', name: 'Unconscious', icon: '😴' },
  { id: 'exhaustion', name: 'Exhaustion', icon: '😩', hasLevel: true }
];

const Conditions = ({ isOpen, onClose, onConditionToggle, activeConditions = [] }) => {
  const [exhaustionLevel, setExhaustionLevel] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="conditions-overlay">
      <div className="conditions-modal">
        <div className="conditions-header">
          <h2>Conditions</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="conditions-list">
          {conditions.map((condition) => (
            <div key={condition.id} className="condition-item">
              <div className="condition-checkbox">
                <input
                  type="checkbox"
                  id={condition.id}
                  checked={activeConditions.includes(condition.id)}
                  onChange={() => onConditionToggle(condition.id)}
                />
                <span className="condition-icon">{condition.icon}</span>
                <label htmlFor={condition.id}>{condition.name}</label>
              </div>
              {condition.hasLevel && (
                <div className="exhaustion-level">
                  <span>Level {exhaustionLevel}</span>
                  <div className="level-buttons">
                    {[1, 2, 3, 4, 5, 6].map((level) => (
                      <button
                        key={level}
                        className={exhaustionLevel === level ? 'active' : ''}
                        onClick={() => setExhaustionLevel(level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <button className="expand-button">▼</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conditions;
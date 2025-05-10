import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CharCreation.css';

const CharCreation = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const characterClasses = [
    { id: 'warrior', name: 'Warrior', description: 'Strong melee fighter' },
    { id: 'mage', name: 'Mage', description: 'Powerful spell caster' },
    { id: 'rogue', name: 'Rogue', description: 'Stealthy assassin' },
    { id: 'cleric', name: 'Cleric', description: 'Divine healer' }
  ];

  const backgrounds = [
    { id: 'noble', name: 'Noble', description: 'Born of a privileged family' },
    { id: 'soldier', name: 'Soldier', description: 'Trained in military combat' },
    { id: 'sage', name: 'Sage', description: 'Scholar and researcher' },
    { id: 'criminal', name: 'Criminal', description: 'Former outlaw or thief' }
  ];

  const races = [
    { id: 'human', name: 'Human', description: 'Versatile and adaptable' },
    { id: 'elf', name: 'Elf', description: 'Graceful and long-lived' },
    { id: 'dwarf', name: 'Dwarf', description: 'Hardy and strong-willed' },
    { id: 'halfling', name: 'Halfling', description: 'Small and nimble' }
  ];

  const equipment = [
    { id: 'sword', name: 'Longsword', description: 'Standard melee weapon' },
    { id: 'bow', name: 'Shortbow', description: 'Ranged weapon with 20 arrows' },
    { id: 'staff', name: 'Quarterstaff', description: 'Simple weapon and arcane focus' },
    { id: 'shield', name: 'Shield', description: 'Improves defense' },
    { id: 'leather', name: 'Leather Armor', description: 'Light armor for mobility' },
    { id: 'robes', name: 'Mage Robes', description: 'Comfortable clothing with many pockets' }
  ];

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    setSelectedBackground(event.target.value);
  };

  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedEquipment([...selectedEquipment, value]);
    } else {
      setSelectedEquipment(selectedEquipment.filter(item => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedClass || !selectedBackground || !selectedRace) {
      alert('Please select a class, background, and race before submitting.');
      return;
    }

    const characterData = {
      class: selectedClass,
      background: selectedBackground,
      race: selectedRace,
      equipment: selectedEquipment
    };

    navigate('/char-sheet', { state: characterData });
  };

  return (
    <div className="char-creation-container">
      <h2>Character Creation</h2>
      <form className="char-creation-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Choose Your Class</h3>
          <div className="options-grid">
            {characterClasses.map((charClass) => (
              <div key={charClass.id} className={`radio-option ${selectedClass === charClass.id ? 'selected' : ''}`}>
                <input
                  type="radio"
                  id={charClass.id}
                  name="characterClass"
                  value={charClass.id}
                  checked={selectedClass === charClass.id}
                  onChange={handleClassChange}
                />
                <label htmlFor={charClass.id}>
                  <strong>{charClass.name}</strong>
                  <p>{charClass.description}</p>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3>Choose Your Background</h3>
          <div className="options-grid">
            {backgrounds.map((background) => (
              <div key={background.id} className={`radio-option ${selectedBackground === background.id ? 'selected' : ''}`}>
                <input
                  type="radio"
                  id={background.id}
                  name="characterBackground"
                  value={background.id}
                  checked={selectedBackground === background.id}
                  onChange={handleBackgroundChange}
                />
                <label htmlFor={background.id}>
                  <strong>{background.name}</strong>
                  <p>{background.description}</p>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3>Choose Your Race</h3>
          <div className="options-grid">
            {races.map((race) => (
              <div key={race.id} className={`radio-option ${selectedRace === race.id ? 'selected' : ''}`}>
                <input
                  type="radio"
                  id={race.id}
                  name="characterRace"
                  value={race.id}
                  checked={selectedRace === race.id}
                  onChange={handleRaceChange}
                />
                <label htmlFor={race.id}>
                  <strong>{race.name}</strong>
                  <p>{race.description}</p>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3>Choose Your Equipment</h3>
          <p>Select up to 3 items:</p>
          {equipment.map((item) => (
            <div key={item.id} className="checkbox-option">
              <input
                type="checkbox"
                id={item.id}
                name="characterEquipment"
                value={item.id}
                checked={selectedEquipment.includes(item.id)}
                onChange={handleEquipmentChange}
                disabled={!selectedEquipment.includes(item.id) && selectedEquipment.length >= 3}
              />
              <label htmlFor={item.id}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </label>
            </div>
          ))}
        </div>

        <div className="form-section" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button 
            type="submit"
            className="submit-button"
          >
            Create Character
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharCreation;
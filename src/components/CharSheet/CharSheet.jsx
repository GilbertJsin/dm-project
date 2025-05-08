import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterStats from '../CharacterStats/CharacterStats';
import Conditions from '../Conditions/Conditions';
import AbilityScores from '../AbilityScores/AbilityScores';
import SavingThrows from '../SavingThrows/SavingThrows';
import TextDisplay from '../TextDisplay/TextDisplay';
import './CharSheet.css';

const CharSheet = () => {
  const location = useLocation();
  const character = location.state;
  // You might want to add state for AI responses
  // const [aiResponse, setAiResponse] = useState("No AI response yet. Ask a question to get started.");
  const [aiResponse] = useState("No AI response yet. Ask a question to get started.");

  // const handleConditionToggle = (conditionId) => {
  //   setActiveConditions(prev => {
  //     if (prev.includes(conditionId)) {
  //       return prev.filter(id => id !== conditionId);
  //     }
  //     return [...prev, conditionId];
  //   });
  // };

  return (
    <div className="char-sheet-container">
      <CharacterStats character={character} />

      <TextDisplay 
        title="AI Response"
        text={aiResponse}
      />
    </div>
  );
};

export default CharSheet;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterStats from '../CharacterStats/CharacterStats';
import Conditions from '../Conditions/Conditions';
import AbilityScores from '../AbilityScores/AbilityScores';
import SavingThrows from '../SavingThrows/SavingThrows';
import TextDisplay from '../TextDisplay/TextDisplay';
import InputBox from '../InputBox/InputBox';
import './CharSheet.css';

const CharSheet = () => {
  const location = useLocation();
  const character = location.state;
  const [aiResponse, setAiResponse] = useState("No AI response yet. Ask a question to get started.");

  const handleInputSubmit = (inputText) => {
    // Logic to handle input submission
    console.log("User input:", inputText);
    setAiResponse(`AI processed: ${inputText}`);
  };

  return (
    <div className="char-sheet-container">
      <CharacterStats character={character} />

      <TextDisplay 
        title="AI Response"
        text={aiResponse}
      />

      <InputBox onSubmit={handleInputSubmit} />
    </div>
  );
};

export default CharSheet;
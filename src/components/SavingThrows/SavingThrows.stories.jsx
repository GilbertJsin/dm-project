import React from 'react';
import SavingThrows from './SavingThrows';

export default {
  title: 'Components/SavingThrows',
  component: SavingThrows,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Mock ability scores data
const mockScores = {
  strength: 16,
  dexterity: 14, 
  constitution: 15,
  intelligence: 12,
  wisdom: 14,
  charisma: 13
};

// Default story with no proficiencies
export const Default = {
  args: {
    scores: mockScores,
    proficiencies: [],
  },
};

// With proficiencies
export const WithProficiencies = {
  args: {
    scores: mockScores,
    proficiencies: ['strength', 'constitution'],
  },
};

// High level character with many proficiencies
export const HighLevelCharacter = {
  args: {
    scores: {
      strength: 20,
      dexterity: 18,
      constitution: 18,
      intelligence: 16, 
      wisdom: 16,
      charisma: 14
    },
    proficiencies: ['strength', 'constitution', 'wisdom', 'charisma'],
  },
};

// Low scores example
export const LowScores = {
  args: {
    scores: {
      strength: 8,
      dexterity: 10,
      constitution: 9,
      intelligence: 12,
      wisdom: 11,
      charisma: 8
    },
    proficiencies: ['intelligence'],
  },
};
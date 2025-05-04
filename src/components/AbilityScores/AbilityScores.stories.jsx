import React from 'react';
import AbilityScores from './AbilityScores';

export default {
  title: 'Components/AbilityScores',
  component: AbilityScores,
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

// Default story with mock data
export const Default = {
  args: {
    scores: mockScores,
  },
};

// Story with high ability scores
export const HighScores = {
  args: {
    scores: {
      strength: 18,
      dexterity: 18,
      constitution: 18,
      intelligence: 18,
      wisdom: 18,
      charisma: 18
    }
  },
};

// Story with low ability scores
export const LowScores = {
  args: {
    scores: {
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    }
  },
};

// Story with no scores (using default values)
export const NoScores = {
  args: {
    scores: null
  },
};
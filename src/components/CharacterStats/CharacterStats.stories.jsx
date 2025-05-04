import React from 'react';
import CharacterStats from './CharacterStats';

export default {
  title: 'Components/CharacterStats',
  component: CharacterStats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Mock character data for the story
const mockCharacterData = {
  name: 'Aragorn',
  class: 'warrior',
  race: 'human',
  background: 'soldier',
  level: 5,
  hitPoints: 45,
  maxHitPoints: 45,
  armorClass: 16,
  proficiencyBonus: 3,
  speed: 30,
  abilityScores: {
    strength: 16,
    dexterity: 14,
    constitution: 15,
    intelligence: 12,
    wisdom: 14,
    charisma: 13
  },
};

// Default story with mock character data
export const Default = {
  args: {
    character: mockCharacterData,
  },
};

// Story with a different character
export const DifferentCharacter = {
  args: {
    character: {
      name: 'Gandalf',
      class: 'mage',
      race: 'human',
      background: 'sage',
      level: 10,
      hitPoints: 62,
      maxHitPoints: 70,
      armorClass: 13,
      proficiencyBonus: 4,
      speed: 30,
      abilityScores: {
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 18,
        wisdom: 16,
        charisma: 15
      },
    },
  },
};

// Story with a low-health character
export const LowHealth = {
  args: {
    character: {
      ...mockCharacterData,
      hitPoints: 10,
    },
  },
};
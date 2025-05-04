import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CharSheet from './CharSheet';

export default {
  title: 'Components/CharSheet',
  component: CharSheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // Wrap all stories in MemoryRouter and mock location.state
  decorators: [
    (StoryComponent) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/character',
            state: mockCharacterData,
          },
        ]}
      >
        {StoryComponent()}
      </MemoryRouter>
    ),
  ],
};

// Mock character data for the story
const mockCharacterData = {
  name: 'Aragorn',
  class: 'Warrior',
  race: 'Human',
  background: 'Soldier',
  equipment: ['Longsword', 'Shield', 'Leather Armor'],
  abilityScores: {
    strength: 16,
    dexterity: 14,
    constitution: 15,
    intelligence: 12,
    wisdom: 14,
    charisma: 13
  },
  savingThrowProficiencies: ['strength', 'constitution'],
  level: 5,
  hitPoints: 45,
  maxHitPoints: 45,
  armorClass: 16,
  proficiencyBonus: 3,
  speed: 30
};

// Default story
export const Default = {
  args: {
    // Since we're providing character data via location.state in the decorator,
    // we don't need to pass direct props
  },
};

// With active conditions
export const WithConditions = {
  args: {},
  decorators: [
    (StoryComponent) => {
      // Create a component that sets initial state
      const StoryWithState = () => {
        const Component = StoryComponent();
        // Set active conditions when component mounts
        React.useEffect(() => {
          // This would ideally call the setActiveConditions function
          // Since we can't directly modify the component's state from here,
          // this is mainly for demonstration
        }, []);
        return Component;
      };
      
      return (
        <MemoryRouter
          initialEntries={[
            {
              pathname: '/character',
              state: mockCharacterData,
            },
          ]}
        >
          <StoryWithState />
        </MemoryRouter>
      );
    },
  ],
};
import { MemoryRouter } from 'react-router-dom';
import CharCreation from './CharCreation';

export default {
  title: 'Components/CharCreation',
  component: CharCreation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // Wrap all stories in MemoryRouter
  decorators: [
    (StoryComponent) => (
      <MemoryRouter>
        {StoryComponent()}
      </MemoryRouter>
    ),
  ],
};

// Default story
export const Default = {
  args: {
    // Add any props your CharCreation component accepts here
    onSubmit: (characterData) => console.log('Character created:', characterData),
  },
};
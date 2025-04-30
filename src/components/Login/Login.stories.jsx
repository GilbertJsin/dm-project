import { BrowserRouter } from 'react-router-dom';
import Login from './Login';  // Fix the import path to be relative to this file

export default {
  title: 'Components/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Wrap all stories in BrowserRouter
  decorators: [
    (story) => (
      <BrowserRouter>
        {story()}
      </BrowserRouter>
    ),
  ],
};

// Default story
export const Default = {
  args: {
    isLoading: false,
    error: null,
    onSubmit: (credentials) => console.log('Login attempted with:', credentials),
    onForgotPassword: () => console.log('Forgot password clicked'),
    onRegister: () => console.log('Register clicked'),
  },
};
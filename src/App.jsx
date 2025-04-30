import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login/Login'
import CharCreation from './components/CharCreation/CharCreation'
import CharSheet from './components/CharSheet/CharSheet'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/char-creation" element={<CharCreation />} />
        <Route path="/char-sheet" element={<CharSheet />} />
      </Routes>
    </BrowserRouter>
  )
}

// Create a wrapper component to use hooks inside Router context
function LoginWrapper() {
  const navigate = useNavigate();
  
  const handleLoginSubmit = (credentials) => {
    // Handle login logic here
    console.log('Login submitted:', credentials);
    // Redirect to character creation after successful login
    navigate('/char-creation');
  };

  return (
    <Login
      onSubmit={handleLoginSubmit}
      onForgotPassword={() => navigate('/forgot-password')}
      onRegister={() => navigate('/register')}
    />
  );
}

export default App

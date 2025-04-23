import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import CharCreation from './components/CharCreation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/char-creation" element={<CharCreation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

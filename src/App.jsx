import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import CharCreation from './components/CharCreation'
import CharSheet from './components/CharSheet'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/char-creation" element={<CharCreation />} />
        <Route path="/char-sheet" element={<CharSheet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

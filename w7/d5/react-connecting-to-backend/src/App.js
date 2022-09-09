// src/App.js

import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ApartmentsPage from './pages/ApartmentsPage'
import AddApartmentPage from './pages/AddApartmentPage'
import SingleApartmentPage from './pages/SingleApartmentPage'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/:id" element={<SingleApartmentPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'
import Countries from './pages/Countries'
import Country from './pages/Country'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:cca2" element={<Country />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

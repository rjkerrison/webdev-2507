import './App.css'
import HomeFeed from './pages/HomeFeed'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomeFeed />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h2>Not found!</h2>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

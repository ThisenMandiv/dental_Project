import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SpecialOffersPage from './pages/SpecialOffersPage'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<SpecialOffersPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
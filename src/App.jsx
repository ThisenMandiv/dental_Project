import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SpecialOffersPage from './pages/SpecialOffersPage';
import ContactUsPage from './pages/ContactUsPage';
import Header from './components/Header'; // ✅ Make sure Header is imported
import './App.css';

function App() {
  return (
    <Router>
      {/* Header visible on all pages */}
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> {/* optional */}
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<SpecialOffersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}


export default App

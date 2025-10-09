import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SpecialOffersPage from './pages/SpecialOffersPage';
import ContactUsPage from './pages/ContactUsPage';
import Header from './components/Header'; // ✅ Make sure Header is imported
import './App.css';
import FeesPage from './pages/Fees';

import Team from './pages/Team';

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
          <Route path="/services" element={<Home />} /> {/* Services section is on Home page */}
          <Route path="/offers" element={<SpecialOffersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/team" element={<Team />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

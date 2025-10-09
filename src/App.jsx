// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SpecialOffersPage from './pages/SpecialOffersPage';
import ContactUsPage from './pages/ContactUsPage';
import Fees from './pages/Fees';         // if you have this page
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <div className="pt-[80px]"> {/* Offset for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
       
          <Route path="/fees" element={<Fees />} />
          <Route path="/special-offers" element={<SpecialOffersPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

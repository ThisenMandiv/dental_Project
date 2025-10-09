// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SpecialOffersPage from './pages/SpecialOffersPage';
import ContactUsPage from './pages/ContactUsPage';
import Fees from './pages/Fees';         // if you have this page
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
       
          <Route path="/fees" element={<Fees />} />
          <Route path="/special-offers" element={<SpecialOffersPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

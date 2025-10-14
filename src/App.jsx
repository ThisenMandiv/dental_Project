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
import ScrollToAnchor from './components/ScrollToAnchor';
import './App.css';
import Team from './pages/Team';
import EventsPage from './pages/EventsPage';
import GeneralDentistry from './pages/GeneralDentistry';
import Testimonials from './pages/Testimonials';
import DentalExaminationsPage from './pages/DentalExaminationsPage';
import RemovableDenturesPage from './pages/RemovableDenturesPage';
import FillingsAndRestorations from './pages/FillingsAndRestorations';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToAnchor />
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
          <Route path="/events" element={<EventsPage />} />
          <Route path="general-dentistry" element={<GeneralDentistry/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/general-dentistry/dental-examinations" element={<DentalExaminationsPage />} />
          <Route path="/general-dentistry/removable-dentures" element={<RemovableDenturesPage />} />
          <Route path="/general-dentistry/fillings" element={<FillingsAndRestorations />} />
          
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;

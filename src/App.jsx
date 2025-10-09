
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/Services'
import GeneralDentistry from './pages/GeneralDentistry'
import CosmeticDentistry from './pages/CosmeticDentistry'
import FacialAesthetics from './pages/FacialAesthetics'
import DenplanCare from './pages/DenplanCare'
import SpecialistTreatment from './pages/SpecialistTreatment'
import NHS from './pages/NHS'
import EmergencyDental from './pages/EmergencyDental'
import Fees from './pages/Fees'
import SpecialOffers from './pages/SpecialOffers'
import ContactUs from './pages/ContactUs'
import './index.css'


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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/facial-aesthetics" element={<FacialAesthetics />} />
          <Route path="/denplan-care" element={<DenplanCare />} />
          <Route path="/specialist-treatment" element={<SpecialistTreatment />} />
          <Route path="/nhs" element={<NHS />} />
          <Route path="/emergency-dental" element={<EmergencyDental />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}


export default App

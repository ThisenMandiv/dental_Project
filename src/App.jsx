import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/facial-aesthetics" element={<FacialAesthetics />} />
          <Route path="/services/denplan-care" element={<DenplanCare />} />
          <Route path="/services/specialist-treatment" element={<SpecialistTreatment />} />
          <Route path="/services/nhs" element={<NHS />} />
          <Route path="/services/emergency-dental" element={<EmergencyDental />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/offers" element={<SpecialOffers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

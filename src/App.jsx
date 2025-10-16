// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SpecialOffersPage from "./pages/SpecialOffersPage";
import ContactUsPage from "./pages/ContactUsPage";
import Fees from "./pages/Fees"; // if you have this page
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToAnchor from "./components/ScrollToAnchor";
import "./App.css";
import Team from "./pages/Team";
import EventsPage from "./pages/EventsPage";
import GeneralDentistry from "./pages/GeneralDentistry";
import Testimonials from "./pages/Testimonials";
import DentalExaminationsPage from "./pages/DentalExaminationsPage";
import RemovableDenturesPage from "./pages/RemovableDenturesPage";
import FillingsAndRestorations from "./pages/FillingsAndRestorations";
import DentalCrownsAndBridges from "./pages/DentalCrownsAndBridges";
import RootCanal from "./pages/RootCanal";
import ToothExtraction from "./pages/ToothExtraction";
import FacialAesthetics from "./pages/FacialAesthetics";
import DenpalCare from "./pages/DenpalCare";
import DenpalEssentials from "./pages/DenpalEssentials";
import SedationDentist from "./pages/SedationDentist";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import NHS from "./pages/NHS";
import EmergencyDentalTreatment from "./pages/EmergencyDentalTreatment";
import DentalHygenist from "./pages/DentalHygenist";
import CompositeBonding from "./pages/CompositeBonding";
import DentalImplants from "./pages/DentalImplants";
import ToothWhitening from "./pages/ToothWhitening ";
import Invisalign from "./pages/Invisalign";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/special-offers" element={<SpecialOffersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="general-dentistry" element={<GeneralDentistry />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/general-dentistry/dental-examinations"
          element={<DentalExaminationsPage />}
        />
        <Route
          path="/general-dentistry/removable-dentures"
          element={<RemovableDenturesPage />}
        />
        <Route
          path="/general-dentistry/fillings"
          element={<FillingsAndRestorations />}
        />
        <Route
          path="/general-dentistry/fillings"
          element={<FillingsAndRestorations />}
        />
        <Route
          path="/general-dentistry/fillings"
          element={<FillingsAndRestorations />}
        />
        <Route
          path="/general-dentistry/crowns-and-bridges"
          element={<DentalCrownsAndBridges />}
        />
        <Route path="/general-dentistry/root-canal" element={<RootCanal />} />
        <Route
          path="/general-dentistry/extraction"
          element={<ToothExtraction />}
        />
        <Route path="/facial-aesthetics" element={<FacialAesthetics />} />
        <Route
          path="/general-dentistry/hygienist"
          element={<DentalHygenist />}
        />
        <Route path="/denplan-care" element={<DenpalCare />} />
        <Route path="/denplan-essentials" element={<DenpalEssentials />} />
        <Route path="/home/sedation-dentist" element={<SedationDentist />} />
        <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
        <Route
          path="/cosmetic-dentistry/composite-bonding"
          element={<CompositeBonding />}
        />
        <Route
          path="/cosmetic-dentistry/dental-implants"
          element={<DentalImplants />}
        />
        <Route
          path="/cosmetic-dentistry/tooth-whitening"
          element={<ToothWhitening />}
        />
         <Route
          path="/cosmetic-dentistry/invisalign"
          element={<Invisalign/>}
        />
        <Route path="/nhs" element={<NHS />} />
        <Route
          path="/emergency-dental-treatment"
          element={<EmergencyDentalTreatment />}
        />
      </Routes>
    </Router>
  );
}

export default App;

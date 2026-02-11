import { Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ExperienceSection from "./containers/ExperienceSection/ExperienceSection";
import FAQSection from "./containers/FAQSection/FAQSection";
import FeaturesSection from "./containers/FeatureSection/FeatureSection";
import Footer from "./containers/Footer/Footer";
import GallerySection from "./containers/GallerySection/GallerySection";
import PersonalisedSection from "./containers/PersonalisedSection/PersonalisedSection";
import Testimonials from "./containers/Testimonials/Testimonials";
import PrivacyPolicy from "./containers/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from './containers/TermsConditions/TermsConditions';
import CruiseRoute from './containers/CruiseRoute/CruiseRoute';

const LandingPage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <GallerySection />
    <ExperienceSection />
    <PersonalisedSection />
    <FAQSection />
    <Testimonials />
  </>
);

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar stays on all pages */}
      
      <Routes>
        {/* The Home Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* The Privacy Policy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/route" element={<CruiseRoute />} />
      </Routes>

      <Footer /> {/* Footer stays on all pages */}
    </div>
  );
}

export default App;
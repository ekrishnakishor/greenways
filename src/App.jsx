import React, { useState } from "react"; // 1. FIX: Import useState
import { Routes, Route } from "react-router-dom";
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
import TermsConditions from "./containers/TermsConditions/TermsConditions";
import CruiseRoute from "./containers/CruiseRoute/CruiseRoute";
import BookingModal from "./components/BookingModal/BookingModal";
import ExperiencePage from "./containers/ExperiencePage/ExperiencePage";

// 2. FIX: Accept the prop here and pass it down
const LandingPage = ({ onBookClick }) => (
  <>
    {/* Pass onBookClick to sections that have a "Book Now" button */}
    <HeroSection onBookClick={onBookClick} />
    <FeaturesSection />
    <GallerySection />
    <ExperienceSection onBookClick={onBookClick} />
    <PersonalisedSection />
    <FAQSection />
    <Testimonials />
  </>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openBooking = () => setIsModalOpen(true);

  return (
    <div className="App">
      <Navbar onBookClick={openBooking} />

      <Routes>
        <Route path="/" element={<LandingPage onBookClick={openBooking} />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />

        {/* 3. FIX: Pass the prop to CruiseRoute too */}
        <Route
          path="/route"
          element={<CruiseRoute onBookClick={openBooking} />}
        />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>

      <Footer onBookClick={openBooking} />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;

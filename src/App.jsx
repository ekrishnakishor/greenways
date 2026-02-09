import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ExperienceSection from './containers/ExperienceSection/ExperienceSection'
import FAQSection from './containers/FAQSection/FAQSection'
import FeaturesSection from './containers/FeatureSection/FeatureSection'
import Footer from './containers/Footer/Footer'
import GallerySection from './containers/GallerySection/GallerySection'
import PersonalisedSection from './containers/PersonalisedSection/PersonalisedSection'
import Testimonials from './containers/Testimonials/Testimonials'


function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <ExperienceSection />
      <PersonalisedSection />
      <FAQSection />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App

import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import ContactPopup from '../components/sections/ContactPopup';
import SocialMediaStrip from '../components/sections/SocialMediaStrip';
import ReviewsCarousel from '../components/sections/ReviewsCarousel';
import SpecialOffersSection from '../components/sections/SpecialOffersSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import FloatingCardGrid from '../components/FloatingCardGrid';
import IconShowcase from '../components/IconShowcase';
import PointerLabelShowcase from '../components/sections/PointerLabelShowcase';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Matrix Background */}
      <HeroSection />
      
      {/* About Us with Glassmorphism */}
      <AboutUsSection />
      
      {/* Social Media Strip */}
      <SocialMediaStrip />
      
      {/* Platform Features (Transparent) */}
      <FloatingCardGrid />
      
      {/* Reviews Carousel with 3D Effects */}
      <ReviewsCarousel />
      
      {/* Special Offers with Countdown */}
      <SpecialOffersSection />
      
      {/* Vision & Mission Split Screen */}
      <VisionMissionSection />
      
      {/* Interactive Icon Showcase */}
      <IconShowcase />
      
      {/* Floating Contact Popup */}
      <ContactPopup />
    </div>
  );
};

export default HomePage;
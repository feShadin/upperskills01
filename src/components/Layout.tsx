import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FxOlogyBackground from './FxOlogyBackground';
import ParticleSystem from './ParticleSystem';
import MagneticCursor from './MagneticCursor';
import ScrollProgressBar from './ScrollAnimations/ScrollProgressBar';
import FloatingCTA from './ScrollAnimations/FloatingCTA';
import FloatingElements from './FloatingElements';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Scroll Progress Bar with Purple Theme */}
      <ScrollProgressBar />
      
      <div className="relative z-20">
        <Header />
        <main className="scroll-smooth bg-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
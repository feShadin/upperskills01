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
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Cursor System */}
      <MagneticCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Floating CTA */}
      <FloatingCTA />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* FxOlogy-style Background Animation */}
      <FxOlogyBackground />
      
      {/* Additional Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-green-900/10" />
      <ParticleSystem />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent opacity-50" />
      <div className="fixed inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative z-20">
        <Header />
        <main className="scroll-smooth">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
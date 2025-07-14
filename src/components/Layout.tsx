import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FxOlogyBackground from './FxOlogyBackground';
import ParticleSystem from './ParticleSystem';
import ScrollProgressBar from './ScrollAnimations/ScrollProgressBar';
import FloatingCTA from './ScrollAnimations/FloatingCTA';
import FloatingElements from './FloatingElements';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Floating CTA */}
      <FloatingCTA />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* FxOlogy-style Background Animation */}
      <FxOlogyBackground />
      
      {/* Additional Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-purple-light to-white" />
      <ParticleSystem />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(164, 52, 242, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(164, 52, 242, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-radial from-purple-light via-transparent to-transparent opacity-50" />
      
      <div className="relative z-20">
        <Header />
        <main className="scroll-smooth">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
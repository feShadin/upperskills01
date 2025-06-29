import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PinnedHeroSectionProps {
  children: React.ReactNode;
}

const PinnedHeroSection: React.FC<PinnedHeroSectionProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  // Pin hero section and create layered animation
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.div
      className="sticky top-0 z-10"
      style={{ 
        y, 
        opacity, 
        scale,
        filter: `blur(${blur}px)`
      }}
    >
      {children}
    </motion.div>
  );
};

export default PinnedHeroSection;
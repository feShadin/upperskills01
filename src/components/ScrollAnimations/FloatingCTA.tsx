import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, Rocket } from 'lucide-react';
import AnimatedButton from '../AnimatedButton';

const FloatingCTA: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Show CTA after 25% scroll
  const opacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.25, 0.3], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.25, 0.3], [0.8, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3"
      style={{ opacity, y, scale }}
    >
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg w-8 h-8 flex items-center justify-center"
        whileHover={{ 
          scale: 1.05
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>

      {/* Floating CTA */}
      <motion.div
        className="magnetic"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatedButton
          variant="primary"
          size="md"
          icon={Rocket}
          iconPosition="left"
          onClick={() => window.location.href = '/register'}
        >
          Start Learning
        </AnimatedButton>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCTA;
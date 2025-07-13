import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple origin-left z-49 blur-sm opacity-60"
        style={{ scaleX }}
      />
      
      {/* Progress Percentage Indicator */}
      <motion.div
        className="fixed top-4 right-4 z-50 bg-purple-light backdrop-blur-xl border border-purple/20 rounded-full px-3 py-1 text-xs text-purple font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
        }}
      >
        <motion.span>
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.span>
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;
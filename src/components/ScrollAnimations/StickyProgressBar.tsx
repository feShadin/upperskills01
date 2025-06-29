import React from 'react';
import { motion } from 'framer-motion';
import { useStickyProgress } from '../../hooks/useScrollAnimations';

const StickyProgressBar: React.FC = () => {
  const { scaleX } = useStickyProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-purple to-primary-dark origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default StickyProgressBar;
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '../../hooks/useScrollAnimations';

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const { ref, isInView } = useScrollTrigger();

  const directionVariants = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{ 
        duration, 
        delay, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
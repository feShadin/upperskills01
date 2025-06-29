import React from 'react';
import { motion } from 'framer-motion';
import { useHorizontalScroll } from '../../hooks/useScrollAnimations';

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ 
  children, 
  className = "" 
}) => {
  const { ref, x } = useHorizontalScroll();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x }}
        className="flex space-x-8"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollSection;
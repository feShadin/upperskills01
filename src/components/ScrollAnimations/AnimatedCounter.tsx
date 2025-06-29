import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useScrollTrigger } from '../../hooks/useScrollAnimations';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2, 
  suffix = "",
  className = ""
}) => {
  const { ref, isInView } = useScrollTrigger();
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, count, end]);

  useEffect(() => {
    return rounded.onChange((latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
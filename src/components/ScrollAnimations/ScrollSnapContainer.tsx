import React from 'react';
import { useScrollSnap } from '../../hooks/useScrollAnimations';

interface ScrollSnapContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollSnapContainer: React.FC<ScrollSnapContainerProps> = ({ 
  children, 
  className = "" 
}) => {
  const ref = useScrollSnap();

  return (
    <div 
      ref={ref} 
      className={`scroll-smooth ${className}`}
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} style={{ scrollSnapAlign: 'start' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSnapContainer;
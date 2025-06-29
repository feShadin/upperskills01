import React from 'react';
import { motion } from 'framer-motion';
import { useFloating, useMagneticHover } from '../hooks/useScrollAnimations';
import { Sparkles, Star, Heart, Zap } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const float1 = useFloating(15, 4);
  const float2 = useFloating(20, 3);
  const float3 = useFloating(12, 5);
  const float4 = useFloating(18, 3.5);

  const magnetic1 = useMagneticHover(0.2);
  const magnetic2 = useMagneticHover(0.3);
  const magnetic3 = useMagneticHover(0.25);
  const magnetic4 = useMagneticHover(0.15);

  const floatingElements = [
    {
      icon: Sparkles,
      position: { top: '20%', left: '10%' },
      color: '#f59e0b',
      float: float1,
      magnetic: magnetic1,
      delay: 0
    },
    {
      icon: Star,
      position: { top: '60%', right: '15%' },
      color: '#3b82f6',
      float: float2,
      magnetic: magnetic2,
      delay: 1
    },
    {
      icon: Heart,
      position: { bottom: '30%', left: '20%' },
      color: '#ef4444',
      float: float3,
      magnetic: magnetic3,
      delay: 2
    },
    {
      icon: Zap,
      position: { top: '40%', right: '25%' },
      color: '#8b5cf6',
      float: float4,
      magnetic: magnetic4,
      delay: 1.5
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          ref={element.magnetic.ref}
          className="absolute magnetic pointer-events-auto"
          style={{
            ...element.position,
            x: element.magnetic.x,
            y: element.magnetic.y,
            translateY: element.float.y
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        >
          <element.icon 
            className="h-8 w-8" 
            style={{ 
              color: element.color,
              filter: `drop-shadow(0 0 10px ${element.color}60)`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
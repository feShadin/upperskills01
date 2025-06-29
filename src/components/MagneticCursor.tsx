import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'pointer' | 'text' | 'learning' | 'interactive';
  targetElement: HTMLElement | null;
}

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const MagneticCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    cursorType: 'default',
    targetElement: null
  });

  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Smooth cursor movement with spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 400, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 28 });

  // Magnetic attraction values
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const magneticSpringX = useSpring(magneticX, { stiffness: 200, damping: 20 });
  const magneticSpringY = useSpring(magneticY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      // Update trail
      setTrail(prev => {
        const newTrail = [...prev, { x: newX, y: newY, timestamp: Date.now() }];
        // Keep only last 10 points and remove old ones
        return newTrail.filter(point => Date.now() - point.timestamp < 500).slice(-10);
      });

      // Check for magnetic elements
      const magneticElements = document.querySelectorAll('.magnetic');
      let closestElement: HTMLElement | null = null;
      let minDistance = Infinity;
      let magneticForceX = 0;
      let magneticForceY = 0;

      magneticElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(newX - centerX, 2) + Math.pow(newY - centerY, 2));
        
        // Magnetic attraction within 100px radius
        if (distance < 100 && distance < minDistance) {
          minDistance = distance;
          closestElement = el as HTMLElement;
          
          // Calculate magnetic force (stronger when closer)
          const force = Math.max(0, (100 - distance) / 100);
          const angle = Math.atan2(centerY - newY, centerX - newX);
          magneticForceX = Math.cos(angle) * force * 20;
          magneticForceY = Math.sin(angle) * force * 20;
        }
      });

      // Apply magnetic force
      magneticX.set(magneticForceX);
      magneticY.set(magneticForceY);

      // Update cursor position
      cursorX.set(newX);
      cursorY.set(newY);

      setCursor(prev => ({
        ...prev,
        x: newX,
        y: newY,
        targetElement: closestElement
      }));
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      let cursorType: CursorState['cursorType'] = 'default';
      
      if (target.matches('button, a, [role="button"], .cursor-pointer, .magnetic')) {
        cursorType = 'pointer';
      } else if (target.matches('input, textarea, [contenteditable]')) {
        cursorType = 'text';
      } else if (target.matches('.educational-element, .course-card, .skill-item')) {
        cursorType = 'learning';
      } else if (target.matches('.interactive-element, .animation-trigger')) {
        cursorType = 'interactive';
      }

      setCursor(prev => ({ 
        ...prev, 
        isHovering: cursorType !== 'default',
        cursorType 
      }));
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ 
        ...prev, 
        isHovering: false,
        cursorType: 'default'
      }));
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], .cursor-pointer, .magnetic, input, textarea, [contenteditable], .educational-element, .course-card, .skill-item, .interactive-element, .animation-trigger'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, magneticX, magneticY]);

  const getCursorVariant = () => {
    const baseSize = cursor.isClicking ? 0.8 : 1;
    
    switch (cursor.cursorType) {
      case 'pointer':
        return {
          scale: baseSize * (cursor.targetElement ? 1.5 : 1.2),
          backgroundColor: '#3b82f6',
          border: '2px solid #60a5fa',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
        };
      case 'text':
        return {
          scale: baseSize,
          width: '2px',
          height: '24px',
          backgroundColor: '#10b981',
          borderRadius: '1px'
        };
      case 'learning':
        return {
          scale: baseSize * 1.6,
          backgroundColor: 'transparent',
          border: '3px solid #f59e0b',
          boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)'
        };
      case 'interactive':
        return {
          scale: baseSize * 1.4,
          backgroundColor: 'transparent',
          border: '2px solid #8b5cf6',
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)'
        };
      default:
        return {
          scale: baseSize,
          backgroundColor: cursor.isHovering ? '#3b82f6' : 'rgba(255, 255, 255, 0.9)',
          border: cursor.isHovering ? '2px solid #60a5fa' : '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: cursor.isHovering ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none'
        };
    }
  };

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={`${point.timestamp}-${index}`}
          className="fixed top-0 left-0 pointer-events-none z-[9995] rounded-full"
          initial={{ 
            x: point.x - 3, 
            y: point.y - 3, 
            scale: 1, 
            opacity: 0.6 
          }}
          animate={{ 
            scale: 0,
            opacity: 0,
            transition: { 
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: cursor.cursorType === 'learning' ? '#f59e0b' : 
                            cursor.cursorType === 'interactive' ? '#8b5cf6' : '#3b82f6'
          }}
        />
      ))}

      {/* Main Magnetic Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: magneticSpringX,
          translateY: magneticSpringY,
        }}
        animate={{
          ...getCursorVariant(),
          x: -10,
          y: -10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5
        }}
        style={{
          width: cursor.cursorType === 'text' ? '2px' : '20px',
          height: cursor.cursorType === 'text' ? '24px' : '20px',
          borderRadius: cursor.cursorType === 'text' ? '1px' : '50%',
        }}
      />

      {/* Blob Follow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          x: -25,
          y: -25,
          scale: cursor.isHovering ? 2 : 1.5,
          opacity: cursor.isHovering ? 0.15 : 0.08
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1
        }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${
            cursor.cursorType === 'learning' ? '#f59e0b' : 
            cursor.cursorType === 'interactive' ? '#8b5cf6' : '#3b82f6'
          }, transparent 70%)`
        }}
      />

      {/* Secondary Trailing Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] opacity-40"
        animate={{
          x: cursor.x - 15,
          y: cursor.y - 15,
          scale: cursor.isHovering ? 1.8 : 1.2,
          opacity: cursor.isHovering ? 0.3 : 0.15
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.8
        }}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: cursor.cursorType === 'learning' ? '#f59e0b' : 
                          cursor.cursorType === 'interactive' ? '#8b5cf6' : '#3b82f6'
        }}
      />

      {/* Educational Particles */}
      {cursor.cursorType === 'learning' && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-[9996]"
              animate={{
                x: cursor.x - 2 + Math.cos(Date.now() * 0.005 + i * 1.2) * 30,
                y: cursor.y - 2 + Math.sin(Date.now() * 0.005 + i * 1.2) * 30,
                opacity: [0.8, 0.3, 0.8],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
              style={{
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b',
                boxShadow: '0 0 6px #f59e0b'
              }}
            />
          ))}
        </>
      )}

      {/* Interactive Cursor Ripples */}
      {cursor.cursorType === 'interactive' && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-[9996] border-2 border-purple-500 rounded-full"
              animate={{
                x: cursor.x - 15 - i * 10,
                y: cursor.y - 15 - i * 10,
                scale: [0.5, 1.5, 0.5],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
              style={{
                width: `${30 + i * 20}px`,
                height: `${30 + i * 20}px`,
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default MagneticCursor;
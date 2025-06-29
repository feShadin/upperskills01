import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'pointer' | 'text' | 'learning' | 'interactive';
}

const CustomCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    cursorType: 'default'
  });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
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
      
      if (target.matches('button, a, [role="button"], .cursor-pointer')) {
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
      'button, a, [role="button"], .cursor-pointer, input, textarea, [contenteditable], .educational-element, .course-card, .skill-item, .interactive-element, .animation-trigger'
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
  }, []);

  const getCursorVariant = () => {
    switch (cursor.cursorType) {
      case 'pointer':
        return {
          scale: cursor.isClicking ? 0.8 : 1.2,
          backgroundColor: '#3b82f6',
          border: '2px solid #60a5fa'
        };
      case 'text':
        return {
          scale: 1,
          width: '2px',
          height: '20px',
          backgroundColor: '#10b981',
          borderRadius: '1px'
        };
      case 'learning':
        return {
          scale: cursor.isClicking ? 0.9 : 1.4,
          backgroundColor: 'transparent',
          border: '3px solid #f59e0b',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
        };
      case 'interactive':
        return {
          scale: cursor.isClicking ? 0.8 : 1.3,
          backgroundColor: 'transparent',
          border: '2px solid #8b5cf6',
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
        };
      default:
        return {
          scale: cursor.isClicking ? 0.8 : 1,
          backgroundColor: cursor.isHovering ? '#3b82f6' : 'rgba(255, 255, 255, 0.8)',
          border: cursor.isHovering ? '2px solid #60a5fa' : '1px solid rgba(255, 255, 255, 0.3)'
        };
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursor.x - 10,
          y: cursor.y - 10,
          ...getCursorVariant()
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          width: cursor.cursorType === 'text' ? '2px' : '20px',
          height: cursor.cursorType === 'text' ? '20px' : '20px',
          borderRadius: cursor.cursorType === 'text' ? '1px' : '50%',
        }}
      />

      {/* Trailing cursor for enhanced effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-30"
        animate={{
          x: cursor.x - 15,
          y: cursor.y - 15,
          scale: cursor.isHovering ? 1.5 : 1,
          opacity: cursor.isHovering ? 0.2 : 0.1
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
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

      {/* Educational cursor particles */}
      {cursor.cursorType === 'learning' && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-[9997]"
              animate={{
                x: cursor.x - 2 + Math.cos(Date.now() * 0.01 + i * 2) * 20,
                y: cursor.y - 2 + Math.sin(Date.now() * 0.01 + i * 2) * 20,
                opacity: [0.6, 0.2, 0.6],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b'
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CustomCursor;
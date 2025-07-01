import React from 'react';
import { motion } from 'framer-motion';

interface PointerLabelProps {
  className?: string;
  animated?: boolean;
  size?: 'small' | 'default' | 'large';
}

const PointerLabel: React.FC<PointerLabelProps> = ({ 
  className = '', 
  animated = true,
  size = 'default'
}) => {
  const sizeConfig = {
    small: {
      triangle: { left: 15, right: 15, bottom: 25 },
      highlight: { left: 6, right: 6, bottom: 12 },
      padding: 'px-4 py-2',
      text: 'text-sm',
      shadow: 'w-6 h-2'
    },
    default: {
      triangle: { left: 20, right: 20, bottom: 35 },
      highlight: { left: 8, right: 8, bottom: 15 },
      padding: 'px-6 py-3',
      text: 'text-lg',
      shadow: 'w-8 h-2'
    },
    large: {
      triangle: { left: 25, right: 25, bottom: 45 },
      highlight: { left: 10, right: 10, bottom: 18 },
      padding: 'px-8 py-4',
      text: 'text-xl',
      shadow: 'w-10 h-3'
    }
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className={`relative inline-flex items-center ${className}`}
      initial={animated ? { opacity: 0, scale: 0.8, y: 20 } : {}}
      animate={animated ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Purple Triangle Pointer */}
      <motion.div
        className="relative mr-3"
        whileHover={animated ? { scale: 1.1, rotate: 5 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 blur-lg opacity-60"
          animate={animated ? {
            opacity: [0.6, 0.8, 0.6]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div 
            className="w-0 h-0"
            style={{
              borderLeft: `${config.triangle.left}px solid transparent`,
              borderRight: `${config.triangle.right}px solid transparent`,
              borderBottom: `${config.triangle.bottom}px solid #a855f7`
            }}
          />
        </motion.div>
        
        {/* Main triangle with 3D effect */}
        <div 
          className="relative w-0 h-0 filter drop-shadow-2xl"
          style={{
            borderLeft: `${config.triangle.left}px solid transparent`,
            borderRight: `${config.triangle.right}px solid transparent`,
            borderBottom: `${config.triangle.bottom}px solid #8b5cf6`,
            filter: 'drop-shadow(0 8px 16px rgba(139, 92, 246, 0.4))'
          }}
        >
          {/* Inner highlight for 3D depth */}
          <div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: `${config.highlight.left}px solid transparent`,
              borderRight: `${config.highlight.right}px solid transparent`,
              borderBottom: `${config.highlight.bottom}px solid #c084fc`
            }}
          />
          
          {/* Side highlight */}
          <div 
            className="absolute top-1 left-1 w-0 h-0"
            style={{
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </div>
        
        {/* Soft ground shadow */}
        <motion.div 
          className={`absolute top-full left-1/2 transform -translate-x-1/2 ${config.shadow} bg-purple-500/20 rounded-full blur-sm mt-1`}
          animate={animated ? {
            scaleX: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* UPSKILLS Label with Neumorphism */}
      <motion.div
        className="relative"
        whileHover={animated ? { 
          scale: 1.02, 
          y: -3,
          boxShadow: '0 20px 40px rgba(0, 77, 0, 0.3)'
        } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Outer glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 rounded-full blur-xl opacity-50"
          animate={animated ? {
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.05, 1]
          } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main capsule with neumorphism */}
        <div className={`relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 rounded-full ${config.padding} border border-green-600/40 shadow-2xl overflow-hidden`}>
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-full" />
          
          {/* Top highlight edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-full" />
          
          {/* Side highlights */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-l-full" />
          <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-black/10 to-transparent rounded-r-full" />
          
          {/* Text with enhanced styling */}
          <motion.span 
            className={`relative text-white font-mono font-bold ${config.text} tracking-wider block`}
            style={{ 
              fontFamily: '"Courier New", "Lucida Console", monospace',
              textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.2), 0 1px 0 rgba(255,255,255,0.1)'
            }}
            animate={animated ? {
              textShadow: [
                '0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.2)',
                '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)',
                '0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.2)'
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            UPSKILLS
          </motion.span>
          
          {/* Inner glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-green-300/10 to-green-400/5 rounded-full" />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
            animate={animated ? {
              x: ['-100%', '100%']
            } : {}}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Enhanced bottom shadow */}
        <motion.div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 h-4 bg-black/30 rounded-full blur-lg mt-2"
          animate={animated ? {
            scaleX: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Connecting line with gradient */}
      <motion.div 
        className="absolute left-8 top-1/2 w-6 h-px bg-gradient-to-r from-purple-400 via-purple-300 to-green-500 opacity-60"
        animate={animated ? {
          opacity: [0.6, 0.8, 0.6],
          scaleX: [1, 1.2, 1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {animated && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default PointerLabel;
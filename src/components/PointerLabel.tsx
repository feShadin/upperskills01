import React from 'react';
import { motion } from 'framer-motion';

interface PointerLabelProps {
  className?: string;
  animated?: boolean;
}

const PointerLabel: React.FC<PointerLabelProps> = ({ 
  className = '', 
  animated = true 
}) => {
  return (
    <motion.div
      className={`relative inline-flex items-center ${className}`}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Purple Triangle Pointer */}
      <motion.div
        className="relative mr-3"
        whileHover={animated ? { scale: 1.1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 blur-md">
          <div 
            className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px]"
            style={{
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: '#a855f7'
            }}
          />
        </div>
        
        {/* Main triangle with gradient */}
        <div 
          className="relative w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] filter drop-shadow-lg"
          style={{
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#8b5cf6'
          }}
        >
          {/* Inner highlight */}
          <div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[15px]"
            style={{
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: '#c084fc'
            }}
          />
        </div>
        
        {/* Soft shadow */}
        <div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-purple-500/20 rounded-full blur-sm"
        />
      </motion.div>

      {/* UPSKILLS Label */}
      <motion.div
        className="relative"
        whileHover={animated ? { scale: 1.02, y: -2 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 rounded-full blur-lg opacity-60" />
        
        {/* Main capsule */}
        <div className="relative bg-gradient-to-r from-green-900 to-green-700 rounded-full px-6 py-3 border border-green-600/30 shadow-2xl">
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 rounded-full" />
          
          {/* Highlight edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full" />
          
          {/* Text */}
          <span 
            className="relative text-white font-mono font-bold text-lg tracking-wider drop-shadow-lg"
            style={{ 
              fontFamily: '"Courier New", monospace',
              textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            UPSKILLS
          </span>
          
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-300/10 rounded-full" />
        </div>
        
        {/* Bottom shadow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-24 h-3 bg-black/20 rounded-full blur-md mt-1" />
      </motion.div>

      {/* Connecting line (optional) */}
      <div className="absolute left-8 top-1/2 w-4 h-px bg-gradient-to-r from-purple-400 to-green-600 opacity-50" />
    </motion.div>
  );
};

export default PointerLabel;
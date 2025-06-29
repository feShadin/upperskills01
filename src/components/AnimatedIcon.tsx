import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'bounce' | 'scale' | 'wiggle' | 'rotate' | 'pulse' | 'float';
  color?: string;
  tooltip?: string;
  onClick?: () => void;
  className?: string;
  glowColor?: string;
  educational?: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'scale',
  color = '#3b82f6',
  tooltip,
  onClick,
  className = '',
  glowColor,
  educational = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Size variants
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  // Animation variants
  const animationVariants = {
    bounce: {
      initial: { y: 0 },
      hover: { 
        y: [-2, -8, -2],
        transition: { 
          duration: 0.6, 
          repeat: Infinity, 
          repeatType: "loop" as const,
          ease: "easeInOut"
        }
      }
    },
    scale: {
      initial: { scale: 1 },
      hover: { 
        scale: [1, 1.2, 1.1],
        transition: { 
          duration: 0.4, 
          ease: "easeOut"
        }
      }
    },
    wiggle: {
      initial: { rotate: 0 },
      hover: { 
        rotate: [-5, 5, -5, 5, 0],
        transition: { 
          duration: 0.5, 
          ease: "easeInOut"
        }
      }
    },
    rotate: {
      initial: { rotate: 0 },
      hover: { 
        rotate: 360,
        transition: { 
          duration: 0.6, 
          ease: "easeInOut"
        }
      }
    },
    pulse: {
      initial: { scale: 1, opacity: 1 },
      hover: { 
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        transition: { 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: "loop" as const
        }
      }
    },
    float: {
      initial: { y: 0, rotate: 0 },
      hover: { 
        y: [-3, 3, -3],
        rotate: [0, 5, -5, 0],
        transition: { 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "loop" as const,
          ease: "easeInOut"
        }
      }
    }
  };

  const currentAnimation = animationVariants[variant];
  const finalGlowColor = glowColor || color;

  return (
    <div className="relative inline-block">
      <motion.div
        className={`
          relative cursor-pointer inline-flex items-center justify-center
          ${onClick ? 'cursor-pointer' : 'cursor-default'}
          ${className}
        `}
        variants={currentAnimation}
        initial="initial"
        whileHover="hover"
        onHoverStart={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        onClick={onClick}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={isHovered ? {
            boxShadow: [
              `0 0 0px ${finalGlowColor}00`,
              `0 0 20px ${finalGlowColor}40`,
              `0 0 30px ${finalGlowColor}60`,
              `0 0 40px ${finalGlowColor}40`
            ]
          } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Icon with color animation */}
        <motion.div
          animate={{
            color: isHovered ? finalGlowColor : color,
            filter: isHovered ? `drop-shadow(0 0 8px ${finalGlowColor}60)` : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={sizeClasses[size]} />
        </motion.div>

        {/* Educational pulse ring */}
        {educational && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 opacity-0"
            style={{ borderColor: finalGlowColor }}
            animate={isHovered ? {
              scale: [1, 1.5, 2],
              opacity: [0.6, 0.3, 0]
            } : {}}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "easeOut" 
            }}
          />
        )}
      </motion.div>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {tooltip && showTooltip && (
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Tooltip content */}
              <div className="bg-gray-900/95 backdrop-blur-xl text-white text-sm px-3 py-2 rounded-lg border border-white/10 shadow-xl whitespace-nowrap">
                {tooltip}
              </div>
              
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="border-4 border-transparent border-t-gray-900/95"></div>
              </div>
              
              {/* Glow effect for tooltip */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-50"
                style={{
                  boxShadow: `0 0 20px ${finalGlowColor}30`
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedIcon;
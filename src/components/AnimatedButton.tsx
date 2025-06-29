import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  disabled = false,
  fullWidth = false
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    onClick?.();
  };

  // Size variants
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Variant styles
  const variantStyles = {
    primary: {
      base: 'bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg shadow-blue-500/25',
      hover: 'hover:from-blue-600 hover:to-green-600 hover:shadow-blue-500/40',
      glow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)'
    },
    secondary: {
      base: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium',
      hover: 'hover:bg-white/20 hover:border-white/30',
      glow: '0 0 20px rgba(255, 255, 255, 0.3)'
    },
    outline: {
      base: 'border-2 border-blue-500/50 text-blue-400 font-medium bg-transparent',
      hover: 'hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300',
      glow: '0 0 20px rgba(59, 130, 246, 0.4)'
    },
    ghost: {
      base: 'text-gray-300 font-medium bg-transparent',
      hover: 'hover:text-white hover:bg-white/5',
      glow: '0 0 15px rgba(255, 255, 255, 0.2)'
    }
  };

  const currentVariant = variantStyles[variant];

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    initial: { x: 0, y: 0 },
    hover: { 
      x: iconPosition === 'right' ? 3 : -3,
      y: -1,
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 0.5
      }
    }
  };

  const borderVariants = {
    initial: { pathLength: 0, opacity: 0 },
    hover: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.6 },
    animate: { 
      scale: 4, 
      opacity: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        repeatDelay: 2,
        ease: "easeInOut"
      }
    }
  };

  const ButtonContent = () => (
    <motion.button
      className={`
        magnetic relative inline-flex items-center justify-center rounded-xl
        ${sizeClasses[size]}
        ${currentVariant.base}
        ${currentVariant.hover}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-300 overflow-hidden group
        ${className}
      `}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      onClick={handleClick}
      disabled={disabled}
      style={{
        filter: disabled ? 'none' : undefined
      }}
    >
      {/* Animated border trace */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ borderRadius: '0.75rem' }}
      >
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="11"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="2"
          variants={borderVariants}
          initial="initial"
          whileHover={disabled ? undefined : "hover"}
        />
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />

      {/* Ripple effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl"
          variants={rippleVariants}
          initial="initial"
          animate="animate"
        />
      )}

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: currentVariant.glow,
          filter: 'blur(1px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center space-x-2">
        {Icon && iconPosition === 'left' && (
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover={disabled ? undefined : "hover"}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        )}
        
        <span>{children}</span>
        
        {Icon && iconPosition === 'right' && (
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover={disabled ? undefined : "hover"}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        )}
      </div>

      {/* Pulse effect for primary buttons */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
};

export default AnimatedButton;
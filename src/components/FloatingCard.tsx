import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats?: {
    label: string;
    value: string;
    color: string;
  }[];
  delay?: number;
  className?: string;
  onClick?: () => void;
  href?: string;
  gradient?: {
    from: string;
    to: string;
  };
  floatIntensity?: number;
  tiltIntensity?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  icon: Icon,
  title,
  description,
  stats = [],
  delay = 0,
  className = '',
  onClick,
  href,
  gradient = { from: '#3b82f6', to: '#10b981' },
  floatIntensity = 10,
  tiltIntensity = 15
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), {
    stiffness: 300,
    damping: 30
  });

  // Floating animation values
  const floatY = useMotionValue(0);
  const floatRotate = useMotionValue(0);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXPercent = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPercent = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXPercent);
    mouseY.set(mouseYPercent);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Floating animation effect
  React.useEffect(() => {
    const animate = () => {
      const time = Date.now() * 0.001;
      floatY.set(Math.sin(time + delay) * floatIntensity);
      floatRotate.set(Math.sin(time * 0.5 + delay) * 2);
      requestAnimationFrame(animate);
    };
    animate();
  }, [floatY, floatRotate, delay, floatIntensity]);

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 60, 
      scale: 0.8,
      rotateX: 0,
      rotateY: 0
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -20,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: 1, 
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: [0, -10, 10, 0],
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const CardContent = () => (
    <motion.div
      ref={cardRef}
      className={`
        group relative magnetic educational-element cursor-pointer
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full
        overflow-hidden transform-gpu perspective-1000
        ${className}
      `}
      style={{
        rotateX,
        rotateY,
        translateY: floatY,
        rotate: floatRotate,
        transformStyle: 'preserve-3d'
      }}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Dynamic Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(45deg, ${gradient.from}40, ${gradient.to}40)`
        }}
        variants={glowVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(45deg, ${gradient.from}20, ${gradient.to}20)`,
          padding: '2px'
        }}
        animate={isHovered ? {
          background: [
            `linear-gradient(45deg, ${gradient.from}20, ${gradient.to}20)`,
            `linear-gradient(90deg, ${gradient.from}30, ${gradient.to}30)`,
            `linear-gradient(135deg, ${gradient.from}20, ${gradient.to}20)`
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gray-900/90 rounded-3xl" />
      </motion.div>

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Floating Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative"
          style={{
            background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
          }}
          variants={iconVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {/* Icon Glow */}
          <motion.div
            className="text-2xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
            }}
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <Icon className="h-10 w-10 text-white relative z-10" />
          
          {/* Floating Particles */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{
                    x: Math.cos(i * 60 * Math.PI / 180) * 30,
                    y: Math.sin(i * 60 * Math.PI / 180) * 30,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Title with Gradient Animation */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
          style={{
            backgroundImage: isHovered ? `linear-gradient(135deg, ${gradient.from}, ${gradient.to})` : undefined
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-300 leading-relaxed mb-6 flex-grow"
          animate={isHovered ? { color: '#e5e7eb' } : { color: '#d1d5db' }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Stats Grid */}
        {stats.length > 0 && (
          <motion.div 
            className="text-black leading-relaxed mb-6 flex-grow"
            animate={isHovered ? { color: '#000000' } : { color: '#000000' }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-3 bg-white/5 rounded-xl border border-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + 0.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div 
                  className="text-xl font-bold mb-1"
                  style={{ color: stat.color }}
                  animate={isHovered ? {
                    textShadow: `0 0 10px ${stat.color}60`
                  } : {}}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Hover Overlay with Shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
          animate={isHovered ? {
            background: [
              'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)',
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              'linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent)'
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* 3D Depth Layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'translateZ(10px)' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'translateZ(-10px)' }}
        />
      </div>

      {/* Interactive Ripple Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ 
            scale: [0, 1.5, 2],
            opacity: [0.6, 0.3, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            background: `radial-gradient(circle, ${gradient.from}20, transparent 70%)`
          }}
        />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default FloatingCard;
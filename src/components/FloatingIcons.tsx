import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  BarChart3, 
  Lightbulb, 
  GraduationCap,
  Atom,
  Brain,
  Code,
  Target
} from 'lucide-react';

const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: BookOpen, delay: 0, x: '10%', y: '20%' },
    { Icon: Calculator, delay: 0.5, x: '80%', y: '15%' },
    { Icon: Microscope, delay: 1, x: '15%', y: '70%' },
    { Icon: BarChart3, delay: 1.5, x: '85%', y: '75%' },
    { Icon: Lightbulb, delay: 2, x: '50%', y: '10%' },
    { Icon: GraduationCap, delay: 2.5, x: '90%', y: '45%' },
    { Icon: Atom, delay: 3, x: '5%', y: '50%' },
    { Icon: Brain, delay: 3.5, x: '75%', y: '30%' },
    { Icon: Code, delay: 4, x: '25%', y: '85%' },
    { Icon: Target, delay: 4.5, x: '60%', y: '60%' },
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon 
            className="h-8 w-8 text-blue-400" 
            style={{
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
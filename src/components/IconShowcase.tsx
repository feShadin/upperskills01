import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Rocket, 
  Target, 
  Microscope, 
  BarChart3,
  Lightbulb,
  GraduationCap,
  Code,
  Calculator,
  Atom,
  Zap,
  Users,
  Award,
  TrendingUp,
  Play,
  Star,
  Heart,
  Settings
} from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';

const IconShowcase: React.FC = () => {
  const educationalIcons = [
    { 
      icon: BookOpen, 
      tooltip: "Interactive Learning Modules", 
      variant: 'bounce' as const, 
      color: '#3b82f6',
      description: "Engage with dynamic content"
    },
    { 
      icon: Brain, 
      tooltip: "AI-Powered Analytics", 
      variant: 'pulse' as const, 
      color: '#8b5cf6',
      description: "Smart learning insights"
    },
    { 
      icon: Rocket, 
      tooltip: "Accelerated Progress", 
      variant: 'float' as const, 
      color: '#f59e0b',
      description: "Launch your career"
    },
    { 
      icon: Target, 
      tooltip: "Personalized Goals", 
      variant: 'wiggle' as const, 
      color: '#ef4444',
      description: "Hit your learning targets"
    },
    { 
      icon: Microscope, 
      tooltip: "Virtual Laboratory", 
      variant: 'scale' as const, 
      color: '#10b981',
      description: "Hands-on experiments"
    },
    { 
      icon: BarChart3, 
      tooltip: "Progress Tracking", 
      variant: 'bounce' as const, 
      color: '#06b6d4',
      description: "Monitor your growth"
    },
    { 
      icon: Lightbulb, 
      tooltip: "Creative Solutions", 
      variant: 'pulse' as const, 
      color: '#f59e0b',
      description: "Innovative thinking"
    },
    { 
      icon: GraduationCap, 
      tooltip: "Certification Ready", 
      variant: 'rotate' as const, 
      color: '#8b5cf6',
      description: "Earn recognized credentials"
    },
    { 
      icon: Code, 
      tooltip: "Programming Skills", 
      variant: 'wiggle' as const, 
      color: '#3b82f6',
      description: "Master coding languages"
    },
    { 
      icon: Calculator, 
      tooltip: "Mathematical Concepts", 
      variant: 'bounce' as const, 
      color: '#10b981',
      description: "Advanced mathematics"
    },
    { 
      icon: Atom, 
      tooltip: "Scientific Discovery", 
      variant: 'float' as const, 
      color: '#ef4444',
      description: "Explore the universe"
    },
    { 
      icon: Zap, 
      tooltip: "Quick Learning", 
      variant: 'scale' as const, 
      color: '#f59e0b',
      description: "Rapid skill acquisition"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple to-purple-hover bg-clip-text text-transparent">
              Interactive Learning Elements
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Hover over each icon to experience our engaging educational animations
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationalIcons.map((item, index) => (
            <motion.div
              key={index}
              className="educational-element group relative"
              variants={itemVariants}
            >
              {/* Icon container with glassmorphic background */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group-hover:border-white/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)`
                     }} />
                
                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-4">
                  <AnimatedIcon
                    icon={item.icon}
                    size="xl"
                    variant={item.variant}
                    color={item.color}
                    tooltip={item.tooltip}
                    educational={true}
                    glowColor={item.color}
                  />
                </div>
                
                {/* Description */}
                <div className="relative z-10">
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100"
                  style={{ borderColor: item.color }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Experience Interactive Learning
            </h3>
            <p className="text-gray-300 mb-6">
              Our platform uses advanced animations and micro-interactions to create an engaging educational experience that adapts to your learning style.
            </p>
            
            {/* Demo icons with different animations */}
            <div className="flex justify-center space-x-8">
              <AnimatedIcon
                icon={Star}
                size="lg"
                variant="pulse"
                color="#f59e0b"
                tooltip="Achievement Unlocked!"
                educational={true}
              />
              <AnimatedIcon
                icon={Heart}
                size="lg"
                variant="bounce"
                color="#ef4444"
                tooltip="Favorite Content"
                educational={true}
              />
              <AnimatedIcon
                icon={Settings}
                size="lg"
                variant="rotate"
                color="#8b5cf6"
                tooltip="Customize Experience"
                educational={true}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IconShowcase;
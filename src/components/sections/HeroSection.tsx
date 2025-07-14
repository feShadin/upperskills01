import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  BookOpen, 
  Brain, 
  Microscope, 
  Calculator,
  GraduationCap,
  Atom,
  Code,
  Target,
  Lightbulb,
  Zap
} from 'lucide-react';
import AnimatedButton from '../AnimatedButton';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Future of Education',
    'AI-Powered Learning',
    'Smart Study Platform',
    'Your Success Journey'
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[textIndex];
      
      if (!isDeleting && charIndex < currentFullText.length) {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const floatingIcons = [
    { Icon: BookOpen, delay: 0, x: '10%', y: '20%' },
    { Icon: Brain, delay: 0.5, x: '85%', y: '15%' },
    { Icon: Microscope, delay: 1, x: '15%', y: '70%' },
    { Icon: Calculator, delay: 1.5, x: '80%', y: '75%' },
    { Icon: GraduationCap, delay: 2, x: '50%', y: '10%' },
    { Icon: Atom, delay: 2.5, x: '90%', y: '45%' },
    { Icon: Code, delay: 3, x: '5%', y: '50%' },
    { Icon: Target, delay: 3.5, x: '75%', y: '30%' },
    { Icon: Lightbulb, delay: 4, x: '25%', y: '85%' },
    { Icon: Zap, delay: 4.5, x: '60%', y: '60%' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-green-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(16,185,129,0.3))',
            'linear-gradient(90deg, rgba(139,92,246,0.3), rgba(16,185,129,0.2), rgba(59,130,246,0.3))',
            'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(59,130,246,0.2), rgba(139,92,246,0.3))',
            'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(16,185,129,0.3))'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Academic Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
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
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
            }}
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-4"
        style={{ y, opacity }}
      >
        {/* AI Welcome Greeting */}
        <motion.div
          className="mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white text-body">
              AI Assistant: Welcome to the future of learning! 🚀
            </span>
          </div>
        </motion.div>

        {/* Animated Headline with Typewriter */}
        <motion.h1 
          className="text-h1 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block text-white mb-4">Welcome to the</span>
          <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            {currentText}
            <motion.span
              className="inline-block w-1 h-16 bg-blue-400 ml-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-body text-black mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Experience revolutionary AI-powered education with personalized learning paths, 
          interactive content, and real-time mentorship from top universities.
        </motion.p>

        {/* CTA Buttons with Magnetic Effects */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            className="magnetic"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatedButton
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="relative overflow-hidden group"
            >
              <motion.div
                className="h-8 w-8 text-purple" 
                initial={{ x: '-100%' }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(164, 52, 242, 0.6))' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Start Learning Now</span>
            </AnimatedButton>
          </motion.div>
          
          <motion.div
            className="magnetic"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatedButton
              variant="outline"
              size="lg"
              icon={Play}
              iconPosition="left"
            >
              Watch Demo
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          <span className="block text-black mb-4">Welcome to the</span>
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="inline-block w-1 h-16 bg-purple ml-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
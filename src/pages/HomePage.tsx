import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  BookOpen, 
  Brain, 
  Rocket, 
  Target, 
  Microscope, 
  BarChart3,
  Users,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';

import GlassmorphismCard from '../components/GlassmorphismCard';
import FloatingIcons from '../components/FloatingIcons';
import FloatingCardGrid from '../components/FloatingCardGrid';
import AnimatedButton from '../components/AnimatedButton';
import IconShowcase from '../components/IconShowcase';
import AnimatedIcon from '../components/AnimatedIcon';
import PinnedHeroSection from '../components/ScrollAnimations/PinnedHeroSection';
import FadeInSection from '../components/ScrollAnimations/FadeInSection';
import { useStaggeredReveal, useParallax, useZoomInOnScroll, useSlideIn } from '../hooks/useScrollAnimations';

const HomePage: React.FC = () => {
  const heroStagger = useStaggeredReveal(0.2);
  const statsParallax = useParallax(0.3);
  const featuresZoom = useZoomInOnScroll();
  const ctaSlide = useSlideIn('right');

  const stats = [
    { icon: Users, label: 'Active Learners', value: '2.5M+', color: '#3b82f6' },
    { icon: Award, label: 'Certifications', value: '50K+', color: '#10b981' },
    { icon: TrendingUp, label: 'Success Rate', value: '96%', color: '#3b82f6' },
    { icon: Zap, label: 'AI Interactions', value: '100M+', color: '#10b981' }
  ];

  return (
    <div className="min-h-screen">
      <FloatingIcons />
      
      {/* Pinned Hero Section */}
      <PinnedHeroSection>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              {/* Hero Title with Enhanced Animation */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
                style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
              >
                <motion.span 
                  className="block bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Future of
                </motion.span>
                <motion.span 
                  className="block text-white mt-2 magnetic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Education
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience next-generation learning with AI-powered personalization, 
                immersive virtual environments, and cutting-edge educational technology.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/courses" className="magnetic">
                  <AnimatedButton
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Start Learning
                  </AnimatedButton>
                </Link>
                
                <div className="magnetic">
                  <AnimatedButton
                    variant="outline"
                    size="lg"
                    icon={Play}
                    iconPosition="left"
                  >
                    Watch Demo
                  </AnimatedButton>
                </div>
              </motion.div>

              {/* Enhanced Stats Row with Parallax */}
              <motion.div 
                ref={statsParallax.ref}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16"
                style={{ y: statsParallax.y, opacity: statsParallax.opacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer magnetic"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex justify-center mb-3">
                      <AnimatedIcon
                        icon={stat.icon}
                        size="lg"
                        variant="bounce"
                        color={stat.color}
                        tooltip={`${stat.value} ${stat.label}`}
                        educational={true}
                      />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PinnedHeroSection>

      {/* Floating 3D Cards Section */}
      <FadeInSection direction="up" delay={0.2}>
        <FloatingCardGrid />
      </FadeInSection>

      {/* Icon Showcase with Fade In */}
      <FadeInSection direction="up" delay={0.2}>
        <IconShowcase />
      </FadeInSection>

      {/* CTA Section with Slide Animation */}
      <section className="py-20 relative" ref={ctaSlide.ref}>
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ x: ctaSlide.x, opacity: ctaSlide.opacity }}
        >
          <motion.div 
            className="relative bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-12 overflow-hidden magnetic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(59,130,246,0.05), rgba(16,185,129,0.05))',
                  'linear-gradient(45deg, rgba(16,185,129,0.05), rgba(59,130,246,0.05))',
                  'linear-gradient(45deg, rgba(59,130,246,0.05), rgba(16,185,129,0.05))',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <FadeInSection direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Learning?
                </h2>
              </FadeInSection>
              
              <FadeInSection direction="up" delay={0.2}>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join millions of learners who are already experiencing the future of education. 
                  Start your journey with AI-powered personalized learning today.
                </p>
              </FadeInSection>
              
              <FadeInSection direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register" className="magnetic">
                    <AnimatedButton
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right"
                    >
                      Get Started Free
                    </AnimatedButton>
                  </Link>
                  
                  <Link to="/demo" className="magnetic">
                    <AnimatedButton
                      variant="outline"
                      size="lg"
                    >
                      Request Demo
                    </AnimatedButton>
                  </Link>
                </div>
              </FadeInSection>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
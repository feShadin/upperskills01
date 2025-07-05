import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../hooks/useScrollAnimations';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  const { ref, y, opacity } = useParallax(0.5);

  const stats = [
    { icon: Users, value: '2.5M+', label: 'Active Learners', color: '#3b82f6' },
    { icon: Award, value: '50K+', label: 'Certifications', color: '#10b981' },
    { icon: TrendingUp, value: '96%', label: 'Success Rate', color: '#8b5cf6' },
    { icon: Globe, value: '150+', label: 'Countries', color: '#f59e0b' }
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y, opacity }}
      >
        {/* Glassmorphism Card */}
        <motion.div
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -10 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(16,185,129,0.1))',
                'linear-gradient(90deg, rgba(16,185,129,0.1), rgba(139,92,246,0.1))',
                'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.h2 
                className="text-h2 text-white mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Revolutionizing Education with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  AI Technology
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-body text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                UpperSkills is pioneering the future of education through cutting-edge AI technology, 
                personalized learning experiences, and world-class content from top universities. 
                Our platform adapts to your unique learning style, ensuring maximum retention and success.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  'AI-powered personalized learning paths',
                  'Real-time progress tracking and analytics',
                  'Interactive virtual laboratories',
                  'Live mentorship from industry experts'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-body text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon 
                      className="h-6 w-6" 
                      style={{ color: stat.color }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="text-h3 text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-button text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
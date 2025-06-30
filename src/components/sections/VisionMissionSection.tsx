import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Lightbulb, Globe } from 'lucide-react';

const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Shaping the future of education through innovation and accessibility
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vision Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
                    'linear-gradient(90deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))',
                    'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                
                <motion.p
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  To democratize world-class education by making cutting-edge learning 
                  accessible to every individual, regardless of their geographical location 
                  or economic background.
                </motion.p>

                <div className="space-y-4">
                  {[
                    'Global accessibility to premium education',
                    'AI-powered personalized learning experiences',
                    'Breaking down traditional educational barriers',
                    'Fostering a worldwide learning community'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Icons */}
              {[Globe, Lightbulb].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute opacity-10"
                  style={{
                    right: `${20 + index * 30}%`,
                    top: `${30 + index * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 8,
                    delay: index * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="h-16 w-16 text-blue-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))',
                    'linear-gradient(90deg, rgba(5,150,105,0.1), rgba(16,185,129,0.1))',
                    'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                
                <motion.p
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  To empower learners worldwide with innovative AI-driven educational 
                  tools, expert mentorship, and practical skills that drive career 
                  success and personal growth.
                </motion.p>

                <div className="space-y-4">
                  {[
                    'Deliver personalized learning experiences',
                    'Provide industry-relevant skills training',
                    'Connect learners with expert mentors',
                    'Enable career transformation and growth'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-gray-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Icons */}
              {[Target, Lightbulb].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute opacity-10"
                  style={{
                    left: `${20 + index * 30}%`,
                    bottom: `${30 + index * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, -360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 8,
                    delay: index * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="h-16 w-16 text-green-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '2025', label: 'Founded' },
            { value: '150+', label: 'Countries Served' },
            { value: '2.5M+', label: 'Lives Transformed' },
            { value: '96%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
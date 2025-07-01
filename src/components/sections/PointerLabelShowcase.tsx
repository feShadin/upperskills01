import React from 'react';
import { motion } from 'framer-motion';
import PointerLabel from '../PointerLabel';

const PointerLabelShowcase: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              3D Neumorphism UI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium 3D pointer labels with soft shadows, glowing effects, and smooth animations
          </p>
        </motion.div>

        {/* Main Showcase */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-green-500/5"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(139,92,246,0.05), rgba(16,185,129,0.05))',
                  'linear-gradient(90deg, rgba(16,185,129,0.05), rgba(139,92,246,0.05))',
                  'linear-gradient(45deg, rgba(139,92,246,0.05), rgba(16,185,129,0.05))'
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <div className="relative z-10 flex justify-center">
              <PointerLabel size="large" />
            </div>
          </div>
        </motion.div>

        {/* Size Variations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Small */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-4">
              <PointerLabel size="small" />
            </div>
            <p className="text-gray-400 text-sm font-medium">Small Size</p>
          </div>

          {/* Default */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-4">
              <PointerLabel size="default" />
            </div>
            <p className="text-gray-400 text-sm font-medium">Default Size</p>
          </div>

          {/* Large */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-4">
              <PointerLabel size="large" />
            </div>
            <p className="text-gray-400 text-sm font-medium">Large Size</p>
          </div>
        </motion.div>

        {/* Animation Examples */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Floating Animation */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Floating Animation</h3>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <PointerLabel />
              </motion.div>
            </div>
          </div>

          {/* Pulse Animation */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Pulse Animation</h3>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <PointerLabel />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Usage Examples */}
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Real-World Usage Examples
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Navigation Example */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Navigation Highlight
              </h4>
              <div className="bg-gray-800/50 rounded-xl p-6 relative border border-gray-700/50">
                <div className="absolute top-4 right-4">
                  <PointerLabel size="small" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-600/30 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-600/30 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-600/30 rounded w-2/3"></div>
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  Perfect for highlighting new features or important sections
                </p>
              </div>
            </div>

            {/* Hero Section Example */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-400 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Hero Section Accent
              </h4>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <div className="text-center space-y-4">
                  <h5 className="text-white font-bold text-lg">Welcome to the Future of Learning</h5>
                  <div className="flex justify-center">
                    <PointerLabel />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Enhance your brand presence with premium 3D elements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '🎨', title: 'Neumorphism Design', desc: 'Soft UI with realistic shadows' },
                { icon: '✨', title: 'Smooth Animations', desc: 'Framer Motion powered effects' },
                { icon: '📱', title: 'Responsive', desc: 'Works on all screen sizes' },
                { icon: '🎯', title: 'Customizable', desc: 'Multiple sizes and styles' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h5 className="text-white font-semibold text-sm mb-1">{feature.title}</h5>
                  <p className="text-gray-400 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PointerLabelShowcase;
import React from 'react';
import { motion } from 'framer-motion';
import PointerLabel from '../PointerLabel';

const PointerLabelShowcase: React.FC = () => {
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
            3D UI Elements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Neumorphism design with soft shadows and glowing effects
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center">
          {/* Default */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PointerLabel />
            <p className="text-gray-400 text-sm">Default Style</p>
          </motion.div>

          {/* Large Version */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="transform scale-125">
              <PointerLabel />
            </div>
            <p className="text-gray-400 text-sm">Large Scale</p>
          </motion.div>

          {/* Animated Version */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PointerLabel />
            </motion.div>
            <p className="text-gray-400 text-sm">Floating Animation</p>
          </motion.div>
        </div>

        {/* Usage Examples */}
        <motion.div
          className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Usage Examples
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* In Navigation */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-400">Navigation Highlight</h4>
              <div className="bg-gray-800/50 rounded-xl p-6 relative">
                <div className="absolute top-4 right-4">
                  <PointerLabel className="transform scale-75" />
                </div>
                <p className="text-gray-300">
                  Use as a navigation indicator or feature highlight
                </p>
              </div>
            </div>

            {/* In Hero Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400">Hero Accent</h4>
              <div className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <h5 className="text-white font-bold mb-2">Welcome to</h5>
                  <PointerLabel />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PointerLabelShowcase;
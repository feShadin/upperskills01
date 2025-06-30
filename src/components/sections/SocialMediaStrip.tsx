import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

const SocialMediaStrip: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', color: '#333', label: 'GitHub' },
    { icon: Twitter, href: '#', color: '#1DA1F2', label: 'Twitter' },
    { icon: Linkedin, href: '#', color: '#0077B5', label: 'LinkedIn' },
    { icon: Youtube, href: '#', color: '#FF0000', label: 'YouTube' },
    { icon: Instagram, href: '#', color: '#E4405F', label: 'Instagram' },
    { icon: Facebook, href: '#', color: '#1877F2', label: 'Facebook' }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Connect With Us</h3>
          <p className="text-gray-400">Follow our journey across social platforms</p>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center space-x-8 overflow-x-auto pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="group relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Background Circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{
                  backgroundColor: `${social.color}20`,
                  borderColor: `${social.color}40`,
                  boxShadow: `0 0 20px ${social.color}40`
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon Container */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon 
                    className="h-8 w-8 text-white group-hover:text-white transition-colors duration-300"
                    style={{ filter: `drop-shadow(0 0 10px ${social.color}60)` }}
                  />
                </motion.div>
              </div>

              {/* Tooltip */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.label}
              </motion.div>

              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 opacity-0"
                style={{ borderColor: social.color }}
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Connecting Line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default SocialMediaStrip;
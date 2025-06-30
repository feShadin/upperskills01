import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';

const ContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            '0 10px 30px rgba(59, 130, 246, 0.3)',
            '0 20px 40px rgba(16, 185, 129, 0.4)',
            '0 10px 30px rgba(59, 130, 246, 0.3)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(16,185,129,0.1))',
                      'linear-gradient(90deg, rgba(16,185,129,0.1), rgba(59,130,246,0.1))',
                      'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(16,185,129,0.1))'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>

                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Get in Touch
                  </motion.h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>

                  {/* Quick Contact Options */}
                  <motion.div 
                    className="mt-6 pt-6 border-t border-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex justify-center space-x-6">
                      <motion.a
                        href="tel:+1234567890"
                        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">Call Us</span>
                      </motion.a>
                      
                      <motion.a
                        href="mailto:hello@upperskills.ai"
                        className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">Email Us</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactPopup;
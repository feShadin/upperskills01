import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Fardin Eihosan',
      role: 'Data Science Student',
      university: 'MIT',
      rating: 5,
      text: 'UpperSkills transformed my learning experience. The AI-powered recommendations helped me master complex algorithms in half the time.',
      avatar: 'unknown'
    },
    {
      id: 2,
      name: 'Nabid',
      role: 'Software Engineer',
      university: 'Stanford',
      rating: 5,
      text: 'The interactive coding labs and real-time feedback made learning programming languages incredibly engaging and effective.',
      avatar: 'unknown'
    },
    {
      id: 3,
      name: 'Koushik',
      role: 'Medical Student',
      university: 'Harvard',
      rating: 5,
      text: 'The virtual anatomy labs and AI tutoring system helped me excel in my medical studies. Absolutely revolutionary!',
      avatar: 'unknown'
    },
    {
      id: 4,
      name: 'Shakib',
      role: 'Business Analytics',
      university: 'Wharton',
      rating: 5,
      text: 'The personalized learning paths and industry connections through UpperSkills landed me my dream job at a Fortune 500 company.',
      avatar: 'unknown'
    }
  ];

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8
    })
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-black mb-6">
            What Our Students Say
          </h2>
          <p className="text-body text-black max-w-3xl mx-auto">
            Join thousands of successful learners who transformed their careers with UpperSkills
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-96 perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  rotateY: { duration: 0.6 },
                  scale: { duration: 0.4 }
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"
                    animate={{
                      background: [
                        'linear-gradient(45deg, rgba(59,130,246,0.05), rgba(16,185,129,0.05))',
                        'linear-gradient(90deg, rgba(16,185,129,0.05), rgba(139,92,246,0.05))',
                        'linear-gradient(45deg, rgba(59,130,246,0.05), rgba(16,185,129,0.05))'
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                    {/* Quote Icon */}
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <Quote className="h-12 w-12 text-blue-400 opacity-50" />
                    </motion.div>

                    {/* Review Text */}
                    <motion.p
                      className="text-body text-gray-300 mb-8 max-w-2xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      "{reviews[currentIndex].text}"
                    </motion.p>

                    {/* Rating */}
                    <motion.div
                      className="flex space-x-1 mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* User Info */}
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      {/* Unknown Symbol Avatar */}
                      <motion.div
                        className="w-16 h-16 rounded-full border-2 border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-green-500/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <User className="h-8 w-8 text-blue-400" />
                      </motion.div>
                      
                      <div className="text-left">
                        <h4 className="text-white font-semibold text-h3">
                          {reviews[currentIndex].name}
                        </h4>
                        <p className="text-gray-400 text-body">
                          {reviews[currentIndex].role}
                        </p>
                        <p className="text-blue-400 text-button">
                          {reviews[currentIndex].university}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
            onClick={prevReview}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
            onClick={nextReview}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-white/30'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
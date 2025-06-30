import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock, Star, Zap, ArrowRight } from 'lucide-react';

const SpecialOffersSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      discount: '70% OFF',
      originalPrice: '$299',
      salePrice: '$89',
      description: 'Complete AI & Data Science Bundle',
      features: ['50+ Courses', 'Live Mentorship', 'Certification', 'Lifetime Access'],
      badge: 'Limited Time',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Student Discount',
      discount: '50% OFF',
      originalPrice: '$199',
      salePrice: '$99',
      description: 'Programming Fundamentals Package',
      features: ['30+ Courses', 'Code Reviews', 'Projects', '1 Year Access'],
      badge: 'Most Popular',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Premium Bundle',
      discount: '60% OFF',
      originalPrice: '$499',
      salePrice: '$199',
      description: 'Complete Tech Career Path',
      features: ['100+ Courses', '1-on-1 Mentoring', 'Job Placement', 'Lifetime Support'],
      badge: 'Best Value',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2 mb-6"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(239, 68, 68, 0.3)',
                '0 0 30px rgba(239, 68, 68, 0.5)',
                '0 0 20px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gift className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-semibold">Special Launch Offers</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Limited Time{' '}
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Flash Sale
            </span>
          </h2>

          {/* Countdown Timer */}
          <motion.div
            className="flex justify-center items-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Clock className="h-6 w-6 text-red-400" />
            <div className="flex space-x-2">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center"
                  animate={{
                    scale: value === 0 ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-400 uppercase">
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Pulsing Badge */}
              <motion.div
                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${offer.color} text-white px-4 py-1 rounded-full text-sm font-semibold z-10`}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 10px rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {offer.badge}
              </motion.div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-5`}
                  animate={{
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Discount Badge */}
                  <motion.div
                    className={`inline-block bg-gradient-to-r ${offer.color} text-white px-4 py-2 rounded-xl font-bold text-xl mb-4`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {offer.discount}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {offer.title}
                  </h3>

                  <p className="text-gray-300 mb-6">
                    {offer.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl font-bold text-white">
                        {offer.salePrice}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {offer.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">One-time payment</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${offer.color} text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 group relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <Zap className="h-5 w-5 group-hover:animate-bounce" />
                    <span className="relative z-10">Claim Offer Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            🔥 Over 10,000 students have already claimed these offers!
          </p>
          <motion.div
            className="inline-flex items-center space-x-2 text-red-400"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Clock className="h-4 w-4" />
            <span className="text-sm font-semibold">Hurry! Offers expire soon</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
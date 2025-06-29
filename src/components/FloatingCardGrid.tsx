import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Rocket, 
  Target, 
  Microscope, 
  BarChart3,
  Users,
  Award,
  TrendingUp,
  Zap,
  Code,
  Lightbulb
} from 'lucide-react';
import FloatingCard from './FloatingCard';

const FloatingCardGrid: React.FC = () => {
  const cardData = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Engage with dynamic content, real-time simulations, and hands-on projects that adapt to your learning style.',
      stats: [
        { label: 'Completion', value: '94%', color: '#3b82f6' },
        { label: 'Engagement', value: '8.7/10', color: '#10b981' }
      ],
      gradient: { from: '#3b82f6', to: '#1d4ed8' },
      floatIntensity: 12,
      tiltIntensity: 18
    },
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced machine learning algorithms analyze your progress and provide personalized insights.',
      stats: [
        { label: 'Accuracy', value: '99.2%', color: '#8b5cf6' },
        { label: 'Predictions', value: '15M+', color: '#a855f7' }
      ],
      gradient: { from: '#8b5cf6', to: '#7c3aed' },
      floatIntensity: 15,
      tiltIntensity: 20
    },
    {
      icon: Rocket,
      title: 'Virtual Classrooms',
      description: 'Immersive virtual environments with HD video, spatial audio, and collaborative tools.',
      stats: [
        { label: 'Quality', value: '4K', color: '#f59e0b' },
        { label: 'Latency', value: '<50ms', color: '#f97316' }
      ],
      gradient: { from: '#f59e0b', to: '#d97706' },
      floatIntensity: 10,
      tiltIntensity: 15
    },
    {
      icon: Target,
      title: 'Personalized Paths',
      description: 'AI-driven curriculum that adapts to your strengths, weaknesses, and learning goals.',
      stats: [
        { label: 'Custom', value: '100%', color: '#ef4444' },
        { label: 'Faster', value: '3.2x', color: '#dc2626' }
      ],
      gradient: { from: '#ef4444', to: '#dc2626' },
      floatIntensity: 14,
      tiltIntensity: 22
    },
    {
      icon: Microscope,
      title: 'Virtual Labs',
      description: 'State-of-the-art virtual laboratories with realistic simulations for hands-on experimentation.',
      stats: [
        { label: 'Experiments', value: '500+', color: '#10b981' },
        { label: 'Accuracy', value: '99.8%', color: '#059669' }
      ],
      gradient: { from: '#10b981', to: '#059669' },
      floatIntensity: 11,
      tiltIntensity: 16
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Real-time analytics dashboard with detailed insights and performance metrics.',
      stats: [
        { label: 'Data Points', value: '1M+', color: '#06b6d4' },
        { label: 'Real-time', value: '100%', color: '#0891b2' }
      ],
      gradient: { from: '#06b6d4', to: '#0891b2' },
      floatIntensity: 13,
      tiltIntensity: 19
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Connect with peers, join study groups, and participate in interactive discussions.',
      stats: [
        { label: 'Active Users', value: '2.5M+', color: '#8b5cf6' },
        { label: 'Groups', value: '50K+', color: '#7c3aed' }
      ],
      gradient: { from: '#8b5cf6', to: '#6d28d9' },
      floatIntensity: 9,
      tiltIntensity: 14
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn industry-recognized certificates and badges to showcase your achievements.',
      stats: [
        { label: 'Certificates', value: '50K+', color: '#f59e0b' },
        { label: 'Recognition', value: '95%', color: '#d97706' }
      ],
      gradient: { from: '#f59e0b', to: '#b45309' },
      floatIntensity: 16,
      tiltIntensity: 21
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Track your professional development and get matched with relevant opportunities.',
      stats: [
        { label: 'Job Match', value: '87%', color: '#10b981' },
        { label: 'Salary Boost', value: '40%', color: '#047857' }
      ],
      gradient: { from: '#10b981', to: '#047857' },
      floatIntensity: 12,
      tiltIntensity: 17
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Completely Transparent Header - Pure Text Only */}
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            animate={{
              backgroundImage: [
                'linear-gradient(45deg, #3b82f6, #10b981)',
                'linear-gradient(90deg, #8b5cf6, #f59e0b)',
                'linear-gradient(135deg, #ef4444, #06b6d4)',
                'linear-gradient(180deg, #10b981, #8b5cf6)',
                'linear-gradient(45deg, #3b82f6, #10b981)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
              Platform Features
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the cutting-edge technologies that power our educational platform
          </motion.p>
        </motion.div>

        {/* Floating Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cardData.map((card, index) => (
            <FloatingCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              stats={card.stats}
              delay={index * 0.1}
              gradient={card.gradient}
              floatIntensity={card.floatIntensity}
              tiltIntensity={card.tiltIntensity}
              className="h-full"
            />
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <FloatingCard
              icon={Lightbulb}
              title="Experience the Magic"
              description="This special demo card showcases all our 3D floating effects: gentle floating animation, mouse-tracking tilt, dynamic shadows, particle effects, and smooth hover transitions. Move your mouse around to see the card respond to your movements!"
              stats={[
                { label: '3D Effects', value: '100%', color: '#f59e0b' },
                { label: 'Smoothness', value: '60fps', color: '#10b981' },
                { label: 'Interactivity', value: 'Real-time', color: '#3b82f6' },
                { label: 'Magic', value: '∞', color: '#8b5cf6' }
              ]}
              gradient={{ from: '#f59e0b', to: '#8b5cf6' }}
              floatIntensity={20}
              tiltIntensity={25}
              className="max-w-2xl mx-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgba(${Math.random() > 0.5 ? '59,130,246' : '16,185,129'}, ${0.1 + Math.random() * 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.3, 1.5, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FloatingCardGrid;
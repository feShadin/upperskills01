import React from 'react';
import { motion } from 'framer-motion';

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
            Courses Platform
          </h1>
          <p className="text-lg text-gray-400">
            Coming soon - Advanced course catalog with AI-powered recommendations
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;
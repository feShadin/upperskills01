import React from 'react';
import { motion } from 'framer-motion';

const FloatingFormulas: React.FC = () => {
  const formulas = [
    'E = mc²',
    '∫f(x)dx',
    'Σ(x-μ)²/n',
    'f(x) = ax² + bx + c',
    'lim(x→∞)',
    'dy/dx',
    'π = 3.14159...',
    '√(a² + b²)',
    'log₂(n)',
    'sin²θ + cos²θ = 1',
    'P(A|B) = P(B|A)P(A)/P(B)',
    'F = ma',
    'V = πr²h',
    'A = ½bh',
    'c² = a² + b²'
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {formulas.map((formula, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/30 font-mono text-sm md:text-base"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {formula}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFormulas;
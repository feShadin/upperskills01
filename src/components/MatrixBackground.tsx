import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Matrix rain effect with educational symbols
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    // Educational symbols and code
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz∑∫∆√π∞≈≠≤≥±×÷∂∇∈∉∪∩⊂⊃∀∃∧∨¬→↔∴∵αβγδεζηθικλμνξοπρστυφχψω{}[]()<>=+-*/&|^~!@#$%';

    const draw = () => {
      // Create trailing effect with dark background
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties with blue/green gradient effect
      ctx.font = fontSize + 'px "SF Pro Display", monospace';

      // Draw matrix characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Create gradient effect
        const gradient = ctx.createLinearGradient(x, y - fontSize, x, y + fontSize);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(0.5, '#10b981');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.3)');
        
        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        // Add glow effect for some characters
        if (Math.random() > 0.98) {
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#3b82f6';
          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;
        }

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default MatrixBackground;
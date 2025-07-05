import React, { useEffect, useRef } from 'react';

const FxOlogyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);

    const grid = 50;
    const formulas: Array<{
      text: string;
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;
    }> = [];
    
    const pool = [
      "12+12", "17+6-4", "15-6+8", "3y", "24", "-8", "5", "x+3", "√49",
      "∫f(x)dx", "Σ(x-μ)²", "π=3.14", "e^x", "log₂(n)", "sin²θ", "∆y/∆x",
      "f'(x)", "lim→∞", "∂f/∂x", "∇²φ", "α+β", "γ×δ", "λ=c/f", "E=mc²",
      "F=ma", "V=IR", "P=IV", "a²+b²=c²", "x²+y²=r²", "y=mx+b"
    ];

    // Initialize formulas
    for (let i = 0; i < 40; i++) {
      formulas.push({
        text: pool[Math.floor(Math.random() * pool.length)],
        x: Math.random() * w,
        y: Math.random() * h,
        speed: 0.3 + Math.random() * 0.7,
        size: 14 + Math.random() * 8,
        opacity: 0.3 + Math.random() * 0.4
      });
    }

    let scanX = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Dark grid
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Vertical grid lines
      for (let x = 0; x < w; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      for (let y = 0; y < h; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Floating math formulas
      ctx.font = '16px "Space Grotesk", monospace';
      formulas.forEach(formula => {
        ctx.fillStyle = `rgba(0, 255, 0, ${formula.opacity})`;
        ctx.font = `${formula.size}px "Space Grotesk", monospace`;
        ctx.fillText(formula.text, formula.x, formula.y);
        
        // Move formula
        formula.y += formula.speed;
        
        // Reset position when formula goes off screen
        if (formula.y > h + 50) {
          formula.y = -50;
          formula.x = Math.random() * w;
          formula.text = pool[Math.floor(Math.random() * pool.length)];
        }
        
        // Slight horizontal drift
        formula.x += (Math.random() - 0.5) * 0.2;
        
        // Keep formulas within bounds
        if (formula.x < -100) formula.x = w + 50;
        if (formula.x > w + 100) formula.x = -50;
      });

      // Green vertical scanline
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#00ff00';
      ctx.shadowBlur = 10;
      
      ctx.beginPath();
      ctx.moveTo(scanX, 0);
      ctx.lineTo(scanX, h);
      ctx.stroke();
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
      // Move scanline
      scanX = (scanX + 2) % (w + 100);
      if (scanX === 0) scanX = -100;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fxologyBg"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default FxOlogyBackground;
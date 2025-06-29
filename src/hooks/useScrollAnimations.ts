import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';

// Enhanced scroll trigger with intersection observer
export const useScrollTrigger = (threshold: number = 0.1, rootMargin: string = '0px') => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: rootMargin,
    amount: threshold
  });
  
  return { ref, isInView };
};

// Staggered reveal animation
export const useStaggeredReveal = (delay: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, isInView } = useScrollTrigger();

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return { ref, isVisible, delay };
};

// Enhanced parallax with multiple layers
export const useParallax = (speed: number = 0.5, direction: 'up' | 'down' = 'up') => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [`${multiplier * speed * -100}%`, `${multiplier * speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  
  return { ref, y, opacity, scale };
};

// Zoom in animation on scroll
export const useZoomInOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  return { ref, scale, opacity };
};

// Slide in from sides
export const useSlideIn = (direction: 'left' | 'right' = 'left') => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const multiplier = direction === 'left' ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [`${multiplier * 100}px`, '0px']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  
  return { ref, x, opacity };
};

// Rotate on scroll
export const useRotateOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  return { ref, rotate };
};

// Text reveal animation
export const useTextReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return { ref, isInView };
};

// Magnetic hover effect
export const useMagneticHover = (strength: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      element.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      element.removeEventListener('mousemove', handleMouseMove);
      x.set(0);
      y.set(0);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y, strength]);

  return { ref, x: springX, y: springY, isHovered };
};

// Floating animation
export const useFloating = (intensity: number = 10, duration: number = 3) => {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const animate = () => {
      y.set(Math.sin(Date.now() * 0.001) * intensity);
      requestAnimationFrame(animate);
    };
    animate();
  }, [y, intensity]);

  return { y: springY };
};
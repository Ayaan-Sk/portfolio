'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TimelineAnimation = ({ children, direction = 'left', delay = 0, className = '' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return;

    const element = elementRef.current;
    
    // Initial state - off screen
    gsap.set(element, { 
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
      opacity: 0 
    });

    // Animation when element comes into view
    const animation = gsap.to(element, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: delay,
      ease: 'power2.out',
      paused: true
    });

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      animation.kill();
      observer.unobserve(element);
    };
  }, [direction, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default TimelineAnimation;
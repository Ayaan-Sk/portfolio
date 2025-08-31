'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/utils/cn';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedHeader = ({ 
  children, 
  className = '', 
  staggerChildren = 0.1,
  triggerOffset = '80%'
}) => {
  const headerRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !headerRef.current) return;

    const header = headerRef.current;
    const letters = lettersRef.current;

    // Set initial state
    gsap.set(letters, { 
      y: 50, 
      opacity: 0 
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: `top ${triggerOffset}`,
        toggleActions: 'play none none reverse',
      }
    });

    // Animate each letter
    tl.to(letters, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: staggerChildren,
      ease: 'back.out(1.7)',
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [staggerChildren, triggerOffset]);

  // Split text into individual spans
  const renderSplitText = () => {
    if (typeof children !== 'string') {
      return children;
    }

    return children.split('').map((letter, index) => (
      <span
        key={index}
        ref={(el) => (lettersRef.current[index] = el)}
        className="inline-block"
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <div ref={headerRef} className={cn("overflow-hidden", className)}>
      {renderSplitText()}
    </div>
  );
};

export default AnimatedHeader;
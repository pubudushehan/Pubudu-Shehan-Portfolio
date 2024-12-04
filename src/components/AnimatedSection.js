import React, { useEffect, useRef, useState } from 'react';

function AnimatedSection({ children, className = '', delay = 0, animation = 'fade-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return `${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`;
      case 'fade-down':
        return `${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`;
      case 'fade-left':
        return `${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`;
      case 'fade-right':
        return `${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`;
      case 'zoom':
        return `${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;
      case 'flip':
        return `${isVisible ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`;
      default:
        return `${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform ${getAnimationClass()} transition-all duration-1000 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection; 
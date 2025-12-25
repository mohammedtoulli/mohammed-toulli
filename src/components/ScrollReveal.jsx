import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, delay = 0, animation = 'fade-up' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, { threshold: 0.1 });

        const currentElem = domRef.current;
        if (currentElem) observer.observe(currentElem);

        return () => {
            if (currentElem) observer.unobserve(currentElem);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`reveal ${isVisible ? 'visible' : ''} ${animation}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
            <style>{`
        .reveal {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.fade-up { transform: translateY(50px); }
        .reveal.fade-in { transform: scale(0.95); }
        
        .reveal.visible { opacity: 1; transform: translateY(0) scale(1); }
      `}</style>
        </div>
    );
};

export default ScrollReveal;

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Use refs for position to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      // Check hover state purely via DOM to avoid state lag during move
      const target = e.target;
      const isHoverable = target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');
      setHovered(isHoverable);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Animation loop for smooth ring trailing
    let rafId;
    const animateRing = () => {
      // Linear interpolation (Lerp) for smooth trailing
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15; // increased speed (0.1 -> 0.15)
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const cursorClasses = `
    ${hidden ? 'hidden' : ''}
    ${clicked ? 'clicked' : ''}
    ${hovered ? 'hovered' : ''}
  `;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${cursorClasses}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${cursorClasses}`}
      />
      <style>{`
        /* Cursor Styles */
        body { cursor: none; }
        
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-blue);
          border-radius: 50%;
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 99999;
          /* Removed transition for position to make it instant */
          transition: width 0.2s, height 0.2s, background-color 0.2s, opacity 0.2s;
        }

        .cursor-ring {
          width: 40px;
          height: 40px;
          border: 2px solid var(--accent-blue);
          border-radius: 50%;
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 99998;
          /* Removed transition for position, handled by JS loop */
          transition: width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s, opacity 0.2s;
        }

        /* Hover States */
        .cursor-ring.hovered {
          width: 60px;
          height: 60px;
          background-color: rgba(0, 240, 255, 0.1);
          border-color: transparent;
        }
        
        .cursor-dot.hovered {
          opacity: 0;
        }

        /* Click States */
        .cursor-ring.clicked {
          transform: translate(-50%, -50%) scale(0.8) !important; /* Override JS transform scale for a moment if needed, but easier to use CSS scale in another way. Actually JS handles translate, so scale needs to be handled carefully. Better to just shrink width/height */
          width: 30px;
          height: 30px;
          background-color: rgba(0, 240, 255, 0.3);
        }

        /* Hidden State */
        .cursor-dot.hidden, .cursor-ring.hidden {
          opacity: 0;
        }

        @media (hover: none) and (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none; }
          body { cursor: auto; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

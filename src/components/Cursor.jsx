import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + 'px';
        dotRef.current.style.top  = e.clientY - 5 + 'px';
      }
    };
    window.addEventListener('mousemove', onMove);

    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      pos.current.rx = lerp(pos.current.rx, pos.current.mx, 0.12);
      pos.current.ry = lerp(pos.current.ry, pos.current.my, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx - 18 + 'px';
        ringRef.current.style.top  = pos.current.ry - 18 + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Hover effect on interactive elements
    const grow = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '56px';
        ringRef.current.style.height = '56px';
        ringRef.current.style.opacity = '0.5';
      }
      if (dotRef.current) dotRef.current.style.transform = 'scale(2)';
    };
    const shrink = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '36px';
        ringRef.current.style.height = '36px';
        ringRef.current.style.opacity = '1';
      }
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)';
    };

    const targets = document.querySelectorAll(
      'a, button, .skill-card, .svc-card, .proj-card, .cert-card, .ach-card'
    );
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

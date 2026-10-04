import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    const interactiveEls = "a,button,.glass-card,.proj-card,.svc-card,.ach-card,.cert-card";
    const enter = () => ringRef.current?.classList.add("hovering");
    const leave = () => ringRef.current?.classList.remove("hovering");

    const attachListeners = () => {
      document.querySelectorAll(interactiveEls).forEach(el => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    attachListeners();

    let raf;
    function animate() {
      if (cursorRef.current) {
        cursorRef.current.style.left = pos.current.x + "px";
        cursorRef.current.style.top = pos.current.y + "px";
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{ position: "fixed", width: 10, height: 10, background: "#a855f7", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, transform: "translate(-50%,-50%)", mixBlendMode: "difference", transition: "transform 0.1s" }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: "fixed", pointerEvents: "none", zIndex: 9998, transform: "translate(-50%,-50%)" }} />
    </>
  );
}

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-300 ease-out"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--cursor-glow-color, oklch(1 0 0 / 0.06)), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
}

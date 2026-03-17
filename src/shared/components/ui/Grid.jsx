"use client";

import { useRef, useState } from "react";

export default function Grid({ children }) {
  const gridRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;

    lastMouse.current = { x: e.clientX, y: e.clientY };

    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={gridRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      aria-hidden="true"
      className="fixed inset-0 grid-bg z-30"
      style={{ backgroundPosition: `${position.x}px ${position.y}px` }}
    >
      {children}
    </div>
  );
}

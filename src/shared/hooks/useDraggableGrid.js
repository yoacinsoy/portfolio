import { useRef, useState } from "react";

/**
 * Returns event handlers and a CSS background-position offset for a
 * mouse-draggable infinite grid effect.
 *
 * @returns {{
 *   position: { x: number; y: number };
 *   onMouseDown: (e: React.MouseEvent) => void;
 *   onMouseMove: (e: React.MouseEvent) => void;
 *   onMouseUp: () => void;
 * }}
 */
export function useDraggableGrid() {
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

    setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return { position, onMouseDown, onMouseMove, onMouseUp };
}

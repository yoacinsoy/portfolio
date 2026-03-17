"use client";

import { useRef } from "react";
import { useDraggableGrid } from "@/shared/hooks/useDraggableGrid";

export default function Grid({ children }) {
  const gridRef = useRef(null);
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggableGrid();

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

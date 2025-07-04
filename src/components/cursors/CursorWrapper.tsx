import { useCursor } from "@/hooks/useCursor";
import React from "react";

type CursorWrapperProps = {
  children: React.ReactNode;
  cursorComponent: React.ReactNode;
};

export default function CursorWrapper({
  children,
  cursorComponent,
}: CursorWrapperProps) {
  const { setCursorComponent } = useCursor();

  const handleMouseEnter = () => setCursorComponent(cursorComponent);
  const handleMouseLeave = () => setCursorComponent(null);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

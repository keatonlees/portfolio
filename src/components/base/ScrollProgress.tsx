import { motion, MotionValue } from "motion/react";
import React from "react";

export default function ScrollProgress({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <motion.div
      className="w-screen h-1 fixed bg-secondary bottom-0 z-10 origin-left"
      style={{ scaleX: progress }}
    />
  );
}

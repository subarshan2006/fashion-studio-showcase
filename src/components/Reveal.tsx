import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom";

const variants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } },
  zoom:  { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}

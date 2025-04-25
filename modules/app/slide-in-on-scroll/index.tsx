"use client";
import { cn } from "@/modules/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function SlideInOnScroll({
  children,
  delay = 0,
  x = 0,
  y = 50,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Ensure animation starts only after mounting
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls, hasMounted]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={hasMounted ? controls : undefined} // Only animate after mounting
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay },
        },
      }}
      className={cn("overflow-hidden z-50", className)}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { ReactNode } from "react";

const slideInVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export function TitleAnim({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
      className="w-full text-center flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

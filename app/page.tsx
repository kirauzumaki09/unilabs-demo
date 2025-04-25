"use client";

import { HomePage } from "@/modules/components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen pb-20 gap-16 mt-14 font-[family-name:var(--font-inter)]">
      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          type: "spring",
          duration: 3,
          bounce: 0.5,
        }}
        className="relative w-full min-h-screen mx-auto flex flex-col pb-8"
      >
        <HomePage />
      </motion.div>
    </div>
  );
}

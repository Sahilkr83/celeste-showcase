"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTransitionLoader } from "@/context/transition-context";

export default function PageTransition() {
  const pathname = useLocation();

  const {
    isRedirecting,
    stopRedirect,
  } = useTransitionLoader();

  useEffect(() => {
    stopRedirect();
  }, [pathname]);

  return (
    <AnimatePresence>
      {isRedirecting && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 35 }}
          exit={{
            scale: 45,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="fixed bottom-0 left-0 z-[2147483647] h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-600 pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { REDIRECT_FLAG_KEY, useTransitionLoader } from "@/context/transition-context";

type IntroTransitionProps = {
  durationMs?: number;
  className?: string;
  isRedirect?: boolean;
};

export function IntroTransition({
  durationMs = 1000,
  className,
  isRedirect,
}: IntroTransitionProps) {
  const { isRedirecting, stopRedirect } = useTransitionLoader();
  const [showIntroTransition, setShowIntroTransition] = useState(false);
  const durationSec = Math.max(durationMs, 0) / 1000;
  useEffect(() => {
    if (isRedirecting) {
      setShowIntroTransition(true);
    }
  }, [isRedirecting]);

  if (!isRedirect) {
    return null;
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {showIntroTransition && (
          <motion.div
            initial={{
              scale: 35,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: durationSec,
              ease: [0.83, 0, 0.17, 1],
            }}
            className={`fixed top-0 right-0 z-[2147483647] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 pointer-events-none${className ? ` ${className}` : ""}`}
            onAnimationComplete={() => {
              setShowIntroTransition(false);
              stopRedirect();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

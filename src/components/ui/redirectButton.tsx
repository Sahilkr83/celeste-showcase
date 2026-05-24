"use client";

import { useTransitionLoader } from "@/context/transition-context";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
type RedirectButtonProps = {
  label: string;
  to: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  delayMs?: number;
};

const defaultButtonClassName =
  "group flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]";

export default function RedirectButton({
  label,
  to,
  icon,
  children,
  className,
  delayMs = 900,
}: RedirectButtonProps) {
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { startRedirect } = useTransitionLoader();
  const navigate = useNavigate();
  const redirectTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      if (redirectTimeoutRef.current !== null) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const handleRedirect = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    startRedirect();

    redirectTimeoutRef.current = window.setTimeout(() => {
      navigate({ to });
    }, delayMs);
  };

  return (
    <>
      <button
        onClick={handleRedirect}
        className={className ? ` ${className}` : defaultButtonClassName}
      >
        {label}
        {icon}
        {children}
      </button>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 35 }}
                exit={{ scale: 40, opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
                className="fixed bottom-0 left-0 z-[2147483647] h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-600 pointer-events-none"
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

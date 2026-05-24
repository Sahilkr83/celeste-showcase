"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export const REDIRECT_FLAG_KEY = "intro-redirecting";

type TransitionContextType = {
  isRedirecting: boolean;
  startRedirect: () => void;
  stopRedirect: () => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.sessionStorage.getItem(REDIRECT_FLAG_KEY);
    if (stored === "1") {
      setIsRedirecting(true);
    }
  }, []);

  const startRedirect = () => {
    setIsRedirecting(true);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(REDIRECT_FLAG_KEY, "1");
    }
  };

  const stopRedirect = () => {
    setIsRedirecting(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(REDIRECT_FLAG_KEY);
    }
  };

  return (
    <TransitionContext.Provider
      value={{
        isRedirecting,
        startRedirect,
        stopRedirect,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionLoader() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useTransitionLoader must be used inside TransitionProvider");
  }

  return context;
}

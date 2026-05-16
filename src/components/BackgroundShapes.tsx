import { motion } from "framer-motion";

export function BackgroundShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-fuchsia-300/30 blur-[120px] dark:bg-fuchsia-500/20"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-cyan-300/30 blur-[120px] dark:bg-cyan-500/15"
        animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,var(--background)_100%)]" />
    </div>
  );
}

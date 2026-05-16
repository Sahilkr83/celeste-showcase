import { motion } from "framer-motion";

export function StatsCard({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition"
    >
      <div className="text-5xl font-semibold tracking-tight text-foreground">
        {value}
      </div>
      <div className="mt-3 text-sm font-medium text-foreground">{label}</div>
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </motion.div>
  );
}

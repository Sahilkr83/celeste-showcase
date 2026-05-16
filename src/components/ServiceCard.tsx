import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      {features && (
        <ul className="mt-6 space-y-2 border-t border-border pt-4">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — AK Studio" },
      { name: "description", content: "A clear four-step process from discovery to launch — built to ship great work on time." },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", title: "Discover", desc: "Workshops and audits to align on goals, audience and constraints." },
  { n: "02", title: "Define", desc: "Strategy, sitemap and creative direction — the blueprint for the work." },
  { n: "03", title: "Design", desc: "From low-fi to pixel-perfect, with weekly check-ins and async reviews." },
  { n: "04", title: "Deliver", desc: "Engineering, QA and launch — plus 30 days of post-launch support." },
];

function Process() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Process" title="A simple, transparent way to work." subtitle="Most engagements run 4–10 weeks depending on scope." />
      <div className="mt-20 space-y-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="grid items-center gap-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-[auto_1fr_auto] shadow-sm hover:shadow-md transition"
          >
            <div className="text-5xl font-semibold text-primary tabular-nums">{s.n}</div>
            <div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted-foreground">{s.desc}</p>
            </div>
            <span className="hidden sm:inline text-sm text-muted-foreground">Week {i + 1}+</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

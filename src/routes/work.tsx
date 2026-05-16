import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — AK Studio" },
      { name: "description", content: "Selected case studies in brand identity, product design, and web engineering." },
    ],
  }),
  component: Work,
});

const projects = [
  { name: "Lumen", tag: "Brand & Web", year: "2025", color: "from-blue-100 to-blue-300" },
  { name: "Northwave", tag: "Product Design", year: "2025", color: "from-zinc-200 to-zinc-400" },
  { name: "Orbit OS", tag: "SaaS Platform", year: "2024", color: "from-indigo-100 to-indigo-300" },
  { name: "Maison Clay", tag: "E-commerce", year: "2024", color: "from-amber-100 to-orange-200" },
  { name: "Pulse Health", tag: "Mobile App", year: "2024", color: "from-emerald-100 to-teal-200" },
  { name: "Atlas Studio", tag: "Brand Identity", year: "2023", color: "from-rose-100 to-pink-200" },
];

function Work() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Selected work" title="A look at recent projects." subtitle="Long-form case studies coming soon." />
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            href="#"
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group block"
          >
            <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${p.color} shadow-sm group-hover:shadow-xl transition`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-semibold text-foreground/30 group-hover:scale-110 transition-transform">
                  {p.name}
                </span>
              </div>
              <div className="absolute top-5 right-5 rounded-full bg-background/90 p-3 backdrop-blur opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.tag}</p>
              </div>
              <span className="text-sm text-muted-foreground">{p.year}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Calendar, Twitter, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AK Studio" },
      { name: "description", content: "Start a project, book a discovery call, or just say hi." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Contact" title="Let's build something memorable." subtitle="Tell me a little about your project — I'll reply within 24 hours." />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects · Q2 2026
          </div>

          {[
            { Icon: Mail, label: "Email", value: "hello@ak.studio" },
            { Icon: MapPin, label: "Based in", value: "Lisbon · Remote worldwide" },
            { Icon: Calendar, label: "Response time", value: "Within 24 hours" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex gap-4 rounded-2xl glass gradient-border p-5 hover-glow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl glass p-5">
            <div className="text-xs text-muted-foreground mb-3">Find me on</div>
            <div className="flex gap-2">
              {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 hover:bg-foreground hover:text-background transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative overflow-hidden rounded-3xl gradient-border glass p-8 space-y-5 hover-glow"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" placeholder="Jane Doe" required />
              <Field label="Email" type="email" placeholder="jane@company.com" required />
            </div>
            <Field label="Company" placeholder="Acme Inc." />
            <div>
              <label className="text-xs font-medium text-muted-foreground">Project details</label>
              <textarea
                rows={5}
                placeholder="What are you building? What's the timeline?"
                className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">No spam — ever.</p>
              <Button variant="primary" arrow type="submit">{sent ? "Message sent ✓" : "Send message"}</Button>
            </div>
          </div>
        </motion.form>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mt-24 overflow-hidden rounded-3xl bg-foreground text-background p-12 md:p-16"
      >
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Prefer a call instead?</h3>
            <p className="mt-2 text-background/70">Book a 20-minute discovery call — free, no pressure.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:scale-[1.02] transition">
            Book a call <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}

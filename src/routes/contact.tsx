import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Calendar } from "lucide-react";
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
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Contact" title="Let's build something memorable." subtitle="Tell me a little about your project — I'll reply within 24 hours." />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {[
            { Icon: Mail, label: "Email", value: "hello@ak.studio" },
            { Icon: MapPin, label: "Based in", value: "Lisbon · Remote worldwide" },
            { Icon: Calendar, label: "Availability", value: "Booking from Q2 2026" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks — I'll be in touch shortly."); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" placeholder="Jane Doe" />
            <Field label="Email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Company" placeholder="Acme Inc." />
          <div>
            <label className="text-xs font-medium text-muted-foreground">Project details</label>
            <textarea
              rows={5}
              placeholder="What are you building? What's the timeline?"
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
            />
          </div>
          <Button variant="secondary" arrow type="submit">Send message</Button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
      />
    </div>
  );
}

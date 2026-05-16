import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { StatsCard } from "@/components/StatsCard";
import { LinkButton } from "@/components/Button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AK Studio" },
      { name: "description", content: "Multidisciplinary designer with 9 years of crafting premium digital products and brand systems." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="About"
        title="Designer, engineer, perfectionist."
        subtitle="I help founders and creative teams transform ambitious ideas into products and brands the world wants to use."
      />

      <div className="mt-20 grid gap-12 lg:grid-cols-2 items-start">
        <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-muted shadow-xl" />
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            For nearly a decade I've partnered with startups, agencies, and Fortune 500
            brands to design and ship work that wins awards and, more importantly,
            moves the needle for the business.
          </p>
          <p>
            My practice sits at the intersection of brand, product and engineering —
            allowing me to ship cohesive end-to-end experiences without the
            traditional hand-off friction.
          </p>
          <p>
            When I'm not designing, you'll find me writing about craft, mentoring
            junior designers, or running long distances along the coast.
          </p>
          <div className="pt-4">
            <LinkButton to="/contact" variant="secondary" arrow>Get in touch</LinkButton>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard value="2017" label="Founded studio" />
        <StatsCard value="120+" label="Happy clients" />
        <StatsCard value="14" label="Design awards" />
        <StatsCard value="4.9★" label="Average rating" />
      </div>
    </div>
  );
}

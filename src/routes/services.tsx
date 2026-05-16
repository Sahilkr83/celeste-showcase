import { createFileRoute } from "@tanstack/react-router";
import { PenTool, Layers, Code2, Sparkles, Smartphone, LineChart } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AK Studio" },
      { name: "description", content: "Brand identity, product design, web engineering and creative direction services." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Services" title="Everything your brand needs to ship beautifully." subtitle="Pick and mix — or hire me end-to-end." />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard icon={PenTool} title="Brand Identity" description="Logos, visual systems, and guidelines that make your brand unmistakable." features={["Logo & wordmark", "Color & type system", "Brand guidelines"]} />
        <ServiceCard icon={Layers} title="Product Design" description="UX research, wireframes, and pixel-perfect UI for digital products." features={["UX strategy", "UI design", "Design systems"]} />
        <ServiceCard icon={Code2} title="Web Development" description="High-performance React frontends with motion and accessibility built-in." features={["React / Next.js", "Tailwind CSS", "Motion design"]} />
        <ServiceCard icon={Smartphone} title="Mobile Apps" description="Native-feeling iOS and Android apps your users will love opening." features={["iOS & Android", "Prototyping", "App store launch"]} />
        <ServiceCard icon={Sparkles} title="Creative Direction" description="High-touch art direction for campaigns, launches and brand moments." features={["Campaigns", "Launch assets", "Photo / video art"]} />
        <ServiceCard icon={LineChart} title="Strategy & Audit" description="Conversion and brand audits with a concrete roadmap to ship." features={["Brand audit", "UX audit", "Roadmap"]} />
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/30">
                AK
              </div>
              <span className="font-semibold tracking-tight">Aman Kapoor — Creative Studio</span>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Designing premium digital experiences for ambitious brands.
              Built with craft, shipped with care.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-12 transition" />
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Pages</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link to="/work" className="hover:text-foreground transition">Work</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition">Services</Link></li>
              <li><Link to="/process" className="hover:text-foreground transition">Process</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">More</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/testimonials" className="hover:text-foreground transition">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
              <li><a href="#" className="hover:text-foreground transition">Showreel</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-2">
              {[Twitter, Instagram, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full border border-border bg-background/60 p-2.5 hover:bg-foreground hover:text-background transition hover-glow">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">hello@ak.studio</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AK Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </p>
        </div>
      </div>
    </footer>
  );
}

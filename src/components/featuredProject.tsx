type FeaturedProjectsSectionProps = {
  variant?: "default" | "hero";
};
export function FeaturedProjectsSection({ variant = "default" }: FeaturedProjectsSectionProps) {
  const isHero = variant === "hero";
  const projects = [
    {
      category: "Travel Vlog",
      title: "Explore The World",
      desc: "Cinematic travel edit with storytelling and rich color grading.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Fitness",
      title: "Push Your Limits",
      desc: "High-energy fitness video with smooth cinematic cuts.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Product",
      title: "Brand Commercial",
      desc: "Premium product commercial edit with cinematic visuals.",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Event",
      title: "Event Highlight",
      desc: "Fast-paced event recap designed for maximum engagement.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className={`w-full px-6 md:px-10 py-10  overflow-hidden ${!isHero && "py-20"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
{isHero && (
  <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
    Featured Projects
  </span>
)}

            <div className="flex min-w-7xl justify-between items-center mt-6">
              {" "}
              {isHero ? 
              (
              <h2 className=" text-4xl md:text-6xl font-black text-slate-600 dark:text-slate-300 leading-[1]">
                Work That
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Speaks For Itself
                </span>
              </h2>):
              (<h2 className="font-bold text-3xl">Recent Edits</h2>)}
              <button className="h-14 px-8 rounded-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
                View All Projects
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-sm overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="ml-1 w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-white" />
                  </div>
                </button>

                <span className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium tracking-wide">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-600 dark:text-slate-300">{project.title}</h3>

                <p className="mt-3 text-slate-500 leading-relaxed">{project.desc}</p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>01:30</span>
                    <span>•</span>
                    <span>2025</span>
                  </div>

                  <button className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-lg font-bold">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "120+", label: "Design Projects" },
            { number: "150+", label: "Videos Edited" },
            { number: "4+", label: "Years Experience" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[28px] bg-white border border-slate-200 p-8 text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/20">
                ✦
              </div>

              <h3 className="mt-6 text-4xl font-black text-slate-600 dark:text-slate-300">{item.number}</h3>

              <p className="mt-2 text-slate-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

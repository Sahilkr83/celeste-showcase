import { ArrowUpRight } from "lucide-react";

export function GraphicProjectsGrid() {
  const categories = [
    "All Projects",
    "Branding",
    "Print Design",
    "Social Media",
    "Packaging",
    "Advertising",
    "Editorial",
  ];

  const projects = [
    {
      title: "Nova Brand Identity",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Natura Packaging",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing Flyer",
      category: "Print Design",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Fashion Social Post",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Architecture Brochure",
      category: "Editorial",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Hygge Product Label",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full px-6 md:px-10 py-16 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((item, i) => (
              <button
                key={i}
                className={`h-11 px-5 rounded-sm text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select className="h-11 px-4 rounded-sm border border-slate-200 bg-white text-sm text-slate-600 outline-none">
            <option>Latest</option>
            <option>Popular</option>
            <option>Trending</option>
          </select>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-[1.5rem] overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {project.category}
                    </p>
                  </div>

                  <button className="w-11 h-11 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
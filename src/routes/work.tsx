import { createFileRoute, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bookmark, CalendarDays, Grid2X2, Layers3, List, PenTool, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { is } from "date-fns/locale";
import { Hero, VideoShowcase } from ".";
import { FeaturedProjectsSection } from "@/components/featuredProject";
import { MyProcessSection } from "@/components/myProcessSection";
import { GraphicProjectsGrid } from "@/components/graphicProjectsGrid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button, LinkButton } from "@/components/Button";
import HeroImg from "@/assets/heroOfHome.png";
import HeroImg2 from "@/assets/Hero2.png";
import { Image, Type, Clapperboard } from "lucide-react";
export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — AK Studio" },
      {
        name: "description",
        content: "Selected case studies in branding, motion, video and product.",
      },
    ],
  }),
  component: Work,
});


function Work() {
  const location = useLocation();

  const pathname = location.pathname;

  const isWork = pathname.includes("/work");
  const isVideoEditing = pathname.includes("/work/video-editing");
  const isGraphicDesign = pathname.includes("/work/graphic-design");
  const showWorkPage = isWork && !isVideoEditing && !isGraphicDesign;
  const isHero = "hero";
  const items = [
    {
      icon: Play,
      className: "top-10 left-20",
      iconColor: "text-slate-500",
    },
    {
      icon: PenTool,
      className: "top-0 left-1/2 -translate-x-1/2",
      iconColor: "text-blue-600",
      active: true,
    },
    {
      icon: Image,
      className: "top-12 right-20",
      iconColor: "text-slate-500",
    },
    {
      icon: Type,
      className: "bottom-10 left-1/3",
      iconColor: "text-slate-500",
    },
    {
      icon: Clapperboard,
      className: "bottom-8 right-1/3",
      iconColor: "text-slate-500",
    },
  ];
  const categories = [
    "All Projects",
    "Graphic Design",
    "Video Editing",
    "Branding",
    "Print Design",
    "Social Media",
    "Packaging",

  ];
  const projects = [
    {
      title: "Nova Brand Identity",
      category: "Branding",
      desc: "Complete brand identity design for a tech startup.",
      date: "May 2024",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Natura Packaging Design",
      category: "Packaging",
      desc: "Packaging design for organic skincare product line.",
      date: "Apr 2024",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing Flyer",
      category: "Print Design",
      desc: "Modern flyer design for a digital marketing agency.",
      date: "Apr 2024",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cinematic Travel Edit",
      category: "Video Editing",
      desc: "Cinematic travel video edit with smooth transitions.",
      date: "Mar 2024",
      video: true,
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Architecture Brochure",
      category: "Editorial",
      desc: "Clean and minimal brochure design for architecture firm.",
      date: "Mar 2024",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Summer Sale Post",
      category: "Social Media",
      desc: "Eye-catching social media post design for fashion brand.",
      date: "Feb 2024",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Hygge Product Label",
      category: "Packaging",
      desc: "Minimal product label design for home fragrance brand.",
      date: "Feb 2024",
      image:
        "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Music Video Edit",
      category: "Video Editing",
      desc: "High-energy music video edit with dynamic cuts.",
      date: "Jan 2024",
      video: true,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Adventure Documentary",
      category: "Video Editing",
      desc: "Documentary edit with storytelling and cinematic tone.",
      date: "Jan 2024",
      video: true,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="">
      {isVideoEditing && <VideoShowcase variant="default" />}
      {isVideoEditing && <FeaturedProjectsSection variant="default" />}
      {isVideoEditing && <MyProcessSection variant="default" />}
      {isVideoEditing && (
        <section className="w-full px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#020817] via-[#031633] to-[#020817] px-6 md:px-10 py-7 shadow-2xl">
              {/* Glow Effects */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7"
                    >
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>

                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">Have a video project in mind?</h3>

                    <p className="mt-1 text-white/60 text-base">
                      Let’s create something amazing together.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    Let&apos;s Work Together
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {isGraphicDesign && <Hero variant="default" />}
      {isGraphicDesign && <GraphicProjectsGrid />}
      {isGraphicDesign && (
        <section className="w-full px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#020817] via-[#031633] to-[#020817] px-6 md:px-10 py-7 shadow-2xl">
              {/* Glow Effects */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7"
                    >
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>

                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">Have a project in mind?</h3>

                    <p className="mt-1 text-white/60 text-base">
                      Let’s create something amazing together.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    Let&apos;s Work Together
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {showWorkPage && (
        <section className="relative overflow-hidden w-full">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="mx-auto flex flex-col items-center w-full px-6 pt-10 ">
            <div className="flex items-center justify-center w-full  pb-20">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`${isHero ? "max-w-md" : "max-w-lg"} flex flex-col items-start h-full`}
              >
                <Breadcrumb className="mb-20">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="text-black transition-colors">
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="text-black" />

                    <BreadcrumbItem>
                      <BreadcrumbPage className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                        Work
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    All Projects
                  </span>

                  <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground leading-[1.3]">
                    Work That Speaks
                    <br />
                    <span className="text-primary">cerativity </span>and impact
                  </h1>

                  <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Explore a collection of projects where desgin meets <br />
                    purpose, Each piece is crafted with attention to detail and a focus on results
                  </p>
                </div>
              </motion.div>

              {/* RIGHT — workspace mockup */}
              <section className="relative w-2xl h-[300px] overflow-hidden bg-gradient-to-br from-white to-[#F8FAFF] mt-19">
                {/* Background Blur Shape */}
                <div className="absolute left-1/2 top-1/2 w-[500px] h-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />

                {/* Floating Icons */}
                <div className="relative w-full h-full max-w-4xl ">
                  {items.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <div key={i} className={`absolute ${item.className}`}>
                        <div
                          className={`group w-20 h-20 rounded-3xl border border-white bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                            item.active ? "scale-110 shadow-blue-500/10" : ""
                          }`}
                        >
                          <Icon
                            className={`w-9 h-9 ${item.iconColor} ${
                              item.active ? "stroke-[2.5]" : ""
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
      {showWorkPage && (
        <section className="w-full px-6 md:px-10 py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Filters */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((item, i) => (
              <button
                key={i}
                className={`h-11 px-5 rounded-md text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-500 hover:bg-white hover:text-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <select className="h-11 px-4 rounded-md border border-slate-200 bg-white text-sm text-slate-600 outline-none shadow-sm">
              <option>Latest First</option>
              <option>Popular</option>
              <option>Trending</option>
            </select>

            <button className="w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center shadow-sm text-blue-600">
              <Grid2X2 className="w-5 h-5" />
            </button>

            <button className="w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center shadow-sm text-slate-400">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-[1.5rem] overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/2.8] bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {project.video && (
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Category */}
                <span className="text-xs font-semibold text-blue-600">
                  {project.category}
                </span>

                {/* Top */}
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <button className="shrink-0 text-slate-400 hover:text-blue-600 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CalendarDays className="w-4 h-4" />
                    {project.date}
                  </div>

                  <button className="group/link flex items-center gap-2 text-sm font-semibold text-blue-600">
                    View Project

                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((page, i) => (
            <button
              key={i}
              className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                page === 1
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600 transition-all">
            →
          </button>
        </div>
      </div>
    </section>
      )}
    </div>
  );
}

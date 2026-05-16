import BulbSvg from "./ui/bulb-svg";
import FilterIcon from "./ui/filter-icon";
import PenIcon from "./ui/pen-icon";
import SparklesIcon from "./ui/sparkles-icon";
import TruckElectricIcon from "./ui/truck-electric-icon";

export function MyProcessSection() {
  const process = [
    {
      number: '01',
      title: 'Understand',
      desc: 'I listen to your ideas and understand your goals.',
      icon: <BulbSvg />,
    },
    {
      number: '02',
      title: 'Plan & Concept',
      desc: 'I plan the strategy and concept for your project.',
      icon: <PenIcon />,
    },
    {
      number: '03',
      title: 'Design & Edit',
      desc: 'I design or edit with creativity and attention to detail.',
      icon: <SparklesIcon />,
    },
    {
      number: '04',
      title: 'Review & Refine',
      desc: 'We review, refine, and perfect every detail.',
      icon: <FilterIcon/>,
    },
    {
      number: '05',
      title: 'Deliver',
      desc: 'Final output delivered on time, every time.',
      icon: <TruckElectricIcon />,
    },
  ];

  return (
    <section className="w-full px-6 md:px-10 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">
          My Process
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          A Simple Process,
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {' '}Powerful Results
          </span>
        </h2>

        <div className="mt-20 relative">
          <div className="hidden xl:block absolute top-10 left-0 w-full border-t border-dashed border-blue-200" />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-12 xl:gap-6">
            {process.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex items-center justify-center text-3xl text-blue-600">
                  {item.icon}
                </div>

                <span className="mt-5 text-sm font-bold text-blue-600 tracking-wide">
                  {item.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500 leading-relaxed text-sm max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

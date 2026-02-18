import React from "react";
import { VISION_MILESTONES } from "../constants";

const Vision: React.FC = () => {
  return (
    <div className="bg-brand-darkest">
      {/* Header */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 animate-fade-up">
          <h4 className="text-brand-gold font-black tracking-[0.8em] uppercase text-[11px] mb-8">
            2025 – 2035 Roadmap
          </h4>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
            STRATEGIC VISION.
          </h1>
          <p className="text-2xl lg:text-2xl text-gray-400 font-light leading-tight max-w-4xl tracking-tight">
            Building Skilled Minds. Shaping{" "}
            <span className="text-white italic font-bold">
              Responsible Industries
            </span>
            .
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-brand-darkest relative border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none industrial-grid"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block"></div>

          <div className="space-y-32">
            {VISION_MILESTONES.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0 group`}
                >
                  {/* Card Section */}
                  <div
                    className={`w-full md:w-[42%] ${isEven ? "md:order-1" : "md:order-3"}`}
                  >
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:shadow-brand-gold/5 transition-all duration-700">
                      <div className="flex justify-between items-center mb-8">
                        <span className="text-4xl font-display font-black text-brand-gold tracking-tighter transition-transform group-hover:scale-110">
                          {m.year}
                        </span>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${m.status === "Completed" ? "bg-green-400" : "bg-brand-gold animate-pulse"}`}
                          ></div>
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
                            {m.status}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Node indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-brand-darkest border border-white/20 flex items-center justify-center z-10 rounded-full transition-all duration-700 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:scale-125 hidden md:flex">
                    <span className="text-[10px] font-black text-white group-hover:text-brand-darkest transition-colors">
                      {m.year.slice(-2)}
                    </span>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`w-full md:w-[42%] ${isEven ? "md:order-3" : "md:order-1"}`}
                  >
                    <div className="hover-image-container relative border border-white/5 h-[280px]">
                      <img
                        src={
                          m.imageUrl ||
                          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
                        }
                        alt={m.title}
                        className="hover-image w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Centers */}
      <section className="py-24 bg-brand-darkest px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-white uppercase tracking-tighter leading-none">
              CENTRES OF <br />
              INDUSTRIAL <br />
              <span className="text-brand-gold">EXCELLENCE</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Establishing SHIVA Academy as the model polytechnic and creating
              Skill Innovation Parks focusing on robotics, automation, and
              sustainable manufacturing.
            </p>
            <div className="space-y-4">
              {[
                "Global Linkages & Certification",
                "Industry-integrated Apprenticeships",
                "Digital Twin Learning Framework",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center group cursor-default"
                >
                  <div className="w-2 h-2 bg-brand-gold rounded-full transition-transform group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(212,144,10,0.8)]"></div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-brand-gold/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 rounded-[3rem]"></div>
            <div className="glass-card p-12 rounded-[3rem] border border-white/10 relative">
              <h4 className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-6">
                Objective 2035
              </h4>
              <p className="text-white text-3xl font-display font-bold leading-tight group-hover:text-brand-gold transition-colors duration-500">
                "Skill Innovation Parks focusing on robotics, renewable energy,
                and sustainable manufacturing."
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Target Metrices
                </span>
                <span className="text-brand-gold font-display font-black">
                  98.4% Efficiency
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;

import React from "react";
import { PROGRAMS_LIST } from "../constants";

const Programs: React.FC = () => {
  return (
    <div className="bg-brand-darkest">
      {/* Hero Header */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 animate-fade-up">
          <h4 className="text-brand-gold font-black tracking-[0.8em] uppercase text-[11px] mb-8">
            Specialized Tracks
          </h4>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
            PROGRAMS.
          </h1>
          <p className="text-2xl lg:text-2xl text-gray-400 font-light leading-tight max-w-5xl tracking-tight">
            High-precision specialized tracks for the{" "}
            <span className="text-white italic font-bold">
              Next-Generation Industrial Workforce
            </span>
            .
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-24 px-6 border-t border-white/5 bg-brand-darkest relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none industrial-grid"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {PROGRAMS_LIST.map((prog) => (
            <div
              key={prog.id}
              className="glass-card rounded-[2.5rem] group transition-all duration-700 p-12 flex flex-col min-h-[500px] hover:shadow-brand-gold/10"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-brand-gold/10 transition-colors">
                    {prog.category}
                  </span>
                </div>
                <h3 className="text-3xl font-display font-extrabold text-white mb-6 group-hover:text-brand-gold transition-colors leading-tight uppercase tracking-tighter">
                  {prog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-10 group-hover:text-gray-300 transition-colors">
                  {prog.description}
                </p>
                <ul className="space-y-5 mb-auto">
                  {prog.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-all"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full transition-transform group-hover:scale-150"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-12 btn-pill w-full py-5 bg-white/5 border border-white/10 text-white font-display text-[11px] font-black tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-brand-darkest transition-all">
                  VIEW MODULE DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Context Section */}
      <section className="py-32 bg-brand-darkest px-6 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="hover-image-container shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200"
                alt="Training Cadets"
                className="hover-image w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem]"></div>
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="text-[10px] font-black tracking-[0.8em] text-gray-500 uppercase">
              Training Infrastructure
            </h4>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1] uppercase tracking-tighter">
              BRIDGING <br />
              THE <span className="text-brand-gold">SKILLS</span> <br />
              GAP.
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg">
              Our direct-entry pipelines connect our skilled cadets with
              high-security manufacturing corridors across Bharat.
            </p>
            <div className="flex gap-6 pt-4">
              <button className="btn-pill px-10 py-4 bg-brand-gold text-brand-darkest font-display text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">
                GET ENROLLED
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

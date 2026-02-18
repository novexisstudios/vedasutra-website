import React from "react";
import { Link } from "react-router-dom";
import ThreeCog from "../components/ThreeCog";
import { CORE_OBJECTIVES } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="bg-brand-darkest pt-[105px]">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[95vh] flex items-center industrial-grid overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkest via-brand-darkest/90 to-brand-darkest z-0"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-0">
          <div className="space-y-10 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping"></div>
                <span className="text-[9px] font-black tracking-[0.4em] text-brand-gold uppercase">
                  Empowering Skill. Advancing Technology. Upholding Ethics.
                </span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-display font-extrabold text-white leading-[0.9] tracking-tighter uppercase">
                BUILDING <br />
                <span className="text-white/80 text-4xl lg:text-6xl block mt-2">
                  SKILLED MINDS
                </span>
                <span className="text-brand-gold">SHAPING INDUSTRY</span>
              </h1>
              <p className="text-base lg:text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                A generation of technically skilled, ethically driven, and
                industry-ready professionals redefined by vocational excellence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/programs"
                className="btn-pill px-10 py-4 bg-brand-gold text-brand-darkest font-display text-[11px] font-bold tracking-[0.2em] uppercase"
              >
                EXPLORE PROGRAMS
              </Link>
              <Link
                to="/vision"
                className="btn-pill px-10 py-4 border border-white/20 text-white font-display text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/10"
              >
                STRATEGIC VISION
              </Link>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="text-white font-display text-sm italic opacity-60 uppercase tracking-widest">
                “कौशलम् एव संस्कारः” — Skill is the true culture.
              </span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full animate-glow-pulse"></div>
            <div className="relative z-10 h-[600px]">
              <ThreeCog />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Core Objectives Grid */}
      <section className="py-24 bg-brand-darkest px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col mb-16 text-center items-center">
            <h4 className="text-[9px] font-black tracking-[0.8em] text-gray-600 uppercase mb-4">
              Core Objectives
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-6">
              MISSION ARCHITECTURE
            </h2>
            <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_OBJECTIVES.map((obj, i) => (
              <div
                key={i}
                className="glass-card p-12 rounded-[3.5rem] group cursor-default text-center"
              >
                <div className="mb-10 flex justify-center transform group-hover:scale-110 transition-all duration-700">
                  <div className="p-8 bg-brand-navy/50 border border-white/5 rounded-3xl group-hover:border-brand-gold/30 shadow-2xl transition-all">
                    {obj.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-5 uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                  {obj.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Teaser Section */}
      <section className="py-20 bg-brand-darkest px-6">
        <div className="bg-brand-offwhite rounded-[4rem] overflow-hidden py-32 relative shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none industrial-grid"></div>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7 space-y-10">
              <h4 className="text-[10px] font-black tracking-[0.8em] text-brand-grey uppercase">
                Our Philosophy
              </h4>
              <h2 className="text-5xl md:text-7xl font-display font-black text-brand-darkest leading-[1] uppercase tracking-tighter">
                SKILL IS THE <br />
                <span className="text-brand-gold">FOUNDATION</span> <br />
                OF PROGRESS
              </h2>
              <p className="text-brand-grey text-xl font-light leading-relaxed max-w-xl">
                VEDASUTRA Foundation stands for a modern educational culture
                rooted in industrial discipline, research, and applied
                technology.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-4 group"
              >
                <span className="text-[10px] font-black tracking-widest text-brand-darkest uppercase border-b border-brand-darkest/20 pb-1 group-hover:border-brand-gold transition-all">
                  Discover Our Culture
                </span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="hover-image-container relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                  alt="Industrial Integrity"
                  className="hover-image relative w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decadal Mission Section */}
      <section className="py-32 bg-brand-darkest px-6 relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 border border-white/5 rounded-[4rem] group-hover:border-brand-gold/20 transition-all duration-700"></div>
            <div className="glass-card p-12 rounded-[3.5rem] space-y-8">
              <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                <span className="text-brand-gold font-black text-xl">10</span>
              </div>
              <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">
                THE DECADAL MISSION
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                By 2035, we aim to bridge the classroom with the workshop, the
                learner with the maker, and knowledge with professionalism.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="group/item">
                  <p className="text-white font-black text-2xl font-display uppercase tracking-tight group-hover/item:text-brand-gold transition-colors">
                    SHIVA
                  </p>
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1">
                    Model Academy
                  </p>
                </div>
                <div className="group/item">
                  <p className="text-white font-black text-2xl font-display uppercase tracking-tight group-hover/item:text-brand-gold transition-colors">
                    GLOBAL
                  </p>
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1">
                    Certification
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.8em] text-gray-600 uppercase">
              Vision 2025–2035
            </h4>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter">
              BUILDING <span className="text-brand-gold">SKILLED</span> MINDS
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Establishing a national ecosystem for vocational and technical
              education that meets evolving industry demands and advances
              India’s industrial wave.
            </p>
            <Link
              to="/vision"
              className="btn-pill inline-block px-10 py-4 bg-white/5 border border-white/10 text-white font-display text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-brand-darkest transition-all"
            >
              VIEW FULL ROADMAP
            </Link>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 bg-brand-darkest px-6 pb-32">
        <div className="bg-brand-navy/40 border border-white/10 rounded-[4rem] py-24 text-center relative overflow-hidden px-8 shadow-inner group">
          <div className="absolute inset-0 bg-brand-gold opacity-[0.03] pointer-events-none industrial-grid scale-125"></div>
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <h4 className="text-[10px] font-black tracking-[0.8em] text-brand-gold uppercase">
              Industry Synergy
            </h4>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[1.1] uppercase tracking-tighter">
              SHAPING RESPONSIBLE INDUSTRIES
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Join VEDASUTRA Foundation in bridging the gap between classroom
              theory and workshop reality.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="btn-pill inline-block px-12 py-5 bg-brand-gold text-brand-darkest font-display text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:brightness-110 transition-all"
              >
                INITIATE COLLABORATION
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

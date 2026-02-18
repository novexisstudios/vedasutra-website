import React from "react";

const Collaboration: React.FC = () => {
  return (
    <div className="bg-brand-darkest">
      {/* Hero Header */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 animate-fade-up">
          <h4 className="text-brand-gold font-black tracking-[0.8em] uppercase text-[11px] mb-8">
            Strategic Partnerships
          </h4>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
            COLLABORATION.
          </h1>
          <p className="text-2xl lg:text-2xl text-gray-400 font-light leading-tight max-w-4xl tracking-tight">
            Connecting industry leaders with academic research to achieve{" "}
            <span className="text-white italic font-bold">
              Synchronized Progress
            </span>
            .
          </p>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 px-6 border-t border-white/5 bg-brand-darkest">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <h4 className="text-[10px] font-black tracking-[0.8em] text-gray-600 uppercase">
              Engagement Modes
            </h4>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter">
              SYNERGY MODELS
            </h2>
            <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Research Groups",
                desc: "Collaborating on the future of industrial materials and ethical governance frameworks.",
              },
              {
                title: "Direct Hiring",
                desc: "Priority access to our cadre of specialized precision engineers and technical leads.",
              },
              {
                title: "Strategic Advisory",
                desc: "Translating global tech shifts into institutional policy and curriculum design.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-12 rounded-[3.5rem] group hover:shadow-brand-gold/10 transition-all duration-700 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center rounded-2xl mb-10 group-hover:border-brand-gold/50 group-hover:rotate-[15deg] transition-all duration-500 shadow-xl bg-brand-navy/30">
                  <div className="w-4 h-4 bg-brand-gold/40 group-hover:bg-brand-gold rotate-45 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white mb-6 uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-brand-darkest px-6 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center space-y-24 relative z-10">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[0.8em] text-gray-500 uppercase">
              Onboarding Framework
            </h4>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none">
              PARTNERSHIP <br />
              PROCESS
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {[
              {
                step: "01",
                label: "Alignment",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
              },
              {
                step: "02",
                label: "Mapping",
                img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=600",
              },
              {
                step: "03",
                label: "Execution",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 w-full group relative rounded-[3.5rem] overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl"
              >
                <img
                  src={item.img}
                  className="hover-image absolute inset-0 w-full h-full object-cover opacity-30"
                  alt={item.label}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/40 to-transparent group-hover:via-brand-darkest/20 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-10">
                  <div className="w-20 h-20 bg-brand-navy border border-white/10 flex items-center justify-center text-white text-3xl font-black group-hover:bg-brand-gold group-hover:text-brand-darkest transition-all duration-700 rounded-3xl group-hover:rotate-[10deg] shadow-2xl">
                    {item.step}
                  </div>
                  <span className="text-white font-display font-bold uppercase tracking-[0.4em] text-[12px] text-center group-hover:text-brand-gold transition-colors">
                    {item.label}
                  </span>
                  <div className="h-0.5 w-0 bg-brand-gold group-hover:w-16 transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Link */}
      <section className="py-24 bg-brand-offwhite rounded-[4rem] px-6 mx-6 mb-12 shadow-2xl group overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none industrial-grid group-hover:scale-110 transition-transform duration-[4s]"></div>
        <div className="max-w-[1440px] mx-auto text-center space-y-12 py-12 relative z-10">
          <h4 className="text-[10px] font-black tracking-[1em] text-brand-grey uppercase">
            Official Node
          </h4>
          <a
            href="mailto:synergy@vedasutra.foundation"
            className="text-3xl md:text-6xl font-display font-black text-brand-darkest hover:text-brand-gold transition-all tracking-tighter uppercase break-words block px-4 group-hover:scale-105 duration-700"
          >
            synergy@vedasutra.foundation
          </a>
          <p className="text-brand-grey max-w-xl mx-auto font-light text-xl leading-relaxed">
            Establishing secure channels for institutional and corporate
            governance correspondence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;

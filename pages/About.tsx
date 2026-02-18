import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-brand-darkest">
      {/* Hero Header */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 animate-fade-up">
          <h4 className="text-brand-gold font-black tracking-[0.8em] uppercase text-[11px] mb-8">
            Building Skilled Minds
          </h4>
          <h1 className="text-8xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
            ABOUT US.
          </h1>
          <div className="h-2 w-32 bg-brand-gold rounded-full mb-12"></div>
          <p className="text-2xl lg:text-2xl text-gray-400 font-light leading-tight max-w-5xl tracking-tight">
            VEDASUTRA Foundation represents a modern educational culture rooted
            in{" "}
            <span className="text-white italic font-bold">
              Industrial Discipline
            </span>
            , research, and applied technology.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Philosophy */}
      <section className="py-20 px-6">
        <div className="bg-brand-offwhite rounded-[4.5rem] py-32 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none industrial-grid"></div>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-display font-black text-brand-darkest uppercase tracking-tighter">
                  OUR VISION
                </h2>
                <p className="text-brand-grey text-xl leading-relaxed font-light">
                  To build a generation of technically skilled, ethically
                  driven, and industry-ready professionals by promoting
                  vocational excellence and advancing research-oriented skill
                  development aligned with modern industrial practices.
                </p>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-display font-black text-brand-darkest uppercase tracking-tighter">
                  OUR MISSION
                </h2>
                <ul className="space-y-6">
                  {[
                    "Create a national ecosystem for vocational and technical education meeting industry demands.",
                    "Develop training institutions and industrial partnerships strengthening applied learning.",
                    "Inculcate professional ethics, discipline, and safety culture among learners.",
                    "Foster continuous skill upgradation through technology-driven learning models.",
                    "Promote entrepreneurial and sustainable practices within technical education.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start group">
                      <span className="text-brand-gold font-black text-xl leading-none pt-1 transition-transform group-hover:scale-125">
                        /
                      </span>
                      <p className="text-brand-grey text-lg leading-relaxed font-light group-hover:text-brand-darkest transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-16">
              <div className="p-16 bg-brand-darkest rounded-[4rem] text-white shadow-2xl relative overflow-hidden group hover:shadow-brand-gold/10 transition-shadow duration-700">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-24 h-24 text-brand-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L3 3H10V15C10 18.3137 7.31371 21 4 21H3Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-black text-brand-gold mb-8 uppercase tracking-widest">
                  PHILOSOPHY
                </h3>
                <p className="text-white text-3xl font-display font-light italic leading-snug tracking-tight mb-10 group-hover:text-brand-gold transition-colors duration-500">
                  “Skill is the foundation of progress, and ethics is its
                  strength.”
                </p>
                <p className="text-gray-500 font-light text-lg">
                  VEDASUTRA stands for a workforce that learns with integrity,
                  creativity, and social responsibility.
                </p>
              </div>
              <div className="hover-image-container relative">
                <img
                  src="https://images.unsplash.com/photo-1558444479-c84851218690?auto=format&fit=crop&q=80&w=1200"
                  alt="Institutional Excellence"
                  className="hover-image w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-brand-gold px-6 py-2 rounded-full shadow-xl">
                  <span className="text-brand-darkest font-black text-[10px] uppercase tracking-widest italic">
                    कौशलम् एव संस्कारः
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-brand-darkest px-6">
        <div className="max-w-[1440px] mx-auto text-center mb-24 space-y-4">
          <h4 className="text-[10px] font-black tracking-[0.8em] text-gray-600 uppercase">
            Core Values
          </h4>
          <h2 className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter">
            THE VEDASUTRA CODE
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            {
              t: "Integrity",
              d: "Upholding ethical standards in every skill.",
            },
            { t: "Excellence", d: "Continuous quality and precision." },
            { t: "Discipline", d: "Embodying modern industrial culture." },
            { t: "Innovation", d: "Applying technology to real problems." },
            { t: "Collaboration", d: "Academia-industry ties." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-10 rounded-[3rem] text-center flex flex-col items-center group"
            >
              <div className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-brand-gold group-hover:scale-110 transition-all">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              </div>
              <h3 className="text-lg font-display font-black text-brand-gold mb-4 uppercase tracking-tight">
                {item.t}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

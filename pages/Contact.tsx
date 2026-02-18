
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. We will be in touch shortly.");
  };

  return (
    <div className="bg-brand-darkest pt-40 pb-20 px-6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <div className="space-y-16 animate-fade-up">
            <div className="space-y-8">
              <h4 className="text-brand-gold font-black tracking-[0.8em] uppercase text-[10px]">Get In Touch</h4>
              <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter leading-[0.9] uppercase">CONTACT.</h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md tracking-wide">
                Reach out to us for institutional inquiries, partnership opportunities, or program information.
              </p>
            </div>
            
            <div className="space-y-10">
              {[
                { l: "Headquarters", v: "12th Sector Industrial Corridor", e: "New Delhi, Bharat" },
                { l: "Email Us", v: "info@vedasutra.foundation", e: "Official Correspondence" },
                { l: "Call Us", v: "+91 [011] 2445-XXXX", e: "Business Hours: 9 AM - 6 PM" }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="text-brand-gold font-black uppercase tracking-[0.5em] text-[9px] opacity-40 group-hover:opacity-100">{item.l}</h4>
                  </div>
                  <p className="text-white text-2xl font-display font-extrabold tracking-tight group-hover:translate-x-2 transition-transform">{item.v}</p>
                  <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">{item.e}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] relative group shadow-xl backdrop-blur-2xl">
            <h3 className="text-2xl font-display font-black text-white mb-10 uppercase tracking-tight">SEND A MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 px-4">Name</label>
                  <input type="text" required placeholder="Your Full Name" className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-brand-gold text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 px-4">Organization</label>
                  <input type="text" required placeholder="Company or Institution" className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-brand-gold text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 px-4">Email</label>
                <input type="email" required placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-brand-gold text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 px-4">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-brand-gold text-sm appearance-none cursor-pointer">
                    <option className="bg-brand-darkest">General Inquiry</option>
                    <option className="bg-brand-darkest">Partnerships</option>
                    <option className="bg-brand-darkest">Programs</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 px-4">Message</label>
                <textarea rows={3} required placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-6 px-8 text-white focus:outline-none focus:border-brand-gold text-sm resize-none" />
              </div>
              <button type="submit" className="btn-pill w-full py-6 bg-brand-gold text-brand-darkest font-display text-[11px] font-black uppercase tracking-[0.2em]">
                SEND TRANSMISSION
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

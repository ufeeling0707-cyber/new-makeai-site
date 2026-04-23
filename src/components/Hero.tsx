import React from 'react';
import { SUB_TAGLINE, HERO_IMAGE_PATH, HERO_OVERLAY_TEXT } from '../constants';
import { ChevronRight } from 'lucide-react';

const customerLogoModules = import.meta.glob('../assets/customer-logos/*.{png,jpg,jpeg,svg,webp,ico}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const customerLogos = Object.entries(customerLogoModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? '';
    const label = decodeURIComponent(fileName.replace(/\.[^.]+$/, '')).replace(/[_-]+/g, ' ').trim();

    return { src, label };
  })
  .sort((left, right) => left.label.localeCompare(right.label, 'ko'));

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen w-full flex flex-col items-center justify-start bg-[#050505] pt-16 pb-8 overflow-hidden">

      {/* Cinematic Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <h1 className="text-center text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[1.1] md:leading-[0.9] mb-8 drop-shadow-xl">
          We Make <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300">Your AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 max-w-2xl">
          {SUB_TAGLINE}
        </p>

        {/* Text Above Image - Fix: Ensure variable is used here to prevent TS6133 error */}
        <div className="w-full max-w-5xl mx-auto mb-8 px-4 text-center animate-fade-in-up delay-300">
          <p className="text-lg md:text-2xl font-semibold text-gray-200 leading-relaxed drop-shadow-md break-keep">
            {HERO_OVERLAY_TEXT}
          </p>
        </div>

        <div className="mb-16 flex w-full max-w-5xl flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            onClick={(e) => handleScroll(e, 'products')}
            className="group inline-flex items-center justify-center rounded-xl bg-[#3ea6ff] px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_32px_rgba(62,166,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f98f5] hover:shadow-[0_18px_40px_rgba(62,166,255,0.5)]"
          >
            Products
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#solutions"
            onClick={(e) => handleScroll(e, 'solutions')}
            className="group inline-flex items-center justify-center rounded-xl bg-[#3ea6ff] px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_32px_rgba(62,166,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f98f5] hover:shadow-[0_18px_40px_rgba(62,166,255,0.5)]"
          >
            Solutions
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="group inline-flex items-center justify-center rounded-xl bg-[#3ea6ff] px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_32px_rgba(62,166,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f98f5] hover:shadow-[0_18px_40px_rgba(62,166,255,0.5)]"
          >
            Contact Details
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative w-full max-w-5xl mx-auto group perspective-1000">
          {/* Glow Effect behind image */}
          <div className="absolute -inset-1 bg-gradient-to-t from-neon-blue/20 to-transparent blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000"></div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 bg-[#0a0a0a] shadow-2xl">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>

            <img
              src={HERO_IMAGE_PATH}
              alt="The AI BUS System"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Image Footer Label (Technical Status Only) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 z-20 flex items-end justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-mono tracking-widest uppercase opacity-80">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                System Active: The AI BUS Integration
              </div>
            </div>
          </div>

          {/* Reflection Effect */}
          <div className="absolute top-full left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent transform scale-y-[-1] opacity-20 blur-sm pointer-events-none mask-image-fade"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/45 px-3 py-4 backdrop-blur-md [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
            {[...customerLogos, ...customerLogos].map((client, index) => (
              <div
                key={`${client.label}-${index}`}
                className="flex min-h-[92px] min-w-[208px] items-center gap-4 rounded-2xl border border-white/12 bg-slate-950/85 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.45)] ring-1 ring-white/6"
              >
                <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]">
                  <img src={client.src} alt={`${client.label} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <p className="break-keep text-sm font-semibold text-white">{client.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
    </div>
  );
};

export default Hero;


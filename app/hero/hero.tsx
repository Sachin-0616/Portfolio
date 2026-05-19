'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'motion/react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const ROLES = [
  'Senior Frontend Engineer',
  'Next.js App Router Specialist',
  'React 19 & TypeScript Expert',
  'UI Performance Optimizer',
  'Design Systems Architect',
];

// ─── Fake code window shown inside the 3-D scroll card ───────────────────────
function CodePreview() {
  return (
    <div className="h-full w-full rounded-2xl bg-[#08080a] overflow-hidden font-mono text-xs border border-white/[0.08] flex flex-col shadow-2xl relative">
      {/* Dynamic ambient radial lighting */}
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />

      {/* Window chrome header */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#0f0f13] border-b border-white/[0.05] shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 border border-rose-600/30 flex items-center justify-center text-[8px] text-rose-950 font-bold opacity-80 select-none">×</span>
          <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 border border-amber-600/30 flex items-center justify-center text-[8px] text-amber-950 font-bold opacity-80 select-none">-</span>
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 border border-emerald-600/30 flex items-center justify-center text-[8px] text-emerald-950 font-bold opacity-80 select-none">+</span>
          <div className="w-px h-3.5 bg-white/10 mx-2" />
          <span className="text-zinc-500 text-[11px] font-medium tracking-wide">sachin-portfolio/app/page.tsx</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.05]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">production</span>
        </div>
      </div>

      {/* Code Editor lines */}
      <div className="flex-1 overflow-hidden p-6 md:p-8 leading-6 text-[12px] md:text-[13px] select-none text-zinc-300 font-medium">
        <div>
          <span className="text-pink-400">import</span>
          <span className="text-zinc-200"> &#123; </span>
          <span className="text-cyan-300">motion</span>
          <span className="text-zinc-200">, </span>
          <span className="text-cyan-300">AnimatePresence</span>
          <span className="text-zinc-200"> &#125; </span>
          <span className="text-pink-400">from</span>
          <span className="text-emerald-400"> &apos;motion/react&apos;</span>
          <span className="text-zinc-500">;</span>
        </div>
        <div>
          <span className="text-pink-400">import</span>
          <span className="text-zinc-200"> &#123; </span>
          <span className="text-cyan-300">gsap</span>
          <span className="text-zinc-200"> &#125; </span>
          <span className="text-pink-400">from</span>
          <span className="text-emerald-400"> &apos;gsap&apos;</span>
          <span className="text-zinc-500">;</span>
        </div>
        <br />
        <div>
          <span className="text-pink-400">const</span>
          <span className="text-violet-300"> developerConfig</span>
          <span className="text-zinc-400"> =</span>
          <span className="text-zinc-200"> &#123;</span>
        </div>
        <div className="pl-5">
          <span className="text-zinc-400">name:</span>
          <span className="text-emerald-300"> &apos;Sachin&apos;</span>
          <span className="text-zinc-500">,</span>
        </div>


        <div><span className="text-zinc-200">&#125;;</span></div>
        <br />
        <div>
          <span className="text-blue-400 font-bold">export default function</span>
          <span className="text-yellow-300"> Portfolio</span>
          <span className="text-zinc-200">() &#123;</span>
        </div>
        <div className="pl-5">
          <span className="text-pink-400">return</span>
          <span className="text-zinc-200"> (</span>
        </div>
        <div className="pl-10">
          <span className="text-violet-400">&lt;div</span>
          <span className="text-cyan-300"> className</span>
          <span className="text-zinc-400">=</span>
          <span className="text-emerald-400">&quot;flex flex-col gap-10&quot;</span>
          <span className="text-violet-400">&gt;</span>
        </div>
        <div className="pl-15">
          <span className="text-violet-400">&lt;Hero</span>
          <span className="text-cyan-300"> config</span>
          <span className="text-zinc-400">=</span>
          <span className="text-zinc-200">&#123;</span>
          <span className="text-violet-300">developerConfig</span>
          <span className="text-zinc-200">&#125;</span>
          <span className="text-violet-400"> /&gt;</span>
        </div>
        <div className="pl-10">
          <span className="text-violet-400">&lt;/div&gt;</span>
        </div>
        <div className="pl-5"><span className="text-zinc-200">);</span></div>
        <div><span className="text-zinc-200">&#125;</span></div>
        <br />
        {/* Animated cursor tracking line */}
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-600">// initializing high performance architecture... </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block w-2 h-4 bg-violet-400 rounded-sm"
          />
        </div>
      </div>

      {/* Editor footer status bar */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[#0f0f13] border-t border-white/[0.05] shrink-0 select-none">
        <div className="flex items-center gap-4">
          <span className="text-violet-400 text-[10.5px] font-bold tracking-wide">● TypeScript</span>
          <span className="text-zinc-600 text-[10.5px] font-medium">Next.js 16 (App Router)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 text-[10.5px] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active (99% coverage)
          </span>
          <span className="text-zinc-600 text-[10.5px]">Ln 24, Col 32</span>
        </div>
      </div>
    </div>
  );
}

// ─── Title block that goes inside ContainerScroll.titleComponent ──────────────
function HeroTitle({ displayed }: { displayed: string }) {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Dynamic organic float animation using random boundaries
    gsap.to(orb1.current, {
      x: 'random(-60, 60)',
      y: 'random(-60, 60)',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(orb2.current, {
      x: 'random(-50, 50)',
      y: 'random(-50, 50)',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
    });
  }, []);

  return (
    <div className="relative text-center px-4 md:px-8 max-w-4xl mx-auto">
      {/* Ambient glowing floating layers */}
      <div ref={orb1} className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[350px] rounded-full bg-gradient-to-br from-violet-600/15 to-cyan-500/8 blur-3xl -z-10" />
      <div ref={orb2} className="pointer-events-none absolute -top-12 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/10 to-pink-500/8 blur-3xl -z-10" />



      {/* Name Title */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-2"
      >
        <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent drop-shadow-sm">
          Sachin
        </span>
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
          .
        </span>
      </motion.h1>

      {/* Role Typewriter */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="text-2xl sm:text-3xl font-black text-zinc-300 mb-6 min-h-[2.5rem] tracking-tight"
      >
        <span className="text-violet-400">{displayed}</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.9 }}
          className="text-cyan-400 font-normal"
        >
          |
        </motion.span>
      </motion.p>

      {/* Professional Copy Block */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium"
      >
        Designing and developing <span className="text-white font-semibold">modern web applications</span> with expertise in{' '}
        <span className="text-white font-semibold">frontend engineering</span> and hands-on{' '}
        <span className="text-white font-semibold">backend development</span>. Focused on creating{' '}
        <span className="text-white font-semibold">scalable, performant, and user-centric</span> digital experiences with{' '}
        clean architecture, responsive design, and production-ready code practices.
      </motion.p>

      {/* CTA Button Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-4.5 mb-10 md:mb-14"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="group inline-flex items-center gap-2 px-8.5 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm tracking-wide hover:shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all duration-300"
        >
          View My Work
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255,255,255,0.35)', backgroundColor: 'rgba(255,255,255,0.06)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="inline-flex items-center gap-2 px-8.5 py-4 rounded-full border border-white/15 text-white font-bold text-sm tracking-wide transition-all duration-300"
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Staggered Tech Badges */}
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
        {['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'GSAP', 'Framer Motion', 'Radix UI', 'Vercel'].map((t, idx) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.75 + idx * 0.06, type: 'spring', stiffness: 260, damping: 18 }}
            whileHover={{ scale: 1.06, borderColor: 'rgba(167, 139, 250, 0.4)', color: '#ffffff' }}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/[0.08] text-zinc-400 transition-colors cursor-pointer select-none"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// ─── Main exported Hero (replaces both hero.tsx and scroll-bg.tsx) ────────────
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

      <ContainerScroll
        titleComponent={<HeroTitle displayed={displayed} />}
      >
        <CodePreview />
      </ContainerScroll>
    </section>
  );
}

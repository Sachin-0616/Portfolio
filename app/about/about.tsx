'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconBrandNodejs,
  IconDatabase,
  IconRocket,
  IconDeviceDesktop,
  IconPalette,
  IconCode,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';

const STATS = [
  { value: '3+', label: 'Years of Experience', sublabel: 'Building production-grade apps' },
  { value: '20+', label: 'Projects Delivered', sublabel: 'Across SaaS, EdTech & healthcare' },
  { value: '99', label: 'Lighthouse Score', sublabel: 'Average across all projects' },
  { value: '5+', label: 'Open-Source Contributions', sublabel: 'Active GitHub contributor' },
];

const CAROUSEL_SLIDES = [
  {
    category: 'Core Framework',
    icon: IconBrandReact,
    accent: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    description: 'Deep mastery of the React ecosystem — Hooks, Context API, Concurrent Rendering, Suspense, and Server Components with React 19.',
    skills: [
      { name: 'React 18 / 19', level: 97, note: 'Hooks · Concurrent · Suspense' },
      { name: 'Next.js App Router', level: 95, note: 'SSR · SSG · ISR · RSC' },
      { name: 'TypeScript', level: 92, note: 'Strict mode · Generics · Utility types' },
      { name: 'Next.js Pages Router', level: 88, note: 'Legacy competency maintained' },
    ],
  },
  {
    category: 'Styling & Animation',
    icon: IconPalette,
    accent: 'from-violet-500/20 to-purple-600/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    description: 'End-to-end UI polish — from design tokens and utility-first styling to fluid micro-interactions and page transitions.',
    skills: [
      { name: 'Tailwind CSS v4', level: 96, note: 'Utility-first · Design tokens' },
      { name: 'Framer Motion', level: 90, note: 'Page transitions · Gestures' },
      { name: 'GSAP', level: 87, note: 'Timeline · ScrollTrigger' },
      { name: 'CSS Modules / Styled Components', level: 85, note: 'Scoped styles · Theming' },
    ],
  },
  {
    category: 'Component Libraries',
    icon: IconDeviceDesktop,
    accent: 'from-pink-500/20 to-rose-600/10',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    description: 'Building accessible, scalable component systems using headless primitives and production-ready UI frameworks.',
    skills: [
      { name: 'Radix UI', level: 93, note: 'Headless · Accessible' },
      { name: 'Shadcn UI', level: 94, note: 'Customizable · Composable' },
      { name: 'Headless UI', level: 88, note: 'Tailwind-first primitives' },
      { name: 'Storybook', level: 82, note: 'Component-driven development' },
    ],
  },
  {
    category: 'Data & APIs',
    icon: IconDatabase,
    accent: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    description: 'Full-stack data flow — RESTful integration, server actions, ORMs, and efficient client-side data management.',
    skills: [
      { name: 'REST APIs / Axios / Fetch', level: 94, note: 'Interceptors · Caching strategies' },
      { name: 'Drizzle ORM', level: 89, note: 'Type-safe · Schema-first' },
      { name: 'PostgreSQL', level: 85, note: 'Joins · Migrations · Queries' },
      { name: 'Next.js Server Actions', level: 91, note: 'Mutations · Revalidation' },
    ],
  },
  {
    category: 'Performance & SEO',
    icon: IconRocket,
    accent: 'from-orange-500/20 to-yellow-600/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    description: 'Obsessive attention to Core Web Vitals, bundle size, and SEO — ensuring fast, discoverable, and accessible experiences.',
    skills: [
      { name: 'Core Web Vitals (LCP/FID/CLS)', level: 95, note: 'Avg Lighthouse 99' },
      { name: 'next/image · next/font · Dynamic', level: 93, note: 'Asset optimization' },
      { name: 'Code Splitting & Tree Shaking', level: 90, note: 'Bundle analysis' },
      { name: 'Dynamic Metadata & OG Tags', level: 91, note: 'SEO · Social sharing' },
    ],
  },
  {
    category: 'Tooling & Deployment',
    icon: IconCode,
    accent: 'from-indigo-500/20 to-blue-600/10',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    description: 'From local dev to production — CI/CD pipelines, edge deployments, and a disciplined engineering workflow.',
    skills: [
      { name: 'Vercel', level: 96, note: 'Edge functions · Previews' },
      { name: 'Git / GitHub', level: 95, note: 'Branching · PRs · Reviews' },
      { name: 'ESLint / Prettier / TypeScript', level: 92, note: 'DX tooling' },
      { name: 'pnpm / npm workspaces', level: 88, note: 'Monorepo experience' },
    ],
  },
];

const TECH_ICONS = [
  { icon: IconBrandReact, label: 'React', color: 'text-cyan-400' },
  { icon: IconBrandNextjs, label: 'Next.js', color: 'text-white' },
  { icon: IconBrandTypescript, label: 'TypeScript', color: 'text-blue-400' },
  { icon: IconBrandTailwind, label: 'Tailwind', color: 'text-teal-400' },
  { icon: IconBrandFramerMotion, label: 'Motion', color: 'text-pink-400' },
  { icon: IconBrandNodejs, label: 'Node.js', color: 'text-emerald-400' },
];

function SkillBar({ name, level, note }: { name: string; level: number; note: string }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div>
          <span className="text-sm font-medium text-zinc-200">{name}</span>
          <span className="ml-2 text-[11px] text-zinc-600">{note}</span>
        </div>
        <span className="text-xs font-semibold text-zinc-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
        />
      </div>
    </div>
  );
}

export default function About() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = CAROUSEL_SLIDES.length;

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent(next);
  }, []);

  const prev = () => go((current - 1 + total) % total, -1);
  const next = () => go((current + 1) % total, 1);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go((current + 1) % total, 1), 5000);
    return () => clearInterval(t);
  }, [current, go, total]);

  const slide = CAROUSEL_SLIDES[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="about" className="relative py-8 px-8 sm:px-16 lg:px-28 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-xs tracking-[0.25em] uppercase text-violet-400 mb-3">About Me</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
          Engineering Interfaces{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            That Perform
          </span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
          <span className="text-white font-semibold">Frontend-focused Full Stack Developer</span> with a passion for building fast, scalable, and visually refined web applications. I specialize in creating modern user experiences with{' '}
          <span className="text-white font-semibold">clean architecture</span>, smooth interactions, and{' '}
          <span className="text-white font-semibold">production-ready performance</span>.
        </p>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mt-4">
          I enjoy turning complex ideas into intuitive digital products, focusing on both{' '}
          <span className="text-white font-semibold">frontend excellence</span> and practical{' '}
          <span className="text-white font-semibold">backend integration</span>.
        </p>
      </motion.div>

      {/* Infinite scrolling horizontal tech marquee (flowing right to left) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative w-full overflow-hidden py-2 mb-16"
      >
        {/* Soft edge masks for smooth premium fading */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          }}
          className="flex gap-4 w-max shrink-0"
        >
          {/* Multiplied arrays to construct an ultra-wide continuous loop track */}
          {[...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS].map(({ icon: Icon, label, color }, idx) => (
            <motion.div
              key={`${label}-${idx}`}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.18)', backgroundColor: 'rgba(255,255,255,0.06)' }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-colors duration-300 cursor-default select-none shrink-0"
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="text-[13px] text-zinc-300 font-bold tracking-wide">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

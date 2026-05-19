'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  IconMenu2,
  IconX,
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMessageChatbot,
} from '@tabler/icons-react';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: IconHome,
    href: '#home',
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.35)',
    bgGradient: 'from-violet-600/30 to-fuchsia-600/30',
  },
  {
    id: 'about',
    label: 'About',
    icon: IconUser,
    href: '#about',
    color: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.35)',
    bgGradient: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: IconCode,
    href: '#projects',
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.35)',
    bgGradient: 'from-pink-500/30 to-rose-500/30',
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: IconBriefcase,
    href: '#experience',
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.35)',
    bgGradient: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: IconMail,
    href: '#contact',
    color: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.35)',
    bgGradient: 'from-yellow-500/30 to-amber-500/30',
  },
];

const SOCIAL_ITEMS = [
  {
    id: 'github',
    label: 'GitHub',
    icon: IconBrandGithub,
    href: 'https://github.com/',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.25)',
    bgGradient: 'from-zinc-700/30 to-zinc-800/30',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
    href: 'https://linkedin.com/',
    color: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.35)',
    bgGradient: 'from-blue-600/30 to-indigo-600/30',
  },
  {
    id: 'email',
    label: 'Email',
    icon: IconMail,
    href: 'mailto:hello@sachin.dev',
    color: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.35)',
    bgGradient: 'from-yellow-500/30 to-amber-500/30',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: IconBrandInstagram,
    href: 'https://instagram.com/',
    color: '#f43f5e',
    glow: 'rgba(244, 63, 94, 0.35)',
    bgGradient: 'from-rose-500/30 to-pink-500/30',
  },
  {
    id: 'assistant',
    label: 'Assistant',
    icon: IconMessageChatbot,
    href: '#contact',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.35)',
    bgGradient: 'from-purple-500/30 to-indigo-500/30',
  },
];

export function FloatingDockDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSocialId, setHoveredSocialId] = useState<string | null>(null);

  // Intersection Observer to trace active viewport sections
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ========================================== */}
      {/* 1. MOBILE ONLY VIEWPORT ELEMENTS       */}
      {/* ========================================== */}

      {/* Top Bar Wrapper (Mobile Only) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:hidden pointer-events-none">
        <span className="text-xl font-normal tracking-[0.25em] text-zinc-300 uppercase pointer-events-auto select-none">
          PORTFOLIO
        </span>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center text-zinc-100 hover:text-white border border-white/60 hover:border-white rounded p-1 transition-colors pointer-events-auto focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Floating Fullscreen Overlay (Mobile Only) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex md:hidden items-center justify-between px-8 sm:px-16"
          >
            {/* Background Graphic text alignment matches screenshot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
              <span className="text-[15vw] font-bold text-zinc-900/25 tracking-[0.08em] uppercase">
                CONTACT
              </span>
            </div>

            {/* Left Stacked Social Icons */}
            <motion.div
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -25, opacity: 0 }}
              className="flex flex-col gap-6 z-10"
            >
              {SOCIAL_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.id !== 'assistant' ? '_blank' : undefined}
                    rel={item.id !== 'assistant' ? 'noopener noreferrer' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-zinc-400 hover:text-white active:scale-95 transition-all"
                  >
                    <Icon size={26} />
                  </a>
                );
              })}
            </motion.div>

            {/* Right Stacked Navigation Headers */}
            <motion.div
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 25, opacity: 0 }}
              className="flex flex-col gap-8 text-right z-10"
            >
              {[
                { id: 'projects', label: 'PROJECTS', href: '#projects' },
                { id: 'about', label: 'SKILLS', href: '#about' },
                { id: 'experience', label: 'DETAILS', href: '#experience' },
                { id: 'contact', label: 'CONTACT', href: '#contact' }
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm sm:text-base tracking-[0.25em] font-medium transition-all block ${isActive
                      ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                      : 'text-zinc-400'
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ========================================== */}
      {/* 2. DESKTOP ONLY VIEWPORT ELEMENTS      */}
      {/* ========================================== */}

      {/* Top Left Text Links Menu (Desktop Only) */}
      <div className="fixed left-8 md:left-12 top-10 z-50 hidden md:flex items-center gap-8 lg:gap-12 backdrop-blur-sm bg-zinc-950/20 px-6 py-3 rounded-full border border-white/5">
        {[
          { id: 'projects', label: 'PROJECTS', href: '#projects' },
          { id: 'about', label: 'SKILLS', href: '#about' },
          { id: 'experience', label: 'DETAILS', href: '#experience' },
          { id: 'contact', label: 'CONTACT', href: '#contact' }
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`text-[12px] tracking-[0.2em] transition-all duration-300 ${isActive
                ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                : 'text-zinc-400 hover:text-zinc-200 font-normal'
                }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Floating Interactive Dock Layout Container (Desktop Only) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 items-center">
        <div className="absolute inset-y-[-20px] w-[2px] bg-gradient-to-b from-transparent via-zinc-800/40 to-transparent -z-10" />

        <div className="flex flex-col gap-3.5 bg-zinc-950/75 border border-white/[0.08] backdrop-blur-xl p-3.5 rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.8)] relative">
          {SOCIAL_ITEMS.map((item) => {
            const isHovered = hoveredSocialId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative flex items-center justify-end"
                onMouseEnter={() => setHoveredSocialId(item.id)}
                onMouseLeave={() => setHoveredSocialId(null)}
              >
                {/* Brand Indicator Label Popups */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.85 }}
                      animate={{ opacity: 1, x: -16, scale: 1 }}
                      exit={{ opacity: 0, x: 12, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      className="absolute right-full flex items-center gap-2 bg-zinc-950/95 border border-white/[0.1] shadow-2xl backdrop-blur-lg px-4.5 py-2.5 rounded-[16px] pointer-events-none select-none z-50 whitespace-nowrap"
                    >
                      <span
                        className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                        style={{ backgroundColor: item.color, color: item.color }}
                      />
                      <span className="text-[13px] font-semibold tracking-wide text-zinc-100 uppercase">
                        {item.label}
                      </span>
                      <div className="absolute top-1/2 -translate-y-1/2 -right-[5px] border-4 border-transparent border-l-zinc-950/95" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated Core Interactive Dock Card */}
                <motion.a
                  href={item.href}
                  target={item.id !== 'assistant' ? '_blank' : undefined}
                  rel={item.id !== 'assistant' ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  animate={{
                    scale: isHovered ? 1.25 : 1,
                    boxShadow: isHovered
                      ? `0 0 25px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.15)`
                      : 'none',
                    backgroundColor: isHovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.01)',
                    borderColor: isHovered ? item.color : 'rgba(255, 255, 255, 0.05)',
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="relative flex items-center justify-center w-14 h-14 rounded-[20px] border cursor-pointer z-10 transition-shadow overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0`}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <motion.div
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                      rotate: isHovered ? [0, -5, 5, 0] : 0,
                      color: isHovered ? item.color : '#a1a1aa',
                    }}
                    transition={{
                      scale: { type: 'spring', stiffness: 300, damping: 20 },
                      rotate: { duration: 0.4, ease: 'easeInOut' },
                    }}
                    className="z-20 relative flex items-center justify-center"
                  >
                    <Icon size={26} strokeWidth={isHovered ? 2.2 : 1.7} />
                  </motion.div>
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
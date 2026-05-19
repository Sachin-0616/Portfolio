'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
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
    color: '#a78bfa', // Violet
    glow: 'rgba(167, 139, 250, 0.35)',
    bgGradient: 'from-violet-600/30 to-fuchsia-600/30',
  },
  {
    id: 'about',
    label: 'About',
    icon: IconUser,
    href: '#about',
    color: '#22d3ee', // Cyan
    glow: 'rgba(34, 211, 238, 0.35)',
    bgGradient: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: IconCode,
    href: '#projects',
    color: '#f472b6', // Pink
    glow: 'rgba(244, 114, 182, 0.35)',
    bgGradient: 'from-pink-500/30 to-rose-500/30',
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: IconBriefcase,
    href: '#experience',
    color: '#34d399', // Emerald
    glow: 'rgba(52, 211, 153, 0.35)',
    bgGradient: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: IconMail,
    href: '#contact',
    color: '#fbbf24', // Amber
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
    color: '#ffffff', // White
    glow: 'rgba(255, 255, 255, 0.25)',
    bgGradient: 'from-zinc-700/30 to-zinc-800/30',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
    href: 'https://linkedin.com/',
    color: '#60a5fa', // Blue
    glow: 'rgba(96, 165, 250, 0.35)',
    bgGradient: 'from-blue-600/30 to-indigo-600/30',
  },
  {
    id: 'email',
    label: 'Email',
    icon: IconMail,
    href: 'mailto:hello@sachin.dev',
    color: '#fbbf24', // Gold
    glow: 'rgba(251, 191, 36, 0.35)',
    bgGradient: 'from-yellow-500/30 to-amber-500/30',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: IconBrandInstagram,
    href: 'https://instagram.com/',
    color: '#f43f5e', // Rose
    glow: 'rgba(244, 63, 94, 0.35)',
    bgGradient: 'from-rose-500/30 to-pink-500/30',
  },
  {
    id: 'assistant',
    label: 'Assistant',
    icon: IconMessageChatbot,
    href: '#contact',
    color: '#c084fc', // Purple
    glow: 'rgba(192, 132, 252, 0.35)',
    bgGradient: 'from-purple-500/30 to-indigo-500/30',
  },
];

export function FloatingDockDemo() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const [hoveredSocialId, setHoveredSocialId] = useState<string | null>(null);

  // Intersection Observer for Left Navigation
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
      {/* ─── TOP LEFT TEXT NAVIGATION ─── */}
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
              className={`text-[12px] tracking-[0.2em] transition-all duration-300 ${
                isActive ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-zinc-400 hover:text-zinc-200 font-normal'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* ─── RIGHT SIDE FLOATING SOCIAL DOCK ─── */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        {/* Dynamic decorative backdrop track */}
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
                {/* Stylish sliding Name Tag (only visible on hover, slides out to the left) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.85 }}
                      animate={{ opacity: 1, x: -16, scale: 1 }}
                      exit={{ opacity: 0, x: 12, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      className="absolute right-full flex items-center gap-2 bg-zinc-950/95 border border-white/[0.1] shadow-2xl backdrop-blur-lg px-4.5 py-2.5 rounded-[16px] pointer-events-none select-none z-50 whitespace-nowrap"
                    >
                      {/* Small glowing dot matching brand color */}
                      <span
                        className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                        style={{ backgroundColor: item.color, color: item.color }}
                      />
                      <span className="text-[13px] font-semibold tracking-wide text-zinc-100 uppercase">
                        {item.label}
                      </span>
                      {/* Pointer arrow on the right of label */}
                      <div className="absolute top-1/2 -translate-y-1/2 -right-[5px] border-4 border-transparent border-l-zinc-950/95" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glowing Interactive Icon Card */}
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
                  {/* Color Flash background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0`}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Icon */}
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

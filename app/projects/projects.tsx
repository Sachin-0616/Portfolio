'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconBrandGithub, IconExternalLink, IconArrowUpRight, IconCircleFilled } from '@tabler/icons-react';

const PROJECTS = [
  {
    id: 'workship',
    title: 'WorkShip',
    category: 'Enterprise SaaS',
    tagline: 'Enterprise-grade company management system',
    description:
      'Designed for workforce operations, employee management, project tracking, task workflows, analytics, and internal collaboration with a scalable dashboard-first architecture and modern responsive UI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Vercel'],
    color: 'from-violet-600/15 to-indigo-800/10',
    accentColor: '#a78bfa',
    glowColor: 'rgba(139, 92, 246, 0.2)',
    borderHover: 'hover:border-violet-500/40',
    featured: true,
    year: '2025',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    liveUrl: 'https://www.workship.cloud/',
    githubUrl: 'https://github.com/',
    metrics: ['Workforce Ops', 'Task Workflows', 'Analytics'],
    previewBg: 'from-violet-950 via-indigo-950 to-zinc-950',
    previewAccent: 'violet',
  },
  {
    id: 'orthomentor',
    title: 'OrthoMentors LMS',
    category: 'EdTech Platform',
    tagline: 'Specialized LMS for Orthopedic PG Students',
    description:
      'Specialized learning management platform featuring structured course delivery, assessments, clinical case discussions, academic resource management, mentor-student collaboration, and personalized learning progress tracking.',
    tags: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Radix UI', 'Tailwind CSS'],
    color: 'from-cyan-600/15 to-blue-800/10',
    accentColor: '#22d3ee',
    glowColor: 'rgba(34, 211, 238, 0.18)',
    borderHover: 'hover:border-cyan-500/40',
    featured: true,
    year: '2024–25',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    liveUrl: 'https://orthomentors.ai/',
    githubUrl: 'https://github.com/',
    metrics: ['Course Delivery', 'Clinical Cases', 'Mentorship'],
    previewBg: 'from-cyan-950 via-blue-950 to-zinc-950',
    previewAccent: 'cyan',
  },
  {
    id: 'arivara',
    title: 'Arivara AI',
    category: 'AI Research Platform',
    tagline: 'Autonomous AI-powered research agent platform',
    description:
      'Focused on intelligent multi-source research, AI-assisted report generation, workflow automation, live research tracking, and interactive dashboards built with scalable modern web architecture.',
    tags: ['Next.js', 'TypeScript', 'AI APIs', 'React Query', 'Tailwind CSS', 'Vercel'],
    color: 'from-pink-600/15 to-rose-800/10',
    accentColor: '#f472b6',
    glowColor: 'rgba(244, 114, 182, 0.18)',
    borderHover: 'hover:border-pink-500/40',
    featured: true,
    year: '2025',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    liveUrl: 'https://www.arivara.ai/',
    githubUrl: 'https://github.com/',
    metrics: ['Multi-source AI', 'Auto Reports', 'Live Tracking'],
    previewBg: 'from-rose-950 via-pink-950 to-zinc-950',
    previewAccent: 'pink',
  },
  {
    id: 'mostnoa',
    title: 'MOS TNOA',
    category: 'Sports & Event Platform',
    tagline: 'Cricket Tournament for Medical Professionals',
    description: 'A comprehensive cricket tournament website built for medical line doctors and students. Features live event tracking, team information, and tournament engagement with a highly responsive and dynamic interface.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    color: 'from-blue-600/15 to-sky-800/10',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.2)',
    borderHover: 'hover:border-sky-500/40',
    featured: false,
    year: '2024',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    liveUrl: 'https://www.mostnoacricket.com/',
    githubUrl: 'https://github.com/',
    metrics: ['Live Tournament', 'Team Stats', 'Event Info'],
    previewBg: 'from-sky-950 via-blue-950 to-zinc-950',
    previewAccent: 'sky',
  }
];

// ── Animated website preview pane shown on hover ──────────────────────────────
function ProjectPreview({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: 5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`absolute inset-0 z-20 rounded-3xl overflow-hidden bg-gradient-to-br ${project.previewBg} border border-white/10 shadow-2xl flex flex-col`}
    >
      {/* Simulated browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-white/[0.06] backdrop-blur-md shrink-0">
        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <div className="ml-3 flex-1">
          <div className="h-6 max-w-sm rounded-md bg-white/[0.06] border border-white/[0.08] flex items-center px-3 mx-auto">
            <span className="text-[11px] text-zinc-400 truncate mx-auto">{project.liveUrl}</span>
          </div>
        </div>
      </div>

      {/* Live Website Preview via iframe */}
      <div className="relative flex-1 bg-zinc-950 overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
        </div>
        {/* Scale the iframe to fit a large resolution into the card */}
        <iframe
          src={project.liveUrl}
          loading="lazy"
          className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left pointer-events-none opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
          style={{ transform: 'scale(0.25)' }}
          onLoad={(e) => {
            (e.target as HTMLIFrameElement).style.opacity = '1';
          }}
          tabIndex={-1}
        />

        {/* Overlay to catch clicks and show CTA */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          >
            <span
              className="flex items-center gap-2 px-6 py-3 rounded-full border text-white shadow-xl backdrop-blur-md font-bold tracking-wide"
              style={{ borderColor: `${project.accentColor}80`, backgroundColor: `${project.accentColor}40` }}
            >
              Click to Visit Site <IconArrowUpRight size={18} />
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-8 px-4 sm:px-12 lg:px-24 overflow-hidden">
      {/* Section ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 relative z-10 flex flex-col items-center text-center w-full"
      >
        <p className="text-xs tracking-[0.25em] uppercase text-violet-400 mb-3 font-bold">Work</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">

          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            Projects
          </span>
        </h2>
      </motion.div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {PROJECTS.map((project, i) => {
          const isHovered = hoveredId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="relative cursor-pointer"
            >
              <motion.div
                animate={{
                  y: isHovered ? -8 : 0,
                  scale: isHovered ? 1.02 : 1,
                  boxShadow: isHovered
                    ? `0 30px 80px ${project.glowColor}, 0 0 0 1px ${project.accentColor}50`
                    : '0 4px 24px rgba(0,0,0,0.3)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className={`group relative rounded-3xl border border-white/[0.06] bg-zinc-950/70 backdrop-blur-md overflow-hidden min-h-[410px] flex flex-col ${project.borderHover} transition-colors duration-500`}
              >
                {/* Gradient background layer */}
                <motion.div
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} pointer-events-none`}
                />

                {/* Default card content */}
                <motion.div
                  animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 p-7 sm:p-9 flex flex-col h-full flex-1"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: project.accentColor }}>
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400">
                          <IconCircleFilled size={8} className={project.statusColor.replace('bg-', 'text-')} />
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-4xl font-black text-white tracking-tight">{project.title}</h3>
                      <p className="text-zinc-300 text-[15px] font-medium mt-1.5">{project.tagline}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <div
                        onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}
                        className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        <IconBrandGithub size={16} />
                      </div>
                      <div
                        onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
                        className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        <IconExternalLink size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-[15px] leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics row */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[13px] font-bold px-3.5 py-1.5 rounded-lg border"
                        style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, backgroundColor: `${project.accentColor}10` }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-lg text-[13px] font-bold bg-white/[0.05] text-zinc-300 border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Year badge */}
                  <div className="absolute bottom-7 right-8 text-[15px] font-black text-zinc-500">{project.year}</div>
                </motion.div>

                {/* Hover preview overlay */}
                <AnimatePresence>
                  {isHovered && <ProjectPreview project={project} />}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-16 relative z-10"
      >
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-sm font-semibold hover:border-violet-500/30 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
        >
          <IconBrandGithub size={18} />
          View all on GitHub
          <IconArrowUpRight size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';

const EDUCATION = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Guru Nanak College',
    period: '2020 – 2023',
    description: 'Completed a comprehensive degree focusing on core computer science principles, software engineering, and database management, laying a strong architectural foundation for my career as a Full Stack Developer.',
    type: 'degree'
  },
  {
    degree: 'Full Stack Trainee',
    institution: 'Vcentry',
    description: 'Underwent intensive full-stack development training, acquiring fundamental knowledge of web architectures, database design, and modern frameworks.',
    type: 'training'
  },
  {
    degree: 'Web Developer Intern',
    institution: 'DLK Technologies',
    description: 'Developed and maintained responsive web interfaces, collaborated on small-scale projects, and gained foundational experience in modern frontend toolchains.',
    type: 'internship'
  }
];

const TIMELINE = [
  {
    role: 'Process Associate',
    company: 'Mr Cooper | Chennai, India',
    period: 'June 2023 – Jan 2025',
    description:
      'Worked at a leading US Mortgage-based company. Collaborated intimately with cross-functional teams to develop innovative methods for improving process operations. Supported critical special projects upon request from the department manager to ensure operational excellence.',
    highlights: ['Process Optimization', 'Cross-functional Collaboration', 'Mortgage Operations', 'Project Support'],
    active: false,
  },
  {
    role: 'Full Stack Intern',
    company: 'Arivara AI',
    period: '2023 – 2024',
    description:
      'Transitioned into the core engineering team to assist in building robust full-stack solutions for the medical sector. Gained intensive hands-on experience in modern web architecture, frontend aesthetics, and complex backend API integration.',
    highlights: ['Frontend Polish', 'API Integration', 'Tailwind CSS', 'React Hooks'],
    active: false,
  },
  {
    role: 'Full Stack Developer',
    company: 'Arivara AI',
    period: '2024 – Present',
    description:
      'Spearheading full-stack engineering for an upcoming, specialized medical-technology company. Architecting scalable healthcare-centric web applications and managing the end-to-end delivery of advanced medical software solutions bridging the gap between doctors and tech.',
    highlights: ['Next.js 15', 'React 19', 'TypeScript', 'Medical Tech', 'Full-Stack Architecture'],
    active: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-8 px-4 sm:px-12 lg:px-24">
      {/* Decorative ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.03),transparent_50%)] pointer-events-none" />

      {/* ── EDUCATION SECTION ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 relative z-10 flex flex-col items-center text-center w-full"
      >
        <p className="text-sm tracking-[0.25em] uppercase text-cyan-400 mb-4 font-black">Academic Background</p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-16 tracking-tight">
          My{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Education
          </span>
        </h2>

        <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8">
          {/* Main Degree Card (Featured) */}
          {EDUCATION.filter(e => e.type === 'degree').map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-[28px] border border-white/[0.08] bg-zinc-950/60 p-6 sm:p-10 shadow-2xl hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] transition-all duration-700 backdrop-blur-2xl relative overflow-hidden group text-left w-full flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-24"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-2xl" />
              
              <div className="md:w-5/12">
                <span className="inline-flex items-center justify-center shrink-0 text-emerald-400 font-bold text-[11px] bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm mb-4">
                  {edu.period}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-[1.1] mb-2">
                  {edu.degree}
                </h3>
                <p className="text-cyan-400 font-bold tracking-widest uppercase text-xs">
                  {edu.institution}
                </p>
              </div>
              
              <div className="md:w-7/12 flex items-center">
                <p className="text-zinc-300 text-[15px] sm:text-base leading-relaxed group-hover:text-zinc-200 transition-colors duration-300 font-medium">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Smaller Training & Internship Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full">
            {EDUCATION.filter(e => e.type !== 'degree').map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, type: 'spring', stiffness: 90 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-[20px] border border-white/[0.05] bg-zinc-950/40 p-5 sm:p-6 shadow-lg hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500 backdrop-blur-xl relative overflow-hidden group text-left flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-xl" />
                
                <div className="mb-3">
                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-violet-300 transition-colors tracking-tight leading-[1.2] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-violet-400 font-bold tracking-widest uppercase text-[10px]">
                    {edu.institution}
                  </p>
                </div>
                
                <p className="text-zinc-400 text-xs sm:text-[14px] leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 font-medium mt-auto">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24 w-full max-w-7xl mx-auto relative z-10" />

      {/* ── EXPERIENCE SECTION ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 relative z-10 flex flex-col items-center text-center w-full"
      >
        <p className="text-sm tracking-[0.25em] uppercase text-violet-400 mb-4 font-black">Career</p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
          My{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            Journey
          </span>
        </h2>
      </motion.div>

      <div className="relative z-10 w-full overflow-hidden">
        {/* Massive Animated Roadmap Layout */}
        <div className="relative max-w-6xl mx-auto py-10">

          {/* Central Roadmap Track Line */}
          <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500/80 via-cyan-500/80 to-transparent lg:-translate-x-1/2 hidden sm:block shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={item.role + item.company} className={`relative w-full flex flex-col lg:flex-row items-center mb-16 lg:mb-24 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>

                {/* Empty Half Space for layout balance on large screens */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* The Roadmap Card */}
                <div className={`w-full lg:w-1/2 sm:pl-24 lg:pl-0 ${isLeft ? 'lg:pr-20' : 'lg:pl-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: i * 0.1, type: 'spring', stiffness: 80, damping: 20 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`rounded-[32px] border p-6 sm:p-8 transition-all duration-500 backdrop-blur-xl relative overflow-hidden group w-full ${item.active
                      ? 'border-violet-500/50 bg-violet-950/20 shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:border-violet-500/80 hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]'
                      : 'border-white/[0.08] bg-zinc-950/60 shadow-xl hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]'
                      }`}
                  >
                    {/* Glowing effect inside card */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.active ? 'from-violet-500/20' : 'from-cyan-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`} />

                    {/* Date and Status Pills */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-zinc-400 font-bold text-sm bg-white/[0.05] border border-white/[0.08] px-4 py-2 rounded-full tracking-widest uppercase shadow-sm">
                        {item.period}
                      </span>
                      {item.active && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-bold tracking-widest uppercase shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          Present
                        </span>
                      )}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-violet-300 transition-colors duration-500 tracking-tight leading-[1.1] mb-2">
                      {item.role}
                    </h3>
                    <p className="text-violet-400 text-sm font-bold tracking-widest uppercase mb-6">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-300 text-[16px] leading-relaxed mb-8 font-medium">
                      {item.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1.5 rounded-xl text-[11px] font-bold tracking-wider bg-white/[0.03] text-zinc-400 border border-white/[0.08] group-hover:border-white/[0.2] group-hover:text-white transition-colors duration-300 cursor-default"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </div>

                {/* Animated Roadmap Node (Center Line Dot) */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                  className="absolute left-[39px] lg:left-1/2 top-10 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 hidden sm:flex items-center justify-center z-20"
                >
                  <motion.div
                    animate={{
                      scale: item.active ? [1, 1.4, 1] : 1,
                      boxShadow: item.active ? '0 0 25px rgba(139, 92, 246, 0.8)' : 'none',
                    }}
                    transition={{ scale: { repeat: Infinity, duration: 2 } }}
                    className={`w-10 h-10 rounded-full border-[4px] flex items-center justify-center ${item.active ? 'border-violet-400 bg-zinc-950' : 'border-zinc-600 bg-zinc-900'
                      }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-violet-400' : 'bg-zinc-500'}`} />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

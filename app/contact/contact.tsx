'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMapPin,
  IconClock,
  IconArrowRight,
  IconCheck,
  IconLoader2,
} from '@tabler/icons-react';

const CONTACT_CARDS = [
  {
    icon: IconMail,
    label: 'Email',
    value: 'sachindrapanikkar@gmail.com',
    href: 'mailto:sachindrapanikkar@gmail.com',
    color: 'from-violet-600/20 to-indigo-600/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: IconBrandGithub,
    label: 'GitHub',
    value: 'github.com/sachin',
    href: 'https://github.com/',
    color: 'from-zinc-700/20 to-zinc-800/10',
    border: 'border-white/15',
    iconColor: 'text-white',
  },
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    value: 'sachindra-p',
    href: 'https://www.linkedin.com/in/sachindra-p-6aa979243/',
    color: 'from-blue-600/20 to-blue-700/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },

];

type FormState = 'idle' | 'loading' | 'sent';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate network request — wire to a real endpoint in production
    await new Promise((r) => setTimeout(r, 1400));
    setFormState('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormState('idle'), 4000);
  };

  return (
    <section id="contact" className="relative py-8 px-4 sm:px-12 lg:px-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-violet-700/10 blur-[100px]" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-xs tracking-[0.25em] uppercase text-violet-400 mb-3">Get In Touch</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Let&apos;s Work{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          {/* Availability badge */}
          <div className="flex items-center gap-4 shrink-0">

          </div>
        </div>
        <p className="text-zinc-400 text-lg mt-5 max-w-2xl leading-relaxed">
          Whether you&apos;re looking to build a product from scratch, optimize an existing frontend,
          or need a senior engineer to join your team — I&apos;d love to hear about it.
        </p>
      </motion.div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">

        {/* ── Left: Contact cards + meta ── (2 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:col-span-2 flex flex-col gap-4"
        >
          {/* Location / timezone */}


          {/* Contact cards */}
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-br ${card.color} ${card.border} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0`}>
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-zinc-500 text-xs tracking-wide uppercase mb-0.5">{card.label}</p>
                <p className="text-zinc-200 text-sm font-medium truncate">{card.value}</p>
              </div>
              <IconArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* ── Right: Form ── (3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="xl:col-span-3 relative"
        >
          {/* Animated Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-[2.5rem] blur-xl opacity-50 pointer-events-none" />

          <motion.div
            whileHover={{ boxShadow: "0 0 50px rgba(139,92,246,0.15)" }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-12 relative overflow-hidden group"
          >
            {/* Inner dynamic light sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h3 className="text-3xl font-black text-white mb-10 tracking-tight">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative group/input"
                >
                  <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-500 mb-2 tracking-widest uppercase group-focus-within/input:text-violet-400 transition-colors duration-300">
                    Full Name <span className="text-violet-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-zinc-700 focus:outline-none focus:border-transparent transition-colors peer text-lg font-medium"
                    />
                    {/* Animated Focus Line */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 w-0 peer-focus:w-full transition-all duration-500 ease-out" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative group/input"
                >
                  <label htmlFor="contact-email" className="block text-xs font-bold text-zinc-500 mb-2 tracking-widest uppercase group-focus-within/input:text-violet-400 transition-colors duration-300">
                    Email Address <span className="text-violet-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-zinc-700 focus:outline-none focus:border-transparent transition-colors peer text-lg font-medium"
                    />
                    <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 w-0 peer-focus:w-full transition-all duration-500 ease-out" />
                  </div>
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative group/input"
              >
                <label htmlFor="contact-subject" className="block text-xs font-bold text-zinc-500 mb-2 tracking-widest uppercase group-focus-within/input:text-violet-400 transition-colors duration-300">
                  Subject
                </label>
                <div className="relative">
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-zinc-700 focus:outline-none focus:border-transparent transition-colors peer text-lg font-medium"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 w-0 peer-focus:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative group/input"
              >
                <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-500 mb-2 tracking-widest uppercase group-focus-within/input:text-violet-400 transition-colors duration-300">
                  Message <span className="text-violet-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-zinc-700 focus:outline-none focus:border-transparent transition-colors peer text-lg font-medium resize-none"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 w-0 peer-focus:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={formState === 'loading' || formState === 'sent'}
                  whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-base tracking-wide transition-all duration-500 relative overflow-hidden ${formState === 'sent'
                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
                    : formState === 'loading'
                      ? 'bg-violet-600/30 border border-violet-500/30 text-white cursor-not-allowed'
                      : 'bg-white text-zinc-950 hover:bg-zinc-200'
                    }`}
                >
                  {formState === 'idle' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-violet-400/30 to-violet-400/0 -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
                  )}
                  {formState === 'loading' && <IconLoader2 className="w-5 h-5 animate-spin" />}
                  {formState === 'sent' && <IconCheck className="w-5 h-5" />}
                  {formState === 'idle' && <IconArrowRight className="w-5 h-5" />}

                  {formState === 'sent'
                    ? 'Message Sent — I\'ll be in touch!'
                    : formState === 'loading'
                      ? 'Sending...'
                      : 'Send Message'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}

"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion } from "motion/react";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden relative group">
            {/* Ambient Background Glow behind the scroll container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <ContainerScroll
                titleComponent={
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-6 md:mb-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white text-center tracking-tight">
                            Experience the <br />
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                Digital Journey
                            </span>
                        </h2>
                    </motion.div>
                }
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-full relative overflow-hidden rounded-2xl group/img"
                >
                    {/* Inner dynamic highlight on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    
                    <motion.img
                        src="/image-eric.png"
                        alt="hero"
                        className="mx-auto object-cover h-full w-full object-left-top shadow-2xl"
                        draggable={false}
                    />
                </motion.div>
            </ContainerScroll>
        </div>
    );
}

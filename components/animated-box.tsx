'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLButtonElement>(null);
    const ambientRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(titleRef.current!.querySelectorAll('.line'), {
                yPercent: 120,
                rotateX: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
            })
                .from(
                    subtitleRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                    },
                    '-=0.6'
                )
                .from(
                    ctaRef.current,
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.6,
                    },
                    '-=0.4'
                )
                .from(
                    ambientRef.current,
                    {
                        opacity: 0,
                        scale: 0.95,
                        duration: 2,
                    },
                    0
                );

            // Ambient slow motion
            gsap.to(ambientRef.current, {
                y: -40,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Cursor parallax (very subtle)
    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        gsap.to(containerRef.current, {
            x,
            y,
            duration: 0.6,
            ease: 'power2.out',
        });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen text-white mt-48"
        >
            {/* Ambient background */}
            <div
                ref={ambientRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full -z-10"
            />

            {/* Content */}
            <div className="pl-10 sm:pl-18 max-w-xl">
                <h1
                    ref={titleRef}
                    className=" text-4xl sm:text-6xl md:text-4xl font-extrabold  mb-6"
                >
                    Designing Interfaces That Move
                </h1>


                <p
                    ref={subtitleRef}
                    className="text-zinc-400 text-lg mb-10 max-w-md"
                >
                    Front-end engineer focused on motion, performance, and clarity.
                </p>

                <button
                    ref={ctaRef}
                    className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:translate-x-1 hover:shadow-xl transition"
                >
                    Explore Work →
                </button>
            </div>
        </section>
    );
}

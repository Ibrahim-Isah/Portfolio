'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" className="relative" ref={containerRef}>
            {/* Glass background effect */}
            <div className="absolute inset-0 bg-gradient-to-bl from-ash-900/20 via-transparent to-white/5 pointer-events-none" />

            <div className="container relative z-10">
                <SectionTitle title="My Tech Stack" />

                <div className="space-y-16">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12 gap-8" key={key}>
                            <div className="sm:col-span-4">
                                <div className="glass-card p-6 rounded-xl h-full flex items-center">
                                    <p className="slide-up text-4xl md:text-5xl font-anton leading-none text-gradient uppercase">
                                        {key.replace('_', ' ')}
                                    </p>
                                </div>
                            </div>

                            <div className="sm:col-span-8">
                                <div className="glass-card p-6 rounded-xl">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {value.map((item) => (
                                            <div
                                                className="slide-up group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                                                key={item.name}
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.name}
                                                        width="32"
                                                        height="32"
                                                        className="max-h-8 max-w-8 object-contain"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-ash-300 group-hover:text-white transition-colors duration-300 text-center">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <div className="mt-20 glass-card p-8 rounded-xl">
                    <h3 className="text-2xl font-anton text-white mb-6">
                        Additional Expertise
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-2">
                                Performance Optimization
                            </h4>
                            <p className="text-ash-300 text-sm">
                                Code Splitting, Lazy Loading, Bundle
                                Optimization
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-2">
                                Testing
                            </h4>
                            <p className="text-ash-300 text-sm">
                                Jest, Cypress, React Testing Library
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-2">
                                State Management
                            </h4>
                            <p className="text-ash-300 text-sm">
                                Redux, Context API, Zustand, React Query
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-2">
                                Architecture
                            </h4>
                            <p className="text-ash-300 text-sm">
                                Micro-frontends, Enterprise-grade Solutions
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-2">
                                Documentation
                            </h4>
                            <p className="text-ash-300 text-sm">
                                Storybook, Technical Writing, API Documentation
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-2">
                                Real-time Features
                            </h4>
                            <p className="text-ash-300 text-sm">
                                WebSocket, LiveKit, Video/Audio Calls
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

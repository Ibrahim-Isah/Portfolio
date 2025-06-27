'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 80,
                opacity: 0,
                stagger: 0.3,
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
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -200,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section relative" id="my-experience">
            {/* Glass background effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-ash-900/20 pointer-events-none" />

            <div className="container relative z-10" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-8">
                    {MY_EXPERIENCE.map((item, index) => (
                        <div
                            key={`${item.company}-${item.title}-${index}`}
                            className="experience-item"
                        >
                            <div className=" glass-card p-8 rounded-xl hover:glow-effect transition-all duration-500">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div className="flex-1">
                                        <p className="text-xl text-ash-300 mb-2">
                                            {item.company}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-anton leading-none text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-ash-400 mb-2">
                                            {item.duration}
                                        </p>
                                        {item.location && (
                                            <p className="text-sm text-ash-500">
                                                📍 {item.location}
                                            </p>
                                        )}
                                    </div>
                                    <div className="text-right mt-4 md:mt-0">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>

                                {item.description && (
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-ash-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement highlights */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="glass-card p-6 rounded-xl text-center">
                        <div className="text-3xl font-anton text-white mb-2">
                            10K+
                        </div>
                        <div className="text-ash-300">
                            Daily Active Users Managed
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl text-center">
                        <div className="text-3xl font-anton text-white mb-2">
                            90%+
                        </div>
                        <div className="text-ash-300">
                            Test Coverage Achieved
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl text-center">
                        <div className="text-3xl font-anton text-white mb-2">
                            3
                        </div>
                        <div className="text-ash-300">Countries Launched</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;

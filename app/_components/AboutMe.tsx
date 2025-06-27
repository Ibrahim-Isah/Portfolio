'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section relative" id="about-me">
            {/* Glass background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-ash-900/20 via-transparent to-white/5 pointer-events-none" />

            <div className="container relative z-10" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade text-gradient leading-tight">
                    I believe in building scalable, maintainable solutions that
                    serve thousands of users while maintaining high availability
                    and exceptional performance.
                </h2>

                <p className="pb-3 border-b border-white/20 text-ash-300 slide-up-and-fade">
                    About me
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                    <div className="md:col-span-5">
                        <div className="glass-card p-8 rounded-xl">
                            <p className="text-4xl md:text-5xl slide-up-and-fade text-white font-light leading-tight">
                                Hi, I&apos;m Isah Abba Ibrahim.
                            </p>
                            <div className="mt-6 space-y-2">
                                <div className="text-ash-300 slide-up-and-fade">
                                    📍 Based in Nigeria
                                </div>
                                <div className="text-ash-300 slide-up-and-fade">
                                    🎓 Computer Science Graduate (4.03/5.00
                                    CGPA)
                                </div>
                                <div className="text-ash-300 slide-up-and-fade">
                                    🏆 Certified Fullstack Developer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-ash-300 space-y-6">
                            <div className="glass-card p-6 rounded-xl">
                                <p className="slide-up-and-fade">
                                    I&apos;m a seasoned Senior Frontend
                                    Developer with 5+ years of experience
                                    building scalable SaaS applications and
                                    complex enterprise systems. I specialize in
                                    React, TypeScript, and modern web
                                    technologies that power applications serving
                                    thousands of users.
                                </p>
                            </div>

                            <div className="glass-card p-6 rounded-xl">
                                <p className="slide-up-and-fade">
                                    My expertise spans from developing
                                    AI-powered interview software with real-time
                                    video calls to leading the successful launch
                                    of applications across multiple countries.
                                    I&apos;ve increased test coverage from 70%
                                    to 90%+, reduced production issues by 50%,
                                    and built chat features handling 10K+ daily
                                    active users.
                                </p>
                            </div>

                            <div className="glass-card p-6 rounded-xl">
                                <p className="slide-up-and-fade">
                                    I believe in writing clean, maintainable
                                    code and leading teams through complex
                                    technical challenges. Whether it&apos;s
                                    migrating legacy JavaScript to TypeScript or
                                    optimizing performance for enterprise
                                    applications, I focus on delivering
                                    solutions that drive real business value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

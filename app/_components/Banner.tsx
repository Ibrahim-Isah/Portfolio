'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            {/* Glass overlay for modern effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-ash-900/20 pointer-events-none" />

            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col relative z-3"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[600px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-gradient">SENIOR</span>
                        <br />
                        <span className="ml-4 text-white">FRONTEND</span>
                        <br />
                        <span className="text-ash-300">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-ash-300 leading-relaxed">
                        Hi! I&apos;m{' '}
                        <span className="font-semibold text-white">
                            Isah Abba Ibrahim
                        </span>
                        . A seasoned Senior Frontend Developer with 5+ years of
                        experience building scalable SaaS applications and
                        complex enterprise systems using React, TypeScript, and
                        modern web technologies.
                    </p>
                    <div className="flex gap-4 mt-9">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}&su=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
                            variant="primary"
                            className="banner-button slide-up-and-fade glass-button glow-effect"
                        >
                            Hire Me
                        </Button>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hashnode.com/@IsahAbraham"
                            variant="secondary"
                            className="banner-button slide-up-and-fade glass-button"
                        >
                            Technical Writing
                        </Button>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade glass-card p-4 rounded-lg">
                        <h5 className="text-3xl sm:text-4xl font-anton text-white mb-1.5 glow-effect">
                            5+
                        </h5>
                        <p className="text-ash-300">Years of Experience</p>
                    </div>
                    <div className="slide-up-and-fade glass-card p-4 rounded-lg">
                        <h5 className="text-3xl sm:text-4xl font-anton text-white mb-1.5 glow-effect">
                            50K+
                        </h5>
                        <p className="text-ash-300">
                            Daily Active Users Served
                        </p>
                    </div>
                    <div className="slide-up-and-fade glass-card p-4 rounded-lg">
                        <h5 className="text-3xl sm:text-4xl font-anton text-white mb-1.5 glow-effect">
                            90%+
                        </h5>
                        <p className="text-ash-300">Test Coverage Achieved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

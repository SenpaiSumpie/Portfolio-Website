'use client';

import Image from 'next/image';

import React, { useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { motion, useScroll } from 'framer-motion';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import '@/styles/App.scss';

import particlesSettings from '@/assets/json/particles';
import SelectedWorks from '@/components/SelectedWorks';
import MoreProjects from '@/components/MoreProjects';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
    const { scrollYProgress } = useScroll();

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <>
            <motion.div
                className="ProgressBar"
                style={{ scaleX: scrollYProgress }}
            />

            <div className="relative z-0 bg-primary">
                <Navbar />
                <div id="main-content" className="MainContent">
                    <div className="MainContent__SmoothProvider">
                        <div className="MainContent__Content">
                            {/* <span className='InProgress'> Site is in progress, working on Project links </span> */}

                            <Hero />
                            <SectionDivider />
                            <div class="w-full MainContent__Content__Container">
                                <Particles
                                    id="particles"
                                    options={particlesSettings}
                                    init={particlesInit}
                                    loaded={particlesLoaded}
                                />
                                <SelectedWorks />
                                <SectionDivider />
                                <MoreProjects />
                                <SectionDivider />
                            </div>

                            {/* Contact CTA Strip */}
                            <div
                                id="contact-cta"
                                className="py-16 px-6 max-w-7xl mx-auto text-center"
                                data-aos="fade-up"
                            >
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 tracking-wider">
                                    LET’S BUILD SOMETHING
                                </h3>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="mailto:max.lee.mosier@gmail.com"
                                        className="group relative bg-[var(--magenta-500)] hover:bg-[var(--magenta-300)] text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 filter drop-shadow-[0_0_8px_var(--magenta-300)] hover:drop-shadow-[0_0_8px_var(--cyan-300)] hover:ring-1 hover:ring-[var(--cyan-500)] ring-offset-2 ring-offset-black focus:outline-none focus:ring-2 focus:ring-[var(--cyan-500)] focus:ring-offset-2 focus:ring-offset-black"
                                    >
                                        Email
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/max-mosier/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative border-2 border-[var(--cyan-500)] hover:border-white text-[var(--cyan-500)] hover:text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_var(--cyan-300)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan-500)] focus:ring-offset-2 focus:ring-offset-black"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/SenpaiSumpie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative border-2 border-vhs-purple hover:border-white text-vhs-purple hover:text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_var(--cyan-300)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan-500)] focus:ring-offset-2 focus:ring-offset-black"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <div className="Footer">
                                <p className="Footer__Text">
                                    <span className="Footer__Text__Name">
                                        Max Mosier
                                    </span>{' '}
                                    |
                                    <a
                                        href="https://www.linkedin.com/in/max-mosier/"
                                        target="_blank"
                                        className="Footer__Text__Link"
                                    >
                                        LINKEDIN
                                    </a>{' '}
                                    &nbsp;
                                    <a
                                        href="https://github.com/SenpaiSumpie"
                                        target="_blank"
                                        className="Footer__Text__Link"
                                    >
                                        GITHUB
                                    </a>{' '}
                                    &nbsp;
                                    <a
                                        href="mailto:max.lee.mosier@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer__Text__Link"
                                    >
                                        CONTACT
                                    </a>{' '}
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

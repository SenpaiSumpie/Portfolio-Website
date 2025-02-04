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
import OtherWorks from '@/components/OtherWorks';

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
                            <div class="w-full MainContent__Content__Container">
                                <Particles
                                    id="particles"
                                    options={particlesSettings}
                                    init={particlesInit}
                                    loaded={particlesLoaded}
                                />
                                <SelectedWorks />
                                <OtherWorks />
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

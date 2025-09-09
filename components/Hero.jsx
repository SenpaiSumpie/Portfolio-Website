'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import DownArrow from '@/assets/down-arrow.svg';

import { SectionWrapper } from '../hoc';

// Social Media Icons
import LinkedIn from '@/assets/linked-in-mono.svg';
import Github from '@/assets/github-mono.svg';
import Email from '@/assets/email.svg';

// Profile Image
import MaxMosier from '@/assets/MaxImage.jpg';

// Tech Stack Icons
import ReactLogo from '@/assets/tech/react.svg';
import NextJSLogo from '@/assets/tech/next-js.svg';
import Tailwind from '@/assets/tech/tailwind.png';
import SCSSLogo from '@/assets/tech/scss.svg';
import HTML from '@/assets/tech/html5.svg';
import CSS from '@/assets/tech/css3.svg';
import TypeScript from '@/assets/tech/typescript.svg';

// Tilt
import { Tilt } from 'react-tilt';

//******** AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemLayout from './ItemLayout';

/***********************************************************************/
/*                               HERO                                  */
/***********************************************************************/

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
    }, []);

    return (
        <section className="Hero">
            {/* https://codepen.io/RockStarwind/pen/bGYVGQb */}
            <div className="overlays" style={{ '--start': Math.random() * 10 }}>
                <div className="overlay" id="overlay_sky"></div>
                <div className="overlay" id="overlay_stars"></div>
                <div className="overlay overlay_sun" id="overlay_sun">
                    <div className="overlay_sun-sun" id="overlay_sun-sun"></div>
                </div>
                <div className="overlay overlay_sun" id="overlay_sun2">
                    <div
                        className="overlay_sun-sun"
                        id="overlay_sun2-sun"
                    ></div>
                </div>
                <div className="overlay overlay_sun" id="overlay_sun3">
                    <div
                        className="overlay_sun-sun"
                        id="overlay_sun3-sun"
                    ></div>
                </div>
                <div className="overlay" id="overlay_floor">
                    <div id="overlay_floor-color"></div>
                    <div id="overlay_floor-grid"></div>
                    <div id="overlay_floor-horizon"></div>
                    <div id="overlay_floor-horizon2"></div>
                </div>
                <div className="overlay overlay_mountain" id="overlay_mountain">
                    <div
                        className="overlay_mountain-mountain"
                        id="overlay_mountain-mountain"
                    ></div>
                </div>
                <div className="overlay" id="overlay_overlay"></div>
            </div>
            {/* Dark gradient overlay for readability */}

            <div className="Hero__Content relative z-20">
                <ItemLayout className={'col-span-full'}>
                    <div className="Hero__Inner">
                        <div className="Hero__Content__Overview">
                            <div className="relative inline-block">
                                {/* Subtle gradient plate for readability */}
                                <div className="pointer-events-none absolute -inset-x-2 -inset-y-[2px] rounded-xl bg-gradient-to-b from-black/25 via-black/10 to-transparent"></div>
                                <h1
                                    className="relative font-display text-[clamp(2.2rem,6vw,5rem)] leading-tight font-bold text-white text-center md:text-left mb-4 text-balance tracking-tight filter drop-shadow-[0_0_1px_rgba(255,255,255,0.55)] drop-shadow-[0_0_5px_rgba(255,0,160,0.32)] md:drop-shadow-[0_0_7px_rgba(255,0,160,0.28)]"
                                    data-aos="fade-up"
                                >
                                    FRONTEND ENGINEER{' '}
                                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                                    <span className="text-[var(--cyan-500)]">
                                        {'//'}
                                    </span>{' '}
                                    SYNTHWAVE STORYTELLER
                                </h1>
                                <p
                                    className="relative text-lg md:text-xl text-gray-300 max-w-2xl text-center md:text-left leading-relaxed text-balance"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Crafting immersive digital experiences with
                                    modern web technologies and retro-futuristic
                                    aesthetics.
                                </p>
                            </div>
                            {/* VHS Player Control Buttons */}
                            <div
                                className="flex flex-col sm:flex-row gap-5 mt-8 justify-center md:justify-start"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                {/* Primary: PLAY button */}
                                <a
                                    href="#works"
                                    className="group relative bg-[var(--magenta-500)] hover:bg-[var(--cyan-500)] text-white hover:text-black font-display font-bold py-4 px-8 rounded-lg transition-all duration-300 filter drop-shadow-[0_0_8px_var(--magenta-300)] hover:drop-shadow-[0_0_8px_var(--cyan-300)] hover:ring-1 hover:ring-[var(--cyan-500)] ring-offset-2 ring-offset-black transform hover:scale-105 flex items-baseline justify-center gap-3 min-w-[200px] w-full sm:w-auto"
                                >
                                    <span className="text-xl">PLAY</span>
                                    <span className="text-2xl">▶</span>
                                    <div className="absolute inset-0 bg-[var(--cyan-500)] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                                </a>

                                {/* Secondary: VIEW REEL button */}
                                <a
                                    href="#other"
                                    className="group relative border-2 border-[var(--cyan-500)] text-[var(--cyan-500)] hover:bg-[var(--magenta-500)] hover:text-white hover:border-[var(--magenta-500)] font-display font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_var(--cyan-300)] transform hover:scale-105 flex items-baseline justify-center gap-3 min-w-[200px] w-full sm:w-auto"
                                >
                                    <span className="text-xl">VIEW REEL</span>
                                    <span className="text-2xl">▌▌▶</span>
                                    <div className="absolute inset-0 bg-neon-cyan opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                                </a>
                                {/* Scroll Cue */}
                                <a
                                    href="#works"
                                    className="mt-6 inline-flex items-center gap-3 self-center md:self-start text-sm text-gray-300 hover:text-white opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--cyan-500)] focus:ring-offset-2 focus:ring-offset-black rounded px-3 py-2"
                                    aria-label="Scroll to selected works"
                                >
                                    <span className="font-mono text-xs bg-black/60 px-2 py-1 rounded">
                                        SCROLL ▌► 00:00:05
                                    </span>
                                </a>
                            </div>

                            {/* Social Links - Smaller, below buttons */}
                            <div
                                className="flex gap-4 mt-6 justify-center md:justify-start"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <a
                                    href="https://www.linkedin.com/in/max-mosier/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-[var(--cyan-500)] transition-colors duration-300 group"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Image
                                        src={LinkedIn}
                                        alt=""
                                        className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-180"
                                    />
                                </a>
                                <a
                                    href="https://github.com/SenpaiSumpie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-[var(--cyan-500)] transition-colors duration-300 group"
                                    aria-label="GitHub Profile"
                                >
                                    <Image
                                        src={Github}
                                        alt=""
                                        className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-180"
                                    />
                                </a>
                                <a
                                    href="mailto:max.lee.mosier@gmail.com"
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-[var(--cyan-500)] transition-colors duration-300 group"
                                    aria-label="Send Email"
                                >
                                    <Image
                                        src={Email}
                                        alt=""
                                        className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-180"
                                    />
                                </a>
                            </div>
                            {/* Skills Row with grouped icons */}
                            <div
                                className="mt-12 w-full"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Frontend */}
                                    <div className="text-center">
                                        <h3 className="font-display text-[var(--cyan-500)] text-lg mb-4 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]">
                                            FRONTEND
                                        </h3>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Frontend Technologies"
                                            title="JavaScript, HTML, CSS, React, TypeScript, Next.js, Sass, Figma"
                                            aria-label="Frontend technologies: JavaScript, HTML, CSS, React, TypeScript, Next.js, Sass, Figma"
                                            className="w-full h-auto opacity-80 saturate-[.8] hover:opacity-100 hover:saturate-100 focus:opacity-100 focus:saturate-100 transition"
                                            src="https://skillicons.dev/icons?i=js,html,css,react,typescript,nextjs,sass,figma"
                                        />
                                    </div>

                                    {/* Backend */}
                                    <div className="text-center">
                                        <h3 className="font-display text-[var(--cyan-500)] text-lg mb-4 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]">
                                            BACKEND
                                        </h3>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Backend Technologies"
                                            title="Node.js, Express, MySQL, PostgreSQL, Docker, Azure"
                                            aria-label="Backend technologies: Node.js, Express, MySQL, PostgreSQL, Docker, Azure"
                                            className="w-full h-auto opacity-80 saturate-[.8] hover:opacity-100 hover:saturate-100 focus:opacity-100 focus:saturate-100 transition"
                                            src="https://skillicons.dev/icons?i=nodejs,express,mysql,postgres,docker,azure"
                                        />
                                    </div>

                                    {/* Tools */}
                                    <div className="text-center">
                                        <h3 className="font-display text-[var(--cyan-500)] text-lg mb-4 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]">
                                            TOOLS
                                        </h3>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Development Tools"
                                            title="Git, GitHub, VS Code, npm, Vercel, Postman"
                                            aria-label="Tools: Git, GitHub, VS Code, npm, Vercel, Postman"
                                            className="w-full h-auto opacity-80 saturate-[.8] hover:opacity-100 hover:saturate-100 focus:opacity-100 focus:saturate-100 transition"
                                            src="https://skillicons.dev/icons?i=git,github,vscode,npm,vercel,postman"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portrait with chromatic aberration */}
                        <div
                            className="Hero__Content__Image relative"
                            data-aos="fade-left"
                        >
                            <div className="relative group w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg">
                                {/* Chromatic aberration shadows */}
                                <div className="absolute inset-0 translate-x-1 translate-y-1 opacity-30">
                                    <Image
                                        src={MaxMosier}
                                        alt=""
                                        fill
                                        className="object-cover filter hue-rotate-180"
                                        style={{
                                            filter: 'hue-rotate(180deg) saturate(2)'
                                        }}
                                    />
                                </div>
                                <div className="absolute inset-0 -translate-x-1 -translate-y-1 opacity-30">
                                    <Image
                                        src={MaxMosier}
                                        alt=""
                                        fill
                                        className="object-cover filter hue-rotate-90"
                                        style={{
                                            filter: 'hue-rotate(90deg) saturate(2)'
                                        }}
                                    />
                                </div>

                                {/* Main portrait with neon corner brackets + soft glow */}
                                <div className="relative z-10">
                                    {/* Corner brackets */}
                                    <span className="absolute -top-2 -left-2 w-6 h-6 border-t-[2px] border-l-[2px] border-[var(--cyan-500)] drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]"></span>
                                    <span className="absolute -top-2 -right-2 w-6 h-6 border-t-[2px] border-r-[2px] border-neon-cyan drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]"></span>
                                    <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-[2px] border-l-[2px] border-neon-cyan drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]"></span>
                                    <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[2px] border-r-[2px] border-neon-cyan drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]"></span>
                                    <span className="absolute inset-1 rounded-lg border border-[var(--cyan-500)] opacity-25 pointer-events-none drop-shadow-[0_0_6px_#00F0FF]"></span>
                                    <div className="relative">
                                        <Image
                                            src={MaxMosier}
                                            alt="Max Mosier - Frontend Engineer"
                                            fill
                                            className="object-cover"
                                            priority
                                            placeholder="blur"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ItemLayout>
                {/* <div className="Hero__TechStack" data-aos="fade-right">
                    <span className="Hero__TechStack__Intro">
                        {' '}
                        Tech Stack |
                    </span>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={HTML} alt="HTML" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={CSS} alt="CSS" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={TypeScript} alt="TypeScript" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={ReactLogo} alt="ReactLogo" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={NextJSLogo} alt="NextJSLogo" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={Tailwind} alt="Tailwind" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={SCSSLogo} alt="Scss" />
                    </Tilt>
                </div> */}
            </div>
        </section>
    );
};

export default SectionWrapper(Hero, 'hero');

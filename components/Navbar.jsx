'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { styles } from '@/hoc/styles';
import { navLinks } from '@/constants/constants';
import { menu, close } from '@/assets';

import '@/styles/App.scss';

//******** AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Navbar() {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });

        // Scroll effect for blurred glass and neon border
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus trap for mobile drawer
    useEffect(() => {
        if (toggle) {
            const focusableElements = document.querySelectorAll(
                '.mobile-nav a, .mobile-nav button'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleTabKey = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement?.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement?.focus();
                            e.preventDefault();
                        }
                    }
                }
                if (e.key === 'Escape') {
                    setToggle(false);
                }
            };

            document.addEventListener('keydown', handleTabKey);
            firstElement?.focus();

            return () => document.removeEventListener('keydown', handleTabKey);
        }
    }, [toggle]);
    // Highlight current section link via IntersectionObserver
    useEffect(() => {
        const ids = navLinks.map((n) => n.id);
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((el) => observer.observe(el));

        return () => {
            sections.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div
                className={`w-full flex justify-between items-center max-w-7xl mx-auto rounded-md transition-all duration-300 ${
                    scrolled
                        ? 'bg-[var(--glass-bg)] backdrop-blur-sm md:backdrop-blur-[var(--glass-blur)] border-b-2 border-[var(--magenta-500)] filter drop-shadow-[0_0_8px_var(--magenta-300)]'
                        : 'bg-stone-100/20 border border-stone-200/20'
                }`}
                data-aos="fade-down"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 z-20 pl-5 group"
                    aria-label="Home"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white font-display font-bold cursor-pointer flex text-lg tracking-wider animate-flicker group-hover:text-[var(--cyan-500)] transition-colors duration-300">
                        MAX MOSIER
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-8 pr-5">
                    {navLinks.map((link, index) => (
                        <li key={index} className="relative group">
                            <a
                                href={`#${link.id}`}
                                aria-current={
                                    active === link.id ? 'true' : undefined
                                }
                                className={`cursor-pointer text-[18px] font-medium transition-all duration-300 relative ${
                                    active === link.id
                                        ? 'text-white'
                                        : 'text-gray-300'
                                } hover:text-[var(--cyan-500)] group-hover:filter group-hover:drop-shadow-[0_0_8px_var(--cyan-300)]`}
                                onClick={() => setActive(link.id)}
                            >
                                {link.title}
                                {/* Active state: magenta underline */}
                                {active === link.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--magenta-500)] filter drop-shadow-[0_0_8px_var(--magenta-300)]"></span>
                                )}
                                {/* Hover state: cyan glow */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--cyan-500)] filter drop-shadow-[0_0_8px_var(--cyan-300)] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <button
                        className="w-11 h-11 flex items-center justify-center cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-[var(--cyan-500)] focus:ring-offset-2 focus:ring-offset-transparent rounded-md"
                        onClick={() => setToggle(!toggle)}
                        aria-label={toggle ? 'Close menu' : 'Open menu'}
                        aria-expanded={toggle}
                        aria-controls="mobile-navigation"
                    >
                        <Image
                            src={toggle ? close : menu}
                            alt=""
                            className="w-[28px] h-[28px] object-contain"
                        />
                    </button>

                    {/* Mobile Navigation Drawer */}
                    <div
                        id="mobile-navigation"
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } mobile-nav fixed inset-0 bg-midnight/95 backdrop-blur-sm z-40 transition-all duration-300`}
                        aria-hidden={!toggle}
                    >
                        <div className="flex flex-col w-full h-full justify-center items-center">
                            <ul className="list-none flex flex-col gap-8 text-center">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${link.id}`}
                                            aria-current={
                                                active === link.id
                                                    ? 'true'
                                                    : undefined
                                            }
                                            className={`cursor-pointer text-2xl font-medium transition-all duration-300 py-4 px-8 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center ${
                                                active === link.id
                                                    ? 'text-[var(--magenta-500)] shadow-neon-magenta'
                                                    : 'text-gray-300'
                                            } hover:text-[var(--cyan-500)] hover:filter hover:drop-shadow-[0_0_8px_var(--cyan-300)] focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-transparent`}
                                            onClick={() => {
                                                setActive(link.id);
                                                setToggle(false);
                                            }}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

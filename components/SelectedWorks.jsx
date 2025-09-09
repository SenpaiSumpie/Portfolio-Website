'use client';

import React, { useEffect } from 'react';
import '@/styles/App.scss';
import { SectionWrapper } from '../hoc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { selectedWorks } from '../constants/constants';
import VHSProjectCard from './VHSProjectCard';

const SelectedWorks = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
    }, []);

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--magenta-500)] mb-4">
                    SELECTED WORKS
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[var(--magenta-500)] to-[var(--cyan-500)] mx-auto"></div>
            </div>
            {/* Project Cards */}
            <div className="space-y-8">
                {selectedWorks.map((project, index) => (
                    <VHSProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(SelectedWorks, 'works');

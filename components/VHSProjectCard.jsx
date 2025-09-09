'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHub from '@/assets/github-mono.svg';
import FigmaIcon from '@/assets/figma-mono.svg';
import LinkIcon from '@/assets/link.svg';

const VHSProjectCard = ({ project, index, isReversed = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [staticFlash, setStaticFlash] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Trigger static flash effect
        setStaticFlash(true);
        setTimeout(() => setStaticFlash(false), 100);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCardClick = () => {
        if (project.liveSiteLink) {
            window.open(project.liveSiteLink, '_blank');
        }
    };

    // Rotate VHS status label across cards
    const statuses = ['PLAY ▌►', 'PAUSE ▌▌', 'REC ⬤'];
    const statusLabel = statuses[index % statuses.length];

    return (
        <motion.div
            className={`cursor-pointer flex flex-col lg:flex-row gap-8 mb-16 ${
                isReversed ? 'lg:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={handleCardClick}
            role="link"
            aria-label={`Open ${project.name} project`}
            title={`Open ${project.name} project`}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter') handleCardClick();
            }}
        >
            {/* Project Thumbnail with VHS Frame */}
            <div
                className="lg:w-1/2 relative group cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
            >
                {/* VHS Frame Container */}
                <div className="relative bg-black p-2 rounded-xl border-2 border-gray-800 shadow-2xl">
                    {/* VHS Timestamp Badge */}
                    <div className="absolute top-[10px] right-[10px] z-20 bg-black/80 text-[var(--cyan-500)] font-mono text-[11px] px-2 py-1 rounded">
                        00:12:04 {statusLabel}
                    </div>

                    {/* Static Flash Overlay */}
                    {staticFlash && (
                        <div className="absolute inset-0 bg-white opacity-[0.06] z-10 rounded-xl animate-static-flash"></div>
                    )}

                    {/* Main Image with 16:9 aspect ratio */}
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className={`object-cover transition-all duration-300 ${
                                isHovered ? 'animate-tracking scale-105' : ''
                            }`}
                        />

                        {/* Hover overlay */}
                        <div
                            className={`absolute inset-0 bg-[var(--magenta-300)]/20 transition-opacity duration-300 ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                        ></div>
                    </div>

                    {/* VHS-style progress indicator */}
                    {project.progressText && (
                        <div className="absolute bottom-4 left-4 bg-[var(--bg-800)]/90 text-white text-xs px-3 py-1 rounded font-mono">
                            {project.progressText}
                        </div>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                {/* Project Title */}
                <h3 className="font-display text-[34px] lg:text-[38px] font-bold text-white">
                    {project.name}
                </h3>

                {/* Project Blurb */}
                <p className="text-neon-cyan text-lg font-medium">
                    {project.blurb}
                </p>

                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed max-w-prose md:max-w-[60ch]">
                    {project.about}
                </p>

                {/* Tech Stack - Sticker Style */}
                <div className="flex flex-wrap gap-3 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="inline-block px-3 py-1 text-sm font-medium rounded-lg shadow-lg transform transition-transform hover:scale-105"
                            style={{
                                backgroundColor: tech.primaryColor,
                                color: tech.textColor,
                                transform: `rotate(${
                                    ((techIndex % 3) - 1) * 2
                                }deg)`,
                                boxShadow:
                                    'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)'
                            }}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {project.liveSiteLink && (
                        <a
                            href={project.liveSiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[var(--magenta-500)] hover:bg-[var(--magenta-300)] text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 filter drop-shadow-[0_0_8px_var(--magenta-300)] hover:drop-shadow-[0_0_8px_var(--cyan-300)] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--cyan-500)] focus:ring-offset-2 focus:ring-offset-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span>LIVE DEMO</span>
                            <Image src={LinkIcon} alt="" className="w-4 h-4" />
                        </a>
                    )}

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border-2 border-[var(--cyan-500)] hover:border-white text-[var(--cyan-500)] hover:text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_var(--cyan-300)] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span>GITHUB</span>
                            <Image src={GitHub} alt="" className="w-4 h-4" />
                        </a>
                    )}

                    {project.figmaLink && (
                        <a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border-2 border-[var(--sunset-500)] hover:border-white text-[var(--sunset-500)] hover:text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_var(--sunset-500)] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span>FIGMA</span>
                            <Image src={FigmaIcon} alt="" className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default VHSProjectCard;

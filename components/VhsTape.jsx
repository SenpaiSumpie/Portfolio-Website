'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const colorMap = {
    magenta: 'from-[#2a0b20] to-[#1b0816] border-[var(--magenta-500)]',
    cyan: 'from-[#0a1c22] to-[#061219] border-[var(--cyan-500)]',
    sunset: 'from-[#2a170c] to-[#1b0e07] border-[#FF8A00]',
    mono: 'from-[#1a1824] to-[#12101a] border-white/30'
};

export default function VhsTape({
    href,
    title,
    spineTitle,
    image,
    stickers = [],
    year,
    color = 'mono',
    github,
    fontClass,
    spineSizeClass
}) {
    const tone = colorMap[color] || colorMap.mono;
    return (
        <li className="group relative snap-start shrink-0 h-full overflow-visible">
            <Link
                href={href || '#'}
                aria-label={`Open ${title} (Live Demo)`}
                title={title}
                className={[
                    'relative block h-full w-[88px] md:w-[110px] group-hover:w-[320px] focus-visible:w-[320px]',
                    'rounded-[10px] border-2 bg-gradient-to-b',
                    tone,
                    // subtle texture & lighting
                    'before:absolute before:inset-0 before:rounded-[8px]',
                    'before:bg-[linear-gradient(0deg,rgba(255,255,255,.06),transparent_35%,transparent_65%,rgba(0,0,0,.12))] before:pointer-events-none',
                    // hover/eject effect
                    'transition-[width,transform] duration-300 ease-out will-change-transform perspective-[800px]',
                    'motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:[transform:rotateY(6deg)]',
                    'motion-reduce:transform-none motion-reduce:hover:transform-none',
                    'drop-shadow-[0_8px_16px_rgba(0,0,0,.35)] overflow-hidden'
                ].join(' ')}
            >
                {/* top lip */}
                <span
                    className="absolute inset-x-0 top-0 h-[10px] rounded-t-[7px] bg-black/35"
                    aria-hidden
                />

                {/* vertical spine label */}
                <span className="absolute inset-0 flex items-center justify-center">
                    <span
                        className={[
                            '[writing-mode:vertical-rl] [text-orientation:mixed] text-[var(--text-100)] font-semibold tracking-wide [text-shadow:0_0_1px_rgba(255,255,255,0.5)]',
                            spineSizeClass || 'text-sm md:text-base',
                            fontClass
                        ]
                            .filter(Boolean)
                            .join(' ')}
                    >
                        {spineTitle}
                    </span>
                </span>

                {/* stickers near bottom of spine */}
                <span className="absolute left-1 right-1 bottom-3 flex flex-col items-center gap-1">
                    {stickers.map((s) => (
                        <span
                            key={s}
                            className={[
                                'px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide border',
                                s === 'Client' &&
                                    'bg-[var(--cyan-500)]/15 text-[var(--cyan-300)] border-[var(--cyan-300)]/40',
                                s === 'Experiments' &&
                                    'bg-[var(--magenta-500)]/12 text-[var(--magenta-300)] border-[var(--magenta-300)]/40',
                                s !== 'Client' &&
                                    s !== 'Experiments' &&
                                    'bg-white/10 text-white/80 border-white/30'
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {s}
                        </span>
                    ))}
                </span>

                {/* expanded detail area (revealed on hover/focus) */}
                <div className="absolute inset-0 md:left-[110px] left-[88px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                    {/* background cover image rotated to match VHS vibe */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="relative w-full h-full">
                            {image ? (
                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    className="object-cover opacity-35 rotate-90 origin-center scale-125"
                                    sizes="(max-width: 768px) 60vw, 30vw"
                                />
                            ) : null}
                        </div>
                    </div>
                    {/* subtle overlay and content */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-3 gap-2">
                        <p className="text-xs text-[var(--text-300)]">
                            {stickers[0]}
                        </p>
                        <h3 className="text-base md:text-lg font-bold text-[var(--text-100)] line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-[11px] text-[var(--text-200)]">
                            Click to open Live Demo
                        </p>
                    </div>
                </div>

                {/* focus ring */}
                <span
                    className="absolute inset-0 rounded-[10px] ring-0 ring-[var(--cyan-500)]/70 group-focus-visible:ring-4 transition"
                    aria-hidden
                />
            </Link>

            {/* secondary actions appear below (desktop only) */}
            {github && (
                <div className="hidden md:flex mt-2 justify-center gap-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener"
                        className="text-xs px-2 py-1 rounded-md border border-white/20 text-white/80 hover:bg-white/10"
                    >
                        GitHub
                    </a>
                </div>
            )}
        </li>
    );
}

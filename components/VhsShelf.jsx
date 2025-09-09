'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import VhsTape from './VhsTape';
import { clientWork, liveWebsites, threeJS } from '@/constants/constants';

export default function VhsShelf() {
    const listRef = useRef(null);

    const items = useMemo(() => {
        const mapItem = (p, category) => ({
            key: p.id,
            href: p.link,
            title: p.name,
            image: p.image,
            spineTitle: (
                p.vhs?.spineTitle ||
                p.shortName ||
                p.name ||
                ''
            ).slice(0, 24),
            stickers: p.vhs?.stickers?.length ? p.vhs.stickers : [category],
            year: p.vhs?.year,
            color:
                p.vhs?.labelColor ||
                (category === 'Client' ? 'cyan' : 'magenta'),
            fontClass: p.vhs?.fontClass,
            spineSizeClass: p.vhs?.spineSizeClass,
            github: p.github
        });
        const client = clientWork.map((p) => mapItem(p, 'Client'));
        const experiments = [...liveWebsites, ...threeJS].map((p) =>
            mapItem(p, 'Experiments')
        );
        return [...client, ...experiments];
    }, []);

    const onKeyDown = (e) => {
        const el = listRef.current;
        if (!el) return;
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            el.scrollBy({ left: 200, behavior: 'smooth' });
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            el.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    // carousel state
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;
        const update = () => {
            setCanLeft(el.scrollLeft > 0);
            setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
        };
        update();
        el.addEventListener('scroll', update, { passive: true });
        const onResize = () => update();
        window.addEventListener('resize', onResize);
        return () => {
            el.removeEventListener('scroll', update);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const page = (dir) => {
        const el = listRef.current;
        if (!el) return;
        const delta =
            Math.round(el.clientWidth * 0.9) * (dir === 'right' ? 1 : -1);
        el.scrollBy({ left: delta, behavior: 'smooth' });
    };

    return (
        <section
            id="more-projects"
            className="w-screen h-screen md:h-[50vh] overflow-hidden"
        >
            <h2 className="sr-only">More Projects</h2>

            <div className="relative h-full">
                {/* shelf line */}
                <div className="absolute inset-x-0 bottom-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan-500)]/60 to-transparent blur-[1px] pointer-events-none" />

                {/* carousel controls */}
                <button
                    type="button"
                    aria-label="Previous"
                    onClick={() => page('left')}
                    disabled={!canLeft}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-black/40 border border-white/10 text-white/80 hover:bg-black/60 disabled:opacity-30"
                >
                    ‹
                </button>
                <button
                    type="button"
                    aria-label="Next"
                    onClick={() => page('right')}
                    disabled={!canRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-black/40 border border-white/10 text-white/80 hover:bg-black/60 disabled:opacity-30"
                >
                    ›
                </button>

                <ul
                    ref={listRef}
                    role="list"
                    aria-label="VHS projects shelf"
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    className="flex items-stretch h-full gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory px-8"
                >
                    {items.map((p) => (
                        <VhsTape key={p.key} {...p} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

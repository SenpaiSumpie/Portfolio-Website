'use client';

import React from 'react';
import { SectionWrapper } from '../hoc';
import VhsShelf from './VhsShelf';

const MoreProjects = () => {
    return (
        <div className="relative -ml-[50vw] -mr-[50vw] w-screen">
            <VhsShelf />
        </div>
    );
};

export default SectionWrapper(MoreProjects, 'other');

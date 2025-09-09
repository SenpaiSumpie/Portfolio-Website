'use client';

import React from 'react';

const SectionDivider = ({ className = '' }) => {
  return (
    <div className={`vhs-divider ${className}`} role="separator" aria-hidden="true">
      <div className="vhs-divider__glow" />
      <div className="vhs-divider__bar" />
      <div className="vhs-divider__noise" />
    </div>
  );
};

export default SectionDivider;


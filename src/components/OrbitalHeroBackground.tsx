'use client';
/**
 * OrbitalHeroBackground (Services - G Orbital)
 *
 * 8 lobes (4 pairs at 0, 45, 90, 135 degrees) creating a dense radial pattern.
 * Two counter-rotating layers (outer 4 pairs vs inner 4 pairs).
 * Grid/constellation overlay connecting lobe tips.
 * Subtle pulse waves expanding from center.
 * Most complex animation matching Services' infrastructure scope.
 * Color: var(--color-primary) (slate).
 */

import React from 'react';

const C = 'var(--color-primary)';
const CX = 400;
const CY = 300;
const OUTER_R = 170;

// Calculate node positions at lobe tips for constellation grid
const ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const NODES: [number, number][] = ANGLES.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return [CX + Math.sin(rad) * OUTER_R, CY - Math.cos(rad) * OUTER_R];
});

// Constellation edges: connect adjacent and alternating nodes
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 2], [2, 4], [4, 6], [6, 0],
  [1, 3], [3, 5], [5, 7], [7, 1],
];

export const OrbitalHeroBackground: React.FC = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 800 600"
        fill="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C} stopOpacity="0.5" />
            <stop offset="100%" stopColor={C} stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C} stopOpacity="0.18" />
            <stop offset="100%" stopColor={C} stopOpacity="0" />
          </radialGradient>
          <filter id="gBlur"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <style>{`
          @keyframes gRotCW { to { transform: rotate(360deg); } }
          @keyframes gRotCCW { to { transform: rotate(-360deg); } }
          @keyframes gPulse {
            0% { r: 12; opacity: 0.18; stroke-width: 1.5; }
            100% { r: 240; opacity: 0; stroke-width: 0.2; }
          }
          @keyframes gBreathOuter { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
          @keyframes gBreathInner { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
          @keyframes gGridDash { to { stroke-dashoffset: 0; } }
          @keyframes gNodePulse { 0%,100% { r: 2.5; opacity: 0.3; } 50% { r: 4; opacity: 0.15; } }
          @keyframes gNucPulse { 0%,100% { opacity: 0.45; r: 5; } 50% { opacity: 0.18; r: 10; } }
          @keyframes gBgGlow { 0%,100% { opacity: 0.1; } 50% { opacity: 0.18; } }

          .gOuterLayer {
            animation: gRotCW 110s linear infinite, gBreathOuter 10s ease-in-out infinite;
            transform-origin: 400px 300px;
            opacity: 0.14;
          }
          .gInnerLayer {
            animation: gRotCCW 140s linear infinite, gBreathInner 12s ease-in-out infinite;
            transform-origin: 400px 300px;
            opacity: 0.1;
          }

          .gPulseRing { animation: gPulse 6s ease-out infinite; }
          .gPulseRing2 { animation: gPulse 6s ease-out infinite; animation-delay: 2s; }
          .gPulseRing3 { animation: gPulse 6s ease-out infinite; animation-delay: 4s; }

          .gGridEdge { stroke-dasharray: 10 15; animation: gGridDash 4s linear infinite; opacity: 0.1; }
          .gGridNode { animation: gNodePulse 3s ease-in-out infinite; }

          .gNucleus { animation: gNucPulse 4s ease-in-out infinite; }
          .gBgGlow { animation: gBgGlow 7s ease-in-out infinite; }
        `}</style>

        {/* Background glow */}
        <circle cx={CX} cy={CY} r="200" fill="url(#gGlow)" className="gBgGlow" />

        {/* Pulse waves */}
        <circle cx={CX} cy={CY} r="12" fill="none" stroke={C} strokeWidth="1.5" className="gPulseRing" />
        <circle cx={CX} cy={CY} r="12" fill="none" stroke={C} strokeWidth="1.5" className="gPulseRing2" />
        <circle cx={CX} cy={CY} r="12" fill="none" stroke={C} strokeWidth="1.5" className="gPulseRing3" />

        {/* Outer layer: 4 lobe pairs at 0, 45, 90, 135 (CW rotation) */}
        <g className="gOuterLayer">
          {[0, 45, 90, 135].map((angle) => (
            <g key={angle} transform={`rotate(${angle} ${CX} ${CY})`}>
              <ellipse cx={CX} cy={CY - 135} rx="55" ry={OUTER_R} stroke="url(#gGrad)" strokeWidth="1.2" />
              <ellipse cx={CX} cy={CY + 135} rx="55" ry={OUTER_R} stroke="url(#gGrad)" strokeWidth="1.2" />
            </g>
          ))}
        </g>

        {/* Inner layer: 4 lobe pairs shifted by 22.5 degrees (CCW rotation) */}
        <g className="gInnerLayer">
          {[22.5, 67.5, 112.5, 157.5].map((angle) => (
            <g key={angle} transform={`rotate(${angle} ${CX} ${CY})`}>
              <ellipse cx={CX} cy={CY - 105} rx="40" ry="130" stroke="url(#gGrad)" strokeWidth="0.8" />
              <ellipse cx={CX} cy={CY + 105} rx="40" ry="130" stroke="url(#gGrad)" strokeWidth="0.8" />
            </g>
          ))}
        </g>

        {/* Constellation grid overlay */}
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke={C}
            strokeWidth="0.6"
            className="gGridEdge"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.5"
            fill={C}
            className="gGridNode"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* Nucleus */}
        <circle cx={CX} cy={CY} r="5" fill={C} opacity="0.45" className="gNucleus" filter="url(#gBlur)" />
        <circle cx={CX} cy={CY} r="2" fill={C} opacity="0.65" />
      </svg>
    </div>
  );
};

OrbitalHeroBackground.displayName = 'OrbitalHeroBackground';

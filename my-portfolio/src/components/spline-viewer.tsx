'use client';

import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineViewerProps {
  scene: string;
  className?: string;
}

export function SplineViewer({ scene, className }: SplineViewerProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-zinc-100">
          <span className="text-zinc-500">Loading 3D scene...</span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}

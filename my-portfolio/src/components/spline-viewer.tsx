'use client';

import { useEffect } from 'react';
import React from 'react';

interface SplineViewerProps {
  scene: string;
  className?: string;
}

export function SplineViewer({ scene, className }: SplineViewerProps) {
  useEffect(() => {
    // Load Spline viewer script if not already loaded
    if (!window.customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return React.createElement('spline-viewer' as any, {
    url: scene,
    className: className,
    style: { width: '100%', height: '100%' }
  });
}

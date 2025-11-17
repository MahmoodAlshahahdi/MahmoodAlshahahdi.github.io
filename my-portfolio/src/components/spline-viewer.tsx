'use client';

import { useEffect, useRef } from 'react';
import React from 'react';

interface SplineViewerProps {
  scene: string;
  className?: string;
}

export function SplineViewer({ scene, className }: SplineViewerProps) {
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    // Load Spline viewer script if not already loaded
    if (!window.customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Attach a simple load listener for debugging and visibility checks
    const el = viewerRef.current;
    function onLoad() {
      // eslint-disable-next-line no-console
      console.log('spline-viewer loaded', el);
      if (el) {
        el.style.background = 'transparent';
      }
    }

    if (el) {
      el.addEventListener && el.addEventListener('load', onLoad);
    }

    return () => {
      if (el && el.removeEventListener) el.removeEventListener('load', onLoad);
    };
  }, []);

  // Use the 'src' attribute which the spline web-component recognizes.
  // Provide a ref so we can inspect the element and ensure visibility.
  return React.createElement('spline-viewer' as any, {
    src: scene,
    ref: viewerRef,
    className: className,
    style: { width: '100%', height: '100%', zIndex: 9999, background: 'transparent', position: 'relative', pointerEvents: 'auto' }
  });
}

'use client';

import { SplineViewer } from '@/components/spline-viewer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 md:px-16 overflow-hidden">
        {/* Left side: Text content */}
        <div className="relative z-10 max-w-2xl">
          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              ✨ Let's meet!
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in">
            I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Mahmood Alshahahdi
            </span>
            <br />
            Industrial Engineer.
          </h1>

          {/* Description */}
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-lg mb-8 animate-fade-in">
            I'm targeting Process Data Analyst roles and specialize in designing and maintaining data infrastructures, 
            database design (SQL), scripting and automation (Python, R), KPI/dashboard development (Power BI, Tableau), 
            and validating data to ensure high-quality, actionable insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors"
            >
              My Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-semibold rounded-full transition-colors"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Scroll for More</p>
            <svg className="w-5 h-5 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right side: 3D Robot Scene (hidden on mobile/tablet) */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 h-screen items-center justify-center pointer-events-auto z-40">
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
            <SplineViewer 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

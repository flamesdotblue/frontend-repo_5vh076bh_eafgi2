import React from 'react';
import Spline from '@splinetool/react-spline';

const HUB_URL = 'https://hub.tinkerhub.org/';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for contrast (keeps Spline interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-20 pt-28 sm:pt-36">
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
          A Project by TinkerHub Foundation
        </span>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          <span className="text-white">Saturday Hack Night:</span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
            Build Consistently. Ship Faster. Go Pro.
          </span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          A recurring, online hackathon series by TinkerHub Foundation. Build for 6 weeks. Earn your invite to
          Season <span className="font-semibold">{new Date().getFullYear() % 10}</span>'s Grand Finale in Kochi.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={HUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-600/25 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            Join the Hack!
          </a>
          <span className="text-sm text-white/70">
            Registration and submission happen exclusively on the TinkerHub Hub App.
          </span>
        </div>
      </div>
    </section>
  );
}

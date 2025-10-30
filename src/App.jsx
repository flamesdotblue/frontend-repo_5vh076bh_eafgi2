import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import StoryImpactSection from './components/StoryImpactSection.jsx';
import JourneySection from './components/JourneySection.jsx';
import ShowcaseSection from './components/ShowcaseSection.jsx';
import { Rocket } from 'lucide-react';

const HUB_URL = 'https://hub.tinkerhub.org/';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-950 text-white">
      <Header />
      <main>
        <HeroSection />
        <StoryImpactSection />
        <JourneySection />
        <ShowcaseSection />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-rose-600">
            <Rocket size={18} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Saturday Hack Night</p>
            <p className="text-[11px] text-white/60">A Project by TinkerHub Foundation</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#flow" className="hover:text-white">Program Flow</a>
          <a href="#finale" className="hover:text-white">The Finale</a>
          <a href="#season" className="hover:text-white">Seasons</a>
          <a href="#partners" className="hover:text-white">Partners</a>
          <a href="#impact" className="hover:text-white">Impact</a>
        </nav>
        <a
          href={HUB_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-600/25"
        >
          Join the Hack!
        </a>
      </div>
    </header>
  );
}

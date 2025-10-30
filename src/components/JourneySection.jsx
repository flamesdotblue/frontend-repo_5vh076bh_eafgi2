import React from 'react';
import { Calendar, ArrowRight, Trophy } from 'lucide-react';

const HUB_URL = 'https://hub.tinkerhub.org/';

export default function JourneySection() {
  const currentSeason = (new Date().getFullYear() % 10) || 1;
  return (
    <section id="flow" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">The Journey to TinkerSpace</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Step
            title="The Challenge (Weekly Online)"
            detail={`Every Saturday, a new theme is announced. Form your team, register on the Hub App, and start coding. 24 hours to build, 5 minutes to present your MVP.`}
            cta={`See Season ${currentSeason} Topics`}
          />
          <Step
            title="The Season (6 Consecutive Weeks)"
            detail="A 'Season' consists of 6 consecutive Hack Nights. Consistency is key! Mentors provide feedback, and every submission is evaluated for quality and innovation."
            cta="View Past Winning Projects"
          />
          <Step
            title="The Next Level (The Invitation)"
            detail="The most innovative teams and strong submissions from the entire Season are hand-picked and invited to the exclusive physical hackathon at TinkerSpace Kochi!"
            cta="Ready to Earn Your Seat?"
          />
        </div>

        <div id="finale" className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-300">
              <Trophy size={14} /> The Grand Finale
            </div>
            <h3 className="mt-4 text-2xl font-bold">The Ultimate Goal: An Invitation to TinkerSpace Kochi</h3>
            <p className="mt-3 text-white/80">
              This is the summit of the season. By consistently building and winning in the online hack nights, you earn
              your place at the Physical Grand Finale Hackathon hosted at the incredible TinkerSpace. You've proven your
              dedication and now get access to the best resources and network.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
              <li>Dedicated 24/7 access to Kerala's first premier Hacker Space.</li>
              <li>Direct mentorship from industry leaders.</li>
              <li>Networking with the state's best makers.</li>
            </ul>
            <a
              href={HUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              See What You're Hacking For! <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://tinkerhub.org/_next/image?url=%2Fimages%2Fhome%2Fspaces%2Ftinkerspace-1.jpg&w=1920&q=75"
              alt="TinkerSpace Kochi interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ title, detail, cta }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <Calendar size={16} />
        <span>Weekly Rhythm</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{detail}</p>
      <button
        type="button"
        className="mt-4 inline-flex items-center gap-2 self-start rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
      >
        {cta} <ArrowRight size={16} />
      </button>
    </div>
  );
}

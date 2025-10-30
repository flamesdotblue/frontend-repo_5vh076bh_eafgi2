import React from 'react';
import { Star, Building2, Heart, ArrowRight } from 'lucide-react';

const HUB_URL = 'https://hub.tinkerhub.org/';

export default function ShowcaseSection() {
  const currentSeason = (new Date().getFullYear() % 10) || 1;

  const upcoming = getNextThreeSaturdays().map((d, i) => ({
    date: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    label: `Hack Night ${i + 1}/6`,
    topic: [
      'AI for Local Governance',
      'Open Data for Communities',
      'Smart Campus Tools',
      'Civic Tech UX',
      'Assistive Tech',
      'Sustainable Living Apps',
    ][i],
  }));

  const projects = [
    { title: 'CivicPulse', team: 'Team Nova', season: 'S5', link: HUB_URL },
    { title: 'GreenRoute', team: 'Bits & Bytes', season: 'S4', link: HUB_URL },
    { title: 'AidLens', team: 'Hacksmiths', season: 'S6', link: HUB_URL },
    { title: 'CampusKit', team: 'Kernel Panic', season: 'S3', link: HUB_URL },
    { title: 'OpenMapGov', team: 'DataWeave', season: 'S6', link: HUB_URL },
    { title: 'SkillBridge', team: 'ByteBuddies', season: 'S2', link: HUB_URL },
  ];

  const testimonials = [
    {
      quote:
        "We went from just an idea to the physical hackathon thanks to Season 5! It was a game-changer.",
      author: 'Team Nova',
    },
    {
      quote: 'Nothing builds momentum like shipping every week. The feedback loop is priceless.',
      author: 'Kernel Panic',
    },
    {
      quote: 'The finale at TinkerSpace pushed us to a new level. Incredible energy and mentorship!',
      author: 'Hacksmiths',
    },
  ];

  return (
    <section id="season" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Current Season: {currentSeason} - Upcoming Challenges</h2>
            <p className="mt-2 text-white/80">Here are the next three Hack Nights. Keep the streak, earn your seat.</p>
          </div>
          <a
            href={HUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Register on Hub <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {upcoming.map((u) => (
            <div key={u.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>{u.label}</span>
                <span>{u.date}</span>
              </div>
              <h4 className="mt-2 text-lg font-semibold">Topic: {u.topic}</h4>
              <p className="mt-1 text-sm text-white/70">Remaining sessions in the season are highlighted here.</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Previous Projects</h3>
          <p className="mt-1 text-white/70">A snapshot of submissions from different seasons.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{p.season}</span>
                  <Star size={14} className="text-yellow-400" />
                </div>
                <h4 className="mt-2 text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-white/70">Team {p.team}</p>
                <span className="mt-3 inline-block text-xs text-white/60">View on Hub →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-white/90">“{t.quote}”</p>
              <p className="mt-3 text-sm text-white/60">— {t.author}</p>
            </div>
          ))}
        </div>

        <div id="partners" className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Building2 size={16} /> Powered by Community, Supported by the Best
          </div>
          <p className="mt-3 max-w-3xl text-white/80">
            TinkerHub Foundation — Empowering people with technology education and skill sets to make sustainable
            choices.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Partner logos as external images (sourced from tinkerhub.org if available) */}
            <img
              src="https://tinkerhub.org/_next/image?url=%2Fimages%2Fhome%2Fpartners%2Fieee.png&w=384&q=75"
              alt="Partner 1"
              className="h-10 w-auto opacity-80"
            />
            <img
              src="https://tinkerhub.org/_next/image?url=%2Fimages%2Fhome%2Fpartners%2Ffossee.png&w=384&q=75"
              alt="Partner 2"
              className="h-10 w-auto opacity-80"
            />
            <img
              src="https://tinkerhub.org/_next/image?url=%2Fimages%2Fhome%2Fpartners%2Fkites.png&w=384&q=75"
              alt="Partner 3"
              className="h-10 w-auto opacity-80"
            />
            <img
              src="https://tinkerhub.org/_next/image?url=%2Fimages%2Fhome%2Fpartners%2Fkerala-startup-mission.png&w=384&q=75"
              alt="Partner 4"
              className="h-10 w-auto opacity-80"
            />
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/30 p-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold">Ready to Start Your Journey? Join Now!</p>
              <p className="text-sm text-white/70">Program Flow • TinkerHub Foundation • TinkerSpace Kochi</p>
            </div>
            <a
              href={HUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Join the Hack <Heart size={16} className="fill-white" />
            </a>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>Made with 🧡 by TinkerHub Foundation.</p>
          <div className="flex items-center gap-4">
            <a href="#flow" className="hover:text-white">Program Flow</a>
            <a href="https://tinkerhub.org/" target="_blank" rel="noreferrer" className="hover:text-white">TinkerHub Foundation</a>
            <a href="https://tinkerhub.org/tinkerspace" target="_blank" rel="noreferrer" className="hover:text-white">TinkerSpace Kochi</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function getNextThreeSaturdays() {
  const dates = [];
  const now = new Date();
  const day = now.getDay();
  const diffToSaturday = (6 - day + 7) % 7 || 7; // next Saturday
  let next = new Date(now);
  next.setDate(now.getDate() + diffToSaturday);
  for (let i = 0; i < 3; i++) {
    dates.push(new Date(next));
    next = new Date(next);
    next.setDate(next.getDate() + 7);
  }
  return dates;
}

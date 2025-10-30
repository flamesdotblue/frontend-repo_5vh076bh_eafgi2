import React from 'react';
import { Rocket, Users, Clock } from 'lucide-react';

export default function StoryImpactSection() {
  return (
    <section id="impact" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Your Weekly Challenge. Your Path to Innovation.</h2>
          <p className="mt-4 text-white/80">
            Every Saturday, you join a passionate community of developers, designers, and problem-solvers. For one
            intense night, you pick a topic, form a team, and ship a working prototype. This isn't just an event; it's a
            recurring 6-week journey (a 'Season') designed to force consistency, build your portfolio, and accelerate
            your skills through rapid prototyping. It’s practice for the real world.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <StatCard icon={Rocket} label="Total Projects Submitted" value="XXX+" accent="from-orange-500 to-rose-600" />
          <StatCard icon={Users} label="Makers Activated" value="XXX" accent="from-emerald-500 to-teal-500" />
          <StatCard icon={Clock} label="Total Hours of Hacking" value="YYY" accent="from-violet-500 to-fuchsia-500" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
      <div className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${accent} p-2 text-white` }>
        <Icon size={18} />
      </div>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-extrabold tracking-tight">{value}</span>
      </div>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}

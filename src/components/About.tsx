const timeline = [
  { year: '2022', label: 'Started MEng Software Engineering', sub: 'Edinburgh Napier University' },
  { year: '2024', label: 'Algorithm Sudoku project', sub: 'Constraint-based solver, academic project' },
  { year: '2025', label: 'Software Engineering Intern', sub: 'North Oil Company' },
  { year: '2025', label: 'Honours project: Cue app', sub: 'Android wellness companion, dissertation' },
  { year: '2026', label: 'Built this portfolio', sub: 'React · TypeScript · Tailwind CSS' },
];

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div>
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            01 / About
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-textprimary mb-6 leading-tight">
            Software engineer,<br />
            <span className="text-gradient">full-stack</span>
          </h2>
          <div className="space-y-4 text-textsecondary leading-relaxed">
            <p>
              I'm a penultimate-year MEng student based in Edinburgh, building software
              at the intersection of clean architecture and genuine user need. I care about writing
              code that holds up, not just code that passes a demo.
            </p>
            <p>
              My background spans Android development, full-stack web, and distributed systems, with
              a thread of security-conscious thinking through all of it. I'm at my best when I own a
              problem end-to-end, from schema design to the last UI detail.
            </p>
            <p>
              Outside engineering, I run a maths tutoring business, which keeps me sharp on
              explaining hard things simply, a skill I bring into every technical discussion.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <div>
              <div className="font-display font-bold text-2xl text-accent">4+</div>
              <div className="font-mono text-xs text-textsecondary mt-1">Years building</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-accent">MEng</div>
              <div className="font-mono text-xs text-textsecondary mt-1">Software Engineering</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-accent">2</div>
              <div className="font-mono text-xs text-textsecondary mt-1">Platforms shipped</div>
            </div>
          </div>
        </div>

        {/* Right — timeline */}
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8 pl-10">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-bg" />
                <span className="font-mono text-xs text-accent mb-1 block">{item.year}</span>
                <div className="font-display font-semibold text-textprimary text-sm">{item.label}</div>
                <div className="font-mono text-xs text-textsecondary mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

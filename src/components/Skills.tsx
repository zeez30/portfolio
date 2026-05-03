import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            02 / Skills
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-textprimary">
            What I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-gradient rounded-lg p-6 bg-surface">
              <h3 className="font-display font-semibold text-sm text-accent tracking-wide mb-5 uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-border text-textsecondary hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="page-grid">
      <div className="section-space border-t border-border">
        <div className="mb-10 md:mb-14 text-center">
          <span className="section-label">
            02 / Skills
          </span>
          <h2 className="section-heading">
            What I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-border pt-6">
              <h3 className="font-mono font-bold text-base text-accent mb-5">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-base text-textsecondary leading-relaxed"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

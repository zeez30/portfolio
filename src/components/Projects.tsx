import { projects, type Project } from '../data';

const statusLabel: Record<Project['status'], { text: string; color: string }> = {
  live:     { text: 'Live',        color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5' },
  wip:      { text: 'In Progress', color: 'text-amber-400 border-amber-400/30 bg-amber-400/5' },
  archived: { text: 'Archived',    color: 'text-textsecondary border-border bg-transparent' },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusLabel[project.status];
  return (
    <div className="group border-gradient rounded-lg p-8 bg-surface flex flex-col gap-4 hover:bg-[#2a1520] transition-colors duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-bold text-textprimary text-xl group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <span className={`font-mono text-[10px] px-2 py-1 rounded border whitespace-nowrap ${status.color}`}>
          {status.text}
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-textsecondary text-base leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-3 py-1.5 rounded bg-bg border border-border text-textsecondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.github || project.live) && (
        <div className="flex gap-4 pt-2 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-textsecondary hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-textsecondary hover:text-accent transition-colors"
            >
              Live site ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            03 / Projects
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-textprimary">
            Things I've built
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

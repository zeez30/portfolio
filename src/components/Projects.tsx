import { projects, type Project } from '../data';

const statusLabel: Record<NonNullable<Project['status']>, string> = {
  private: 'Private repository',
  live: 'Live',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 border-t border-border py-8 md:py-10">
      {/* Header */}
      <div className="flex flex-col items-start gap-3">
        <h3 className="font-display font-bold text-textprimary text-xl md:text-2xl leading-snug">
          {project.title}
        </h3>
        <span className="font-mono text-sm text-textsecondary">
          {project.subtitle}
        </span>
        {project.status && (
          <span className="font-mono text-sm text-textsecondary">
            {statusLabel[project.status]}
          </span>
        )}
      </div>

      <div className="min-w-0 space-y-5">
      {/* Description */}
      {project.description.map((paragraph) => (
        <p key={paragraph} className="font-body text-textsecondary text-base md:text-lg leading-relaxed max-w-[62ch]">
          {paragraph}
        </p>
      ))}

      {/* Tags */}
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-sm text-textsecondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.github || project.live) && (
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              {project.liveLabel ?? 'Live site ↗'}
            </a>
          )}
        </div>
      )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="page-grid">
      <div className="section-space border-t border-border">
        <div className="mb-10 md:mb-14 text-center">
          <span className="section-label">
            03 / Projects
          </span>
          <h2 className="section-heading">
            Things I've built
          </h2>
        </div>

        <div className="border-b border-border">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

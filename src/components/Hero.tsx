export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,173,198,0.10) 0%, rgba(221,163,178,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#ffadc6 1px, transparent 1px), linear-gradient(90deg, #ffadc6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag line */}
          <div className="fade-up flex items-center gap-3 mb-8">
            <span className="font-mono text-sm text-accent tracking-widest uppercase">
              Software Engineer
            </span>
            <span className="block w-12 h-px bg-accent opacity-50" />
            <span className="font-mono text-sm text-textsecondary">
              Available 2026
            </span>
          </div>

          {/* Name */}
          <h1 className="fade-up fade-up-delay-1 font-display font-extrabold leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            <span className="text-textprimary">Syeda</span>{' '}
            <span className="text-gradient">Zaidi</span>
          </h1>

          {/* Descriptor */}
          <p className="fade-up fade-up-delay-2 font-body text-textsecondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            I build full-stack web apps and Android experiences with a focus on clean
            architecture, thoughtful UX, and code that holds up in production.
            MEng Software Engineering, Edinburgh Napier University.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-accent text-bg font-display font-semibold text-sm rounded hover:bg-accent/90 transition-all duration-200 tracking-wide"
            >
              View my work
            </button>
            <a
              href="mailto:syeda@zaidi.dev"
              className="px-6 py-3 border border-border text-textprimary font-display font-semibold text-sm rounded hover:border-accent hover:text-accent transition-all duration-200 tracking-wide"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div className="fade-up fade-up-delay-4 flex items-center gap-6 mt-12">
            <a
              href="https://github.com/zeez30"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-textsecondary hover:text-accent transition-colors tracking-wide"
            >
              GitHub ↗
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="https://www.linkedin.com/in/syeda-zaidi-16b3a0252/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-textsecondary hover:text-accent transition-colors tracking-wide"
            >
              LinkedIn ↗
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="mailto:syeda@zaidi.dev"
              className="font-mono text-xs text-textsecondary hover:text-accent transition-colors tracking-wide"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-textsecondary tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-textsecondary to-transparent" />
      </div>
    </section>
  );
}

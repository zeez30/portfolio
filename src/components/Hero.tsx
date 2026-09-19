export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[min(56rem,100svh)] flex items-center"
    >
      <div className="relative page-grid pt-32 pb-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag line */}
          <div className="fade-up flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10">
            <span className="font-mono text-xs text-textsecondary tracking-widest uppercase">
              SOFTWARE ENGINEERING · EDINBURGH
            </span>
          </div>

          {/* Name */}
          <h1 className="fade-up fade-up-delay-1 font-display font-bold leading-none tracking-tight mb-2"
            style={{ fontSize: 'clamp(2.25rem, 7.6vw, 5.5rem)' }}
          >
            <span className="text-textprimary">Syeda Zaidi</span>
            <span aria-hidden="true" className="cursor-blink text-textprimary">_</span>
          </h1>
          <p lang="ur" dir="rtl" className="urdu-name fade-up fade-up-delay-1 w-fit mx-auto mb-8">سیدہ زیدی</p>

          {/* Descriptor */}
          <p className="fade-up fade-up-delay-2 font-body text-textsecondary text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10">
            Final-year MEng Software Engineering student at Edinburgh Napier University.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'auto' })}
              className="px-8 py-4 bg-accent text-bg font-display font-semibold text-base rounded hover:bg-accent/90 transition-all duration-200 tracking-wide"
            >
              View my work
            </button>
            <a
              href="mailto:syeda@zaidi.dev"
              className="editorial-link"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div className="fade-up fade-up-delay-4 flex items-center justify-center flex-wrap gap-6 mt-10">
            <a
              href="https://github.com/zeez30"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              GitHub ↗
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="https://www.linkedin.com/in/syeda-zaidi-16b3a0252/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              LinkedIn ↗
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="mailto:syeda@zaidi.dev"
              className="editorial-link"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-textsecondary tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-textsecondary to-transparent" />
      </div>
    </section>
  );
}

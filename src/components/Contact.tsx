export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            04 / Contact
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-textprimary mb-6">
            Let's work together
          </h2>
          <p className="font-body text-textsecondary text-lg leading-relaxed mb-10">
            I'm actively looking for graduate software engineering roles from summer 2026.
            If you're working on something interesting or just want to connect, my inbox is open.
          </p>

          <a
            href="mailto:syeda@zaidi.dev"
            className="inline-block px-8 py-4 bg-accent text-bg font-display font-semibold rounded hover:bg-accent/90 transition-all duration-200 tracking-wide mb-10"
          >
            syeda@zaidi.dev
          </a>

          <div className="flex justify-center gap-8 pt-8 border-t border-border">
            <a
              href="https://github.com/zeez30"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-textsecondary hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/syeda-zaidi-16b3a0252/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-textsecondary hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

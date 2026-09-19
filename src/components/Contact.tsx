export default function Contact() {
  return (
    <section id="contact" className="page-grid">
      <div className="section-space border-t border-border flex flex-col gap-10">
        <div className="min-w-0 text-center">
          <span className="section-label">
            04 / Contact
          </span>
          <h2 className="section-heading">
            Let's work together
          </h2>
        </div>
        <div className="min-w-0 w-full max-w-[62ch] mx-auto text-left text-base md:text-lg">
          <p className="font-body text-textsecondary text-base md:text-lg leading-relaxed max-w-[62ch] mb-8">
            I’m currently looking for graduate software engineering roles starting in 2027.
            If you’re working on something interesting or would like to get in touch, I’d be happy to hear from you.
          </p>

          <a
            href="mailto:syeda@zaidi.dev"
            className="inline-block max-w-full break-words text-xl sm:text-2xl text-textprimary underline decoration-textsecondary underline-offset-8 hover:decoration-accent transition-colors py-2 mb-8"
          >
            syeda@zaidi.dev
          </a>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/zeez30"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/syeda-zaidi-16b3a0252/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

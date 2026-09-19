export default function About() {
  return (
    <section id="about" className="page-grid">
      <div className="section-space border-t border-border flex flex-col gap-10">
      <div className="text-center">
      <span className="section-label">
        01 / About
      </span>
      <h2 className="section-heading">
        About
      </h2>
      </div>
      <div className="w-full max-w-[62ch] mx-auto text-left text-textsecondary text-base md:text-lg leading-relaxed space-y-6">
        <p>
          I’m a final-year MEng Software Engineering student at Edinburgh Napier University.
          I enjoy building software that feels considered, both in how it works and how people interact with it.
        </p>
        <p>
          My work spans web, mobile and full-stack development, from native Android applications to
          interactive web projects and internal engineering tools. I’m particularly interested in the
          point where technical problem-solving and thoughtful design come together.
        </p>
      </div>
      </div>
    </section>
  );
}

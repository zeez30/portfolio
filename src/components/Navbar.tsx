import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'auto' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="page-grid h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          className="font-display font-bold text-lg tracking-tight text-textprimary hover:text-accent transition-colors"
        >
          SZ<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-mono text-sm text-textsecondary hover:text-accent transition-colors tracking-wide"
            >
              {l}
            </button>
          ))}
          <a
            href="mailto:syeda@zaidi.dev"
            className="editorial-link"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden min-h-11 min-w-11 flex items-center justify-center text-textsecondary hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className={`${menuOpen ? 'flex' : 'hidden'} md:hidden bg-surface border-b border-border page-grid py-4 flex-col gap-4`}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left font-mono text-sm text-textsecondary hover:text-accent transition-colors"
            >
              {l}
            </button>
          ))}
        </nav>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="page-grid">
      <div className="border-t border-border py-8 flex flex-col sm:flex-row items-start justify-between gap-4">
        <span className="font-mono text-xs leading-relaxed text-textsecondary">
          © {new Date().getFullYear()} Syeda Zaidi · Built with React + TypeScript
        </span>
        <span className="font-mono text-xs leading-relaxed text-textsecondary">
          Edinburgh
        </span>
      </div>
    </footer>
  );
}

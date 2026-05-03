export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-textsecondary">
          © {new Date().getFullYear()} Syeda Zaidi · Built with React + TypeScript
        </span>
        <span className="font-mono text-xs text-textsecondary">
          Edinburgh
        </span>
      </div>
    </footer>
  );
}

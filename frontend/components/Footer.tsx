"use client";

export function Footer() {
  return (
    <footer className="mt-50 py-8 p-4 border-t border-white/40 text-white/60 font-mono text-sm flex flex-col items-center space-y-4">
      <p className="text-center max-w-xl leading-relaxed">
        Built by <span className="text-white/80 font-semibold">João Felipe Silveira</span> — a full‑stack engineer
        focused on crafting clean, reliable, and thoughtfully designed systems.
        Passionate about strong typing, modular architecture, and polished user experiences.
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/accessjoao"
          target="_blank"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/joao-felipe-silveira/"
          target="_blank"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-xs text-white/40 text-center">
        © {new Date().getFullYear()} João Felipe Silveira — All rights reserved.
      </p>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer
      className="py-8 text-center font-mono text-xs"
      style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          Built with{" "}
          <span style={{ color: "var(--green)" }}>&lt;3</span>
          {" "}using Next.js, TypeScript &amp; Tailwind
        </div>
        <div>
          © 2026{" "}
          <span style={{ color: "var(--green)" }}>Younus Syed</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--green)", boxShadow: "0 0 4px var(--green)" }}
          />
          <span>ONLINE</span>
        </div>
      </div>
    </footer>
  );
}

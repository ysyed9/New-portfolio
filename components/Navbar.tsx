"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.95)"
          : "rgba(10,10,15,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-mono font-bold text-sm" style={{ color: "var(--green)" }}>
          <span style={{ color: "var(--cyan)" }}>&lt;</span>
          YS
          <span style={{ color: "var(--cyan)" }}>
            <span className="cursor-blink">/</span>&gt;
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Resume_Younus_Syed.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs px-3 py-1 rounded border transition-all duration-200"
            style={{
              color: "var(--green)",
              borderColor: "rgba(0,255,136,0.4)",
              background: "rgba(0,255,136,0.05)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.05)";
            }}
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-5 transition-all duration-300"
              style={{ background: "var(--green)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-3"
          style={{ background: "rgba(10,10,15,0.98)", borderBottom: "1px solid #1e1e2e" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm py-1"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Resume_Younus_Syed.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm py-1"
            style={{ color: "var(--green)" }}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

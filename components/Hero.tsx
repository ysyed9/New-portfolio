"use client";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "AI/ML Engineer",
  "Full Stack Developer",
  "Backend Architect",
];

function TypedText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 70);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts]);

  return (
    <span className="text-green">
      {displayed}
      <span className="cursor-blink" style={{ color: "var(--green)" }}>|</span>
    </span>
  );
}

const terminalLines = [
  { prompt: "$ ", cmd: "whoami", delay: 400 },
  { prompt: "", cmd: "younus_syed", delay: 800, output: true },
  { prompt: "$ ", cmd: "cat mission.txt", delay: 1400 },
  { prompt: "", cmd: "Building AI-powered systems & scalable backends.", delay: 1900, output: true },
  { prompt: "$ ", cmd: "echo $STATUS", delay: 2600 },
  { prompt: "", cmd: "ONLINE & BUILDING", delay: 3000, output: true },
];

function TerminalWindow() {
  const [visible, setVisible] = useState<boolean[]>(Array(terminalLines.length).fill(false));

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisible((v) => {
          const next = [...v];
          next[i] = true;
          return next;
        });
      }, line.delay);
    });
  }, []);

  return (
    <div
      className="rounded-lg overflow-hidden font-mono text-sm w-full max-w-lg"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-2 text-xs" style={{ color: "var(--text-muted)" }}>
          younus@portfolio:~
        </span>
      </div>
      {/* Body */}
      <div className="p-4 min-h-[160px] flex flex-col gap-1">
        {terminalLines.map((line, i) =>
          visible[i] ? (
            <div key={i} className="flex">
              {line.prompt && (
                <span style={{ color: "var(--green)" }}>{line.prompt}</span>
              )}
              <span style={{ color: line.output ? "var(--text-secondary)" : "var(--cyan)" }}>
                {line.cmd}
              </span>
            </div>
          ) : null
        )}
        <div className="flex mt-1">
          <span style={{ color: "var(--green)" }}>$ </span>
          <span className="cursor-blink ml-0.5" style={{ color: "var(--green)" }}>█</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: text */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono mb-6"
              style={{
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.25)",
                color: "var(--green)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--green)", boxShadow: "0 0 6px var(--green)" }}
              />
              SYSTEM.KERNEL :: v1.0.0 ONLINE
            </div>

            <p className="font-mono text-sm mb-2" style={{ color: "var(--text-muted)" }}>
              // Hello, I&apos;m
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold mb-3 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Younus{" "}
              <span className="glow-green-text" style={{ color: "var(--green)" }}>
                Syed
              </span>
            </h1>

            <div className="text-xl font-mono mb-6" style={{ color: "var(--text-secondary)" }}>
              &lt;<TypedText texts={roles} />&gt;
            </div>

            <p
              className="text-sm leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--text-secondary)", borderLeft: "2px solid var(--green-dark)", paddingLeft: "1rem" }}
            >
              CS grad from UT Dallas passionate about AI systems, RAG pipelines, and
              scalable backends. I build things that matter — from LLM orchestration
              layers to full-stack products.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8 flex-wrap">
              {[
                { label: "EXPERIENCE", value: "2+ YRS" },
                { label: "PROJECTS", value: "10+ DEP" },
                { label: "CAFFEINE", value: "∞ ml" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-xl font-bold glow-green-text"
                    style={{ color: "var(--green)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#projects"
                className="font-mono text-sm px-5 py-2 rounded transition-all duration-200"
                style={{
                  background: "var(--green)",
                  color: "#0a0a0f",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--green-dim)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--green)")}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-5 py-2 rounded border transition-all duration-200"
                style={{
                  color: "var(--green)",
                  borderColor: "rgba(0,255,136,0.4)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Contact Me
              </a>
              <a
                href="https://github.com/ysyed9"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2 rounded border transition-all duration-200"
                style={{
                  color: "var(--cyan)",
                  borderColor: "rgba(0,212,255,0.4)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: terminal */}
          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col gap-4">
            {/* Code card */}
            <div
              className="rounded-lg overflow-hidden font-mono text-xs"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)", minWidth: "340px" }}
            >
              <div
                className="flex items-center justify-between px-4 py-2"
                style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)" }}
              >
                <span style={{ color: "var(--text-muted)" }}>portfolio.tsx</span>
                <span style={{ color: "var(--green)" }}>●</span>
              </div>
              <div className="p-4 leading-6">
                <div style={{ color: "var(--text-muted)" }}>1 &nbsp;</div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>2 &nbsp;</span>
                  <span style={{ color: "var(--purple)" }}>import</span>
                  <span style={{ color: "var(--text-primary)" }}> {"{ Engineer }"} </span>
                  <span style={{ color: "var(--purple)" }}>from</span>
                  <span style={{ color: "var(--yellow)" }}> &apos;./universe&apos;</span>
                  <span style={{ color: "var(--text-primary)" }}>;</span>
                </div>
                <div style={{ color: "var(--text-muted)" }}>3 &nbsp;</div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>4 &nbsp;</span>
                  <span style={{ color: "var(--cyan)" }}>const </span>
                  <span style={{ color: "var(--green)" }}>Portfolio</span>
                  <span style={{ color: "var(--text-primary)" }}> = () =&gt; (</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>5 &nbsp;</span>
                  <span style={{ color: "var(--text-secondary)" }}>&nbsp;&nbsp;&lt;</span>
                  <span style={{ color: "var(--cyan)" }}>Engineer</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>6 &nbsp;</span>
                  <span style={{ color: "var(--text-secondary)" }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span style={{ color: "var(--yellow)" }}>name</span>
                  <span style={{ color: "var(--text-primary)" }}>=</span>
                  <span style={{ color: "var(--green)" }}>&quot;Younus Syed&quot;</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>7 &nbsp;</span>
                  <span style={{ color: "var(--text-secondary)" }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span style={{ color: "var(--yellow)" }}>role</span>
                  <span style={{ color: "var(--text-primary)" }}>=</span>
                  <span style={{ color: "var(--green)" }}>&quot;Software Engineer&quot;</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>8 &nbsp;</span>
                  <span style={{ color: "var(--text-secondary)" }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span style={{ color: "var(--yellow)" }}>passion</span>
                  <span style={{ color: "var(--text-primary)" }}>=</span>
                  <span style={{ color: "var(--green)" }}>&quot;Building AI Systems&quot;</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>9 &nbsp;</span>
                  <span style={{ color: "var(--text-secondary)" }}>&nbsp;&nbsp;/&gt;</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>10&nbsp;</span>
                  <span style={{ color: "var(--text-primary)" }}>);</span>
                </div>
              </div>
            </div>
            <TerminalWindow />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--green), transparent)" }} />
      </div>
    </section>
  );
}

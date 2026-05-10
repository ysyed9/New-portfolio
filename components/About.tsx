"use client";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">About.system</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Profile card */}
          <div
            className="rounded-lg overflow-hidden font-mono text-sm flex-shrink-0"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-bright)",
              width: "100%",
              maxWidth: "320px",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)" }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold"
                style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", color: "var(--green)" }}>
                YS
              </div>
              <div>
                <div style={{ color: "var(--text-primary)", fontWeight: 700 }}>Younus Syed</div>
                <div className="text-xs" style={{ color: "var(--green)" }}>● ONLINE</div>
              </div>
            </div>
            {/* Info rows */}
            <div className="p-4 flex flex-col gap-3">
              {[
                { label: "OPERATOR", value: "YOUNUS SYED" },
                { label: "ROLE", value: "SOFTWARE_ENGINEER" },
                { label: "LOCATION", value: "Dallas, TX" },
                { label: "EDUCATION", value: "UT Dallas CS '26" },
                { label: "GPA", value: "3.6 / 4.0" },
                { label: "STATUS", value: "AVAILABLE" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center text-xs"
                  style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>{row.label}</span>
                  <span style={{ color: "var(--cyan)" }}>{row.value}</span>
                </div>
              ))}
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mt-1">
                {[
                  { label: "EXPERIENCE", val: "2+ YRS" },
                  { label: "PROJECTS", val: "10+" },
                  { label: "CAFFEINE", val: "∞ ml" },
                ].map((m) => (
                  <div key={m.label} className="rounded p-2 text-center"
                    style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)" }}>
                    <div className="text-xs font-bold" style={{ color: "var(--green)" }}>{m.val}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)", fontSize: "0.6rem" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Log panel */}
          <div className="flex-1 font-mono text-sm flex flex-col gap-6">
            {/* Log file */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}
            >
              <div
                className="px-4 py-2 text-xs flex items-center gap-2"
                style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                <span style={{ color: "var(--green)" }}>▶</span> user_profile.log
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <span style={{ color: "var(--green)" }}>➜ whoami</span>
                  <p className="mt-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    I&apos;m a Software Engineer and CS graduate from UT Dallas with a passion for building
                    AI-powered systems, distributed backends, and data-driven applications. I thrive at the
                    intersection of machine learning and software engineering.
                  </p>
                </div>
                <div>
                  <span style={{ color: "var(--green)" }}>➜ cat mission.txt</span>
                  <p className="mt-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    Translating complex problems into elegant technical solutions. Currently focused on
                    LLM Orchestration, RAG Pipelines, and Scalable Backend Systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Relevant coursework */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}
            >
              <div
                className="px-4 py-2 text-xs flex items-center gap-2"
                style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                <span style={{ color: "var(--cyan)" }}>▶</span> coursework.json
              </div>
              <div className="p-4">
                <div className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                  // University of Texas at Dallas — B.S. Computer Science
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Database Systems",
                    "Computer Architecture",
                    "UNIX",
                    "Object-Oriented Programming",
                  ].map((course) => (
                    <span key={course} className="tag tag-green">{course}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.linkedin.com/in/y-syed/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs px-4 py-2 rounded border transition-all duration-200"
                style={{
                  color: "var(--cyan)",
                  borderColor: "rgba(0,212,255,0.3)",
                  background: "rgba(0,212,255,0.05)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.12)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)")}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/ysyed9"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs px-4 py-2 rounded border transition-all duration-200"
                style={{
                  color: "var(--green)",
                  borderColor: "rgba(0,255,136,0.3)",
                  background: "rgba(0,255,136,0.05)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.12)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.05)")}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

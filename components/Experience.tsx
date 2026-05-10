"use client";
import { useState } from "react";

type Job = {
  hash: string;
  branch: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
  insertions: number;
  deletions: number;
};

const jobs: Job[] = [
  {
    hash: "a4f9c1e",
    branch: "HEAD -> engineer",
    company: "SmartData Solutions",
    role: "Software Engineer Capstone",
    period: "Aug 2026 – Present",
    location: "Plano, TX",
    bullets: [
      "Developed a Python ingestion pipeline using Microsoft Graph API to retrieve enterprise documents from SharePoint.",
      "Processed multiple document formats (PDF, Word, Visio, BRDs) and fed them into an internal LLM normalization pipeline.",
      "Automated enterprise document ingestion to enable scalable AI-driven document standardization.",
    ],
    tags: ["Python", "Microsoft Graph API", "LLM", "SharePoint"],
    insertions: 380,
    deletions: 42,
  },
  {
    hash: "b7e2d3f",
    branch: "HEAD -> engineer",
    company: "Handshake AI",
    role: "Software Engineer",
    period: "Aug 2026 – Present",
    location: "Remote",
    bullets: [
      "Developed and deployed scalable ML models on MCP servers with RAG pipelines, improving anomaly detection accuracy by 7% using ensemble algorithms.",
      "Implemented robust ML solutions, streamlining data processing and analysis pipelines, leading to an 11% reduction in processing time.",
    ],
    tags: ["MCP", "RAG", "ML", "Python", "Ensemble"],
    insertions: 540,
    deletions: 88,
  },
  {
    hash: "c3a8b5d",
    branch: "intern",
    company: "Flomad Labs R&D",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Richardson, TX",
    bullets: [
      "Enhanced backend performance by 8% using Java and multiple LLMs through advanced prompt engineering and optimization techniques.",
      "Implemented data vectorization with LangChain to optimize LLM outputs, improving response consistency.",
      "Integrated real-time data from weather, travel, and flight APIs; designed cloud databases using Firebase and AWS.",
      "Refactored and streamlined backend code, increasing readability and maintainability by 16%.",
    ],
    tags: ["Java", "LangChain", "Firebase", "AWS", "LLM"],
    insertions: 412,
    deletions: 67,
  },
  {
    hash: "d1f6e4c",
    branch: "engineer",
    company: "4Human Corporation",
    role: "Software Engineer",
    period: "Jan 2025 – May 2025",
    location: "Austin, TX",
    bullets: [
      "Designed and deployed a new feature that increased user engagement by 12% and improved customer retention.",
      "Optimized database performance by 9% using JavaScript and SQL across frontend and backend.",
      "Developed C++ backend services that reduced bug reports by 7% and improved user experience.",
    ],
    tags: ["C++", "JavaScript", "SQL", "Node.js"],
    insertions: 298,
    deletions: 54,
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number>(-1);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="section-title mb-0">$ git log --stat --oneline</h2>
        </div>
        <p className="font-mono text-xs mb-8" style={{ color: "var(--text-muted)" }}>
          // Professional experience timeline
        </p>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <div
              key={job.hash}
              className="rounded-lg overflow-hidden transition-all duration-200"
              style={{
                background: expanded === i ? "var(--bg-card-hover)" : "var(--bg-card)",
                border: expanded === i ? "1px solid var(--border-bright)" : "1px solid var(--border)",
              }}
            >
              {/* Commit header */}
              <button
                type="button"
                className="w-full text-left px-4 py-3 flex flex-wrap items-center gap-3 font-mono text-xs"
                style={{ borderBottom: expanded === i ? "1px solid var(--border)" : "none" }}
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                aria-expanded={expanded === i}
                aria-controls={`job-details-${job.hash}`}
              >
                <span
                  className="px-2 py-0.5 rounded text-xs font-bold"
                  style={{ background: "rgba(0,255,136,0.1)", color: "var(--green)", border: "1px solid rgba(0,255,136,0.2)" }}
                >
                  {job.hash}
                </span>
                <span style={{ color: "var(--cyan)" }}>{job.branch}</span>
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                  {job.company}
                </span>
                <span className="ml-auto" style={{ color: "var(--text-muted)" }}>
                  {job.period}
                </span>
                <span
                  className="transition-transform duration-200"
                  style={{ color: "var(--text-muted)", transform: expanded === i ? "rotate(180deg)" : "none" }}
                >
                  ▾
                </span>
              </button>

              {/* Expanded content */}
              {expanded === i && (
                <div id={`job-details-${job.hash}`} className="px-4 py-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-mono font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        {job.role}
                      </h3>
                      <div className="font-mono text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                        @ {job.company} · {job.location}
                      </div>
                    </div>
                    <div className="flex gap-3 font-mono text-xs">
                      <span style={{ color: "var(--green)" }}>+{job.insertions} insertions</span>
                      <span style={{ color: "var(--red)" }}>-{job.deletions} deletions</span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--green)", flexShrink: 0 }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag tag-cyan">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

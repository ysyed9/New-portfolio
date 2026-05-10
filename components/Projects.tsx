"use client";
import { useState } from "react";

type Project = {
  name: string;
  visibility: "Public" | "Private";
  description: string;
  longDesc: string;
  tags: string[];
  primaryLang: string;
  stars: number;
  forks: number;
  github?: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "AI Receptionist",
    visibility: "Public",
    description: "End-to-end RAG pipeline with real-time NLP and context-aware responses. Founder project.",
    longDesc:
      "Implemented an end-to-end RAG pipeline using OpenAI embeddings + Weaviate vector database for intelligent query handling. Designed backend architecture with PostgreSQL, Redis for caching, and Docker for containerized deployment.",
    tags: ["React", "Node.js", "Docker", "Redis", "PostgreSQL", "RAG", "OpenAI", "Weaviate"],
    primaryLang: "React",
    stars: 47,
    forks: 8,
    github: "https://github.com/ysyed9",
    featured: true,
  },
  {
    name: "AI System-Admin",
    visibility: "Public",
    description: "Autonomous AI agent that provisions full 3-tier AWS infrastructure. MCP-powered workflow.",
    longDesc:
      "Engineered an AI system-admin workflow capable of autonomously provisioning a full 3-tier AWS architecture. Designed with microservices architecture and MVC patterns, implementing CORS and aggregation queries. Features modular architecture supporting dynamic resource management and automated rollback.",
    tags: ["Python", "AWS", "PostgreSQL", "Docker", "MCP", "RAG", "Microservices"],
    primaryLang: "Python",
    stars: 62,
    forks: 11,
    github: "https://github.com/ysyed9",
    featured: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-lg overflow-hidden transition-all duration-300"
      style={{
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1px solid ${hovered ? "rgba(0,255,136,0.3)" : "var(--border-bright)"}`,
        boxShadow: hovered ? "0 0 24px rgba(0,255,136,0.08)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div
        className="px-4 py-3 font-mono text-xs flex items-center justify-between"
        style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--green)" }}>📁</span>
          <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>{project.name}</span>
        </div>
        <span
          className="px-2 py-0.5 rounded text-xs"
          style={{
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.2)",
            color: "var(--cyan)",
          }}
        >
          {project.visibility}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="font-mono text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
          {project.longDesc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag tag-green">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span
              className="flex items-center gap-1.5 px-2 py-0.5 rounded"
              style={{
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.15)",
                color: "var(--green)",
              }}
            >
              <span>●</span> {project.primaryLang}
            </span>
            <span style={{ color: "var(--text-muted)" }}>⭐ {project.stars}</span>
            <span style={{ color: "var(--text-muted)" }}>⑂ {project.forks}</span>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded border transition-all duration-200"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border-bright)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--green)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)";
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded transition-all duration-200"
                style={{
                  color: "#0a0a0f",
                  background: "var(--green)",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--green-dim)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--green)")
                }
                onClick={(e) => e.stopPropagation()}
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <h2 className="section-title mb-0">$ ls -la ~/projects</h2>
          <a
            href="https://github.com/ysyed9"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs px-4 py-1.5 rounded border transition-all duration-200"
            style={{
              color: "var(--green)",
              borderColor: "rgba(0,255,136,0.3)",
              background: "rgba(0,255,136,0.05)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.12)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.05)")
            }
          >
            View all repositories ↗
          </a>
        </div>
        <p className="font-mono text-xs mb-8" style={{ color: "var(--text-muted)" }}>
          // Pinned Projects — {projects.length} repositories
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

type Skill = { name: string; level: number; color: string };
type Category = {
  name: string;
  icon: string;
  color: string;
  description: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    name: "Languages",
    icon: "{ }",
    color: "var(--green)",
    description: "Core programming languages used for backend, scripting, and systems work.",
    skills: [
      { name: "Python", level: 92, color: "var(--green)" },
      { name: "JavaScript", level: 88, color: "var(--green)" },
      { name: "Java", level: 85, color: "var(--green)" },
      { name: "C++", level: 78, color: "var(--green)" },
      { name: "C#", level: 72, color: "var(--green)" },
      { name: "SQL", level: 85, color: "var(--green)" },
    ],
  },
  {
    name: "Frontend",
    icon: "</>",
    color: "var(--cyan)",
    description: "UI frameworks and tooling used to ship responsive product interfaces.",
    skills: [
      { name: "React.js", level: 88, color: "var(--cyan)" },
      { name: "Next.js", level: 83, color: "var(--cyan)" },
      { name: "TypeScript", level: 80, color: "var(--cyan)" },
      { name: "JavaFX", level: 65, color: "var(--cyan)" },
    ],
  },
  {
    name: "Backend & Cloud",
    icon: "⚙",
    color: "var(--purple)",
    description: "APIs, databases, and cloud services for scalable application architecture.",
    skills: [
      { name: "Node.js", level: 85, color: "var(--purple)" },
      { name: "Spring Boot", level: 78, color: "var(--purple)" },
      { name: "AWS", level: 80, color: "var(--purple)" },
      { name: "Docker", level: 82, color: "var(--purple)" },
      { name: "PostgreSQL", level: 82, color: "var(--purple)" },
      { name: "MongoDB", level: 78, color: "var(--purple)" },
      { name: "Redis", level: 75, color: "var(--purple)" },
      { name: "Firebase", level: 73, color: "var(--purple)" },
    ],
  },
  {
    name: "AI / ML",
    icon: "🧠",
    color: "var(--yellow)",
    description: "LLM and data workflows for intelligent product experiences.",
    skills: [
      { name: "RAG Pipelines", level: 88, color: "var(--yellow)" },
      { name: "LLM Orchestration", level: 85, color: "var(--yellow)" },
      { name: "Embeddings", level: 82, color: "var(--yellow)" },
      { name: "Vector Databases", level: 80, color: "var(--yellow)" },
      { name: "MCP", level: 80, color: "var(--yellow)" },
      { name: "Prompt Engineering", level: 87, color: "var(--yellow)" },
      { name: "LangChain", level: 78, color: "var(--yellow)" },
      { name: "Data Pipelines", level: 82, color: "var(--yellow)" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "⚡",
    color: "var(--cyan)",
    description: "Developer tooling, environments, and deployment support stack.",
    skills: [
      { name: "Linux / RHEL", level: 82, color: "var(--cyan)" },
      { name: "Unix", level: 80, color: "var(--cyan)" },
      { name: "Git", level: 90, color: "var(--cyan)" },
      { name: "WebLogic", level: 65, color: "var(--cyan)" },
      { name: "Tomcat", level: 68, color: "var(--cyan)" },
      { name: "Apache", level: 68, color: "var(--cyan)" },
      { name: "Android Studio", level: 62, color: "var(--cyan)" },
    ],
  },
];

function SkillBar({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded p-3 cursor-default transition-all duration-200"
      style={{
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        border: `1px solid ${hovered ? "var(--border-bright)" : "var(--border)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
          {skill.name}
        </span>
        <span className="font-mono text-xs" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: hovered ? `${skill.level}%` : `${skill.level * 0.85}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
            boxShadow: hovered ? `0 0 6px ${skill.color}` : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Skills.json</h2>
        <p className="font-mono text-xs mb-8" style={{ color: "var(--text-muted)" }}>
          // Select a category to explore
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className="font-mono text-xs px-4 py-2 rounded border transition-all duration-200"
              aria-pressed={active === i}
              style={{
                color: active === i ? "#0a0a0f" : "var(--text-secondary)",
                background: active === i ? cat.color : "transparent",
                borderColor: active === i ? cat.color : "var(--border-bright)",
                fontWeight: active === i ? 700 : 400,
              }}
            >
              <span className="mr-1">{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        {/* Active category grid */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}
        >
          <div
            className="px-4 py-2.5 flex items-center gap-2 text-xs font-mono"
            style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)" }}
          >
            <span style={{ color: categories[active].color }}>{categories[active].icon}</span>
            <span style={{ color: "var(--text-muted)" }}>{categories[active].name}</span>
            <span style={{ color: "var(--text-muted)", marginLeft: "auto" }}>
              {categories[active].skills.length} skills
            </span>
          </div>
          <div
            className="px-4 py-2 text-xs font-mono"
            style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}
          >
            {categories[active].description}
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories[active].skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* All tags overview */}
        <div className="mt-8">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--text-muted)" }}>
            // All Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.flatMap((c) => c.skills.map((s) => s.name)).map((name) => (
              <span key={name} className="tag tag-green">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

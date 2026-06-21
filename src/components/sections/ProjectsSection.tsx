"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Backend / API", value: "backend" },
  { label: "WordPress", value: "wordpress" },
];

const statusColors: Record<string, { bg: string; border: string; text: string }> = {
  "Backend Live": { bg: "rgba(99,179,237,0.1)", border: "rgba(99,179,237,0.3)", text: "#63b3ed" },
  "Freelance Build": { bg: "rgba(159,122,234,0.1)", border: "rgba(159,122,234,0.3)", text: "#9f7aea" },
  Portfolio: { bg: "rgba(246,173,85,0.1)", border: "rgba(246,173,85,0.3)", text: "#f6ad55" },
  Live: { bg: "rgba(104,211,145,0.1)", border: "rgba(104,211,145,0.3)", text: "#68d391" },
};

export default function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section id="projects" className="relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24">
        <SectionHeader
          label="// 03 — Projects"
          title="Things I've"
          highlight="Built"
          subtitle="Production-grade projects spanning logistics platforms, HR systems, fintech APIs, and WordPress client sites."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === f.value ? "rgba(99,179,237,0.12)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${active === f.value ? "rgba(99,179,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                color: active === f.value ? "#63b3ed" : "#8892b0",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const statusStyle = statusColors[project.status] || statusColors["Live"];
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="glass rounded-2xl p-6 relative overflow-hidden group"
                  style={{ transition: "background 0.3s, border-color 0.3s, transform 0.3s" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(90deg, #63b3ed, #9f7aea)",
                    }}
                  />

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-bold text-[#f0f4ff] text-lg">
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-[0.65rem] px-2.5 py-1 rounded-full ml-2 flex-shrink-0"
                      style={{
                        background: statusStyle.bg,
                        border: `1px solid ${statusStyle.border}`,
                        color: statusStyle.text,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.65rem] px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(159,122,234,0.08)",
                          border: "1px solid rgba(159,122,234,0.2)",
                          color: "#9f7aea",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#8892b0] hover:text-[#63b3ed] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#8892b0] hover:text-[#68d391] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Live Site
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

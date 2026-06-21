"use client";

import { education, certifications, affiliations } from "@/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function EducationSection() {
  return (
    <section id="education" className="relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24">
        <SectionHeader
          label="// 05 — Education & Certifications"
          title="Academic"
          highlight="Background"
          subtitle="Multidisciplinary background spanning technology, biology, and environmental science."
        />

        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {education.map((edu, i) => (
            <GlassCard key={edu.degree} className="p-6" delay={i * 0.1}>
              <h3 className="font-display font-bold text-[#f0f4ff] text-base mb-1">
                {edu.degree}
              </h3>
              <p className="text-[#63b3ed] text-sm mb-1">{edu.institution}</p>
              <p className="font-mono text-[#4a5568] text-xs mb-3">{edu.period}</p>
              <span
                className="inline-block text-xs px-3 py-1 rounded-full"
                style={{
                  background: edu.highlight
                    ? "rgba(246,173,85,0.1)"
                    : "rgba(255,255,255,0.04)",
                  border: edu.highlight
                    ? "1px solid rgba(246,173,85,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: edu.highlight ? "#f6ad55" : "#8892b0",
                }}
              >
                {edu.highlight ? "📌 " : ""}{edu.note}
              </span>
            </GlassCard>
          ))}
        </div>

        {/* Certifications */}
        <p className="font-mono text-xs text-[#63b3ed] tracking-[0.2em] uppercase mb-5">
          // Certifications
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert, i) => (
            <GlassCard key={cert.name} className="p-5 flex items-center gap-3" delay={i * 0.08}>
              <span className="text-2xl flex-shrink-0">{cert.icon}</span>
              <div>
                <p className="font-semibold text-[#f0f4ff] text-sm leading-snug mb-0.5">
                  {cert.name}
                </p>
                <p className="font-mono text-[#4a5568] text-xs">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Affiliations */}
        <p className="font-mono text-xs text-[#63b3ed] tracking-[0.2em] uppercase mb-5">
          // Professional Affiliations
        </p>
        <div className="flex flex-wrap gap-3">
          {affiliations.map((aff, i) => (
            <GlassCard
              key={aff.name}
              className="px-4 py-3 flex items-center gap-2"
              delay={i * 0.1}
            >
              <span>{aff.icon}</span>
              <span className="text-[#8892b0] text-sm">{aff.name}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

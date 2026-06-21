"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24">
        <SectionHeader
          label="// 02 — Professional Experience"
          title="Where I've"
          highlight="Worked"
          subtitle="4+ years across agency, corporate, and freelance environments — shipping real production software for real clients."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, #63b3ed, rgba(99,179,237,0.05))",
            }}
          />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="md:pl-16 relative"
              >
                {/* Dot */}
                <div
                  className="absolute left-3 top-6 w-6 h-6 rounded-full border-2 border-[#63b3ed] items-center justify-content hidden md:flex"
                  style={{ background: "#050810" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#63b3ed] mx-auto" />
                </div>

                <div
                  className="glass rounded-2xl p-7 transition-all duration-300"
                  style={{
                    borderTop: i === 0 ? "2px solid rgba(99,179,237,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,179,237,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      i === 0 ? "rgba(99,179,237,0.4)" : "rgba(255,255,255,0.08)";
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-[#f0f4ff]">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {job.current && (
                        <span
                          className="font-mono text-[0.65rem] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(104,211,145,0.1)",
                            border: "1px solid rgba(104,211,145,0.3)",
                            color: "#68d391",
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span className="font-mono text-xs text-[#63b3ed]">{job.period}</span>
                    </div>
                  </div>
                  <p className="text-[#8892b0] text-sm mb-5">
                    🏢 {job.company} · {job.location}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[#8892b0] text-sm leading-relaxed">
                        <span className="text-[#63b3ed] mt-0.5 flex-shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

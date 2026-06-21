"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, string> = {
  Frontend: "⚡",
  Backend: "⚙️",
  Database: "🗄️",
  "CMS & E-commerce": "🛒",
  "Dev Tools": "🔧",
  "Server & Deploy": "🚀",
};

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24">
        <SectionHeader
          label="// 01 — Skills & Expertise"
          title="What I"
          highlight="Build With"
          subtitle="A full-stack toolkit honed across real production environments — client delivery at Qservers, agency work at Techwithdee, and independent freelance projects."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], i) => (
            <GlassCard key={category} className="p-6" delay={i * 0.08}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{iconMap[category]}</span>
                <span className="font-mono text-[#63b3ed] text-xs tracking-[0.15em] uppercase">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full text-xs text-[#8892b0] transition-all duration-200 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(99,179,237,0.4)";
                      e.currentTarget.style.color = "#63b3ed";
                      e.currentTarget.style.background = "rgba(99,179,237,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#8892b0";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

const terminalLines = [
  { type: "comment", text: "// Akintunde Temitayo — developer.json" },
  { type: "brace", text: "{" },
  { type: "kv", key: "  name", val: '"Akintunde T."' },
  { type: "kv", key: "  role", val: '"Full-Stack Developer"' },
  { type: "kv", key: "  stack", val: '["Laravel","Next.js","MySQL"]' },
  { type: "kv", key: "  experience", val: "4" },
  { type: "kv", key: "  location", val: '"Lagos, Nigeria"' },
  { type: "kv", key: "  open_to_work", val: "true" },
  { type: "brace", text: "}" },
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb"
          style={{ width: 640, height: 640, background: "#63b3ed", top: -120, right: -120 }}
        />
        <div
          className="orb"
          style={{ width: 420, height: 420, background: "#9f7aea", bottom: 0, left: -100 }}
        />
        <div
          className="orb"
          style={{ width: 320, height: 320, background: "#68d391", top: "40%", left: "38%" }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(99,179,237,0.1)",
                border: "1px solid rgba(99,179,237,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#68d391] pulse-dot"
              />
              <span className="font-mono text-[#63b3ed] text-xs tracking-wider">
                Available for work · Lagos, Nigeria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black leading-[1.05] mb-3"
              style={{ fontSize: "clamp(2.8rem,7vw,5rem)" }}
            >
              <span className="gradient-text">Akintunde</span>
              <br />
              Temitayo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-semibold text-[#8892b0] mb-5"
              style={{ fontSize: "clamp(1.1rem,2.5vw,1.6rem)" }}
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#8892b0] leading-relaxed max-w-[480px] mb-8"
            >
              PHP/Laravel · Next.js · WordPress · MySQL.
              <br />
              4+ years shipping production web applications — from fintech APIs to logistics platforms and HR systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg,#63b3ed,#9f7aea)",
                  color: "#050810",
                  boxShadow: "0 0 0 0 rgba(99,179,237,0)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 8px 30px rgba(99,179,237,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99,179,237,0)")
                }
              >
                View My Work →
              </button>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(99,179,237,0.3)",
                  color: "#f0f4ff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99,179,237,0.08)";
                  e.currentTarget.style.borderColor = "#63b3ed";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(99,179,237,0.3)";
                }}
              >
                GitHub ↗
              </a>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#8892b0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "#f0f4ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#8892b0";
                }}
              >
                Download CV
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {[
                { val: "4+", label: "Years Exp." },
                { val: "15+", label: "Projects" },
                { val: "8+", label: "Live Sites" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-black gradient-text"
                    style={{ fontSize: "2rem" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[#8892b0] text-xs font-mono tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="floating w-full max-w-[440px] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(9,13,26,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Terminal bar */}
              <div
                className="flex items-center gap-2 px-5 py-3.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
                <span className="font-mono text-xs text-[#4a5568] ml-auto">
                  developer.json
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-[0.8rem] leading-[2]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  >
                    {line.type === "comment" && (
                      <span style={{ color: "#4a5568" }}>{line.text}</span>
                    )}
                    {line.type === "brace" && (
                      <span style={{ color: "#f0f4ff" }}>{line.text}</span>
                    )}
                    {line.type === "kv" && (
                      <>
                        <span style={{ color: "#63b3ed" }}>{line.key}</span>
                        <span style={{ color: "#8892b0" }}>: </span>
                        <span
                          style={{
                            color: line.val!.startsWith('"')
                              ? "#f6ad55"
                              : line.val === "true"
                              ? "#68d391"
                              : line.val!.startsWith("[")
                              ? "#9f7aea"
                              : "#68d391",
                          }}
                        >
                          {line.val}
                        </span>
                        <span style={{ color: "#4a5568" }}>,</span>
                      </>
                    )}
                  </motion.div>
                ))}
                <div className="mt-1">
                  <span style={{ color: "#63b3ed" }}>$ </span>
                  <span
                    className="cursor-blink inline-block w-2 h-3.5 bg-[#63b3ed] align-middle"
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

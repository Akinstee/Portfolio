"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { kpis, skillProficiency, sqlMockData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const barData = [
  { year: "2020", projects: 2 },
  { year: "2021", projects: 4 },
  { year: "2022", projects: 4 },
  { year: "2023", projects: 3 },
  { year: "2024", projects: 3 },
];

const pieData = [
  { name: "PHP/Laravel", value: 35, color: "#63b3ed" },
  { name: "WordPress", value: 25, color: "#9f7aea" },
  { name: "Next.js", value: 20, color: "#68d391" },
  { name: "REST API", value: 12, color: "#f6ad55" },
  { name: "MySQL", value: 8, color: "#fc8181" },
];

const defaultSQL = `SELECT p.title, p.category, p.status, p.year
FROM projects p
WHERE p.status IN ('Live', 'Backend Live', 'Freelance Build')
ORDER BY p.year DESC
LIMIT 6;`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="glass rounded-lg px-3 py-2 text-xs font-mono"
        style={{ border: "1px solid rgba(99,179,237,0.3)" }}
      >
        <p className="text-[#63b3ed]">{label}</p>
        <p className="text-[#68d391]">{payload[0].value} projects</p>
      </div>
    );
  }
  return null;
};

export default function DataSection() {
  const [sql, setSql] = useState(defaultSQL);
  const [queryRunning, setQueryRunning] = useState(false);
  const [queryResults, setQueryResults] = useState(sqlMockData);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsAnimated(true); },
      { threshold: 0.3 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  const runQuery = () => {
    setQueryRunning(true);
    setTimeout(() => {
      setQueryResults([...sqlMockData]);
      setQueryRunning(false);
    }, 700);
  };

  return (
    <section id="data" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(9,13,26,0.4),transparent)",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 relative z-10">
        <SectionHeader
          label="// 04 — Data Analyst Dashboard"
          title="Data"
          highlight="Insights"
          subtitle="Interactive KPIs, SQL query interface, and visualisation tools — showcasing data analysis capabilities alongside development work."
        />

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <GlassCard key={kpi.label} className="p-5" delay={i * 0.08}>
              <p className="font-mono text-[0.65rem] text-[#4a5568] tracking-[0.15em] uppercase mb-2">
                {kpi.label}
              </p>
              <p
                className="font-display font-black gradient-text mb-1"
                style={{ fontSize: "2.25rem" }}
              >
                {kpi.value}
              </p>
              <p className="text-[#68d391] text-xs flex items-center gap-1">
                <span>↑</span> {kpi.delta}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Bar Chart */}
          <GlassCard className="p-6">
            <h3 className="font-display font-bold text-[#f0f4ff] mb-1">
              Project Output by Year
            </h3>
            <p className="text-[#4a5568] text-xs font-mono mb-5">
              Production websites & applications delivered
            </p>
            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barSize={28}>
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#8892b0", fontSize: 11, fontFamily: "JetBrains Mono" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#8892b0", fontSize: 11, fontFamily: "JetBrains Mono" }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,179,237,0.05)" }} />
                  <Bar
                    dataKey="projects"
                    fill="url(#barGrad)"
                    radius={[6, 6, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#63b3ed" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#9f7aea" stopOpacity={0.4} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Pie / Donut Chart */}
          <GlassCard className="p-6">
            <h3 className="font-display font-bold text-[#f0f4ff] mb-1">
              Tech Stack Distribution
            </h3>
            <p className="text-[#4a5568] text-xs font-mono mb-5">
              Breakdown of projects by primary technology
            </p>
            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} opacity={0.85} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{
                      fontSize: "11px",
                      fontFamily: "JetBrains Mono",
                      color: "#8892b0",
                    }}
                  />
                  <Tooltip
                    formatter={(v: any) => [`${v}%`, "Share"]}
                    contentStyle={{
                      background: "rgba(9,13,26,0.95)",
                      border: "1px solid rgba(99,179,237,0.3)",
                      borderRadius: 8,
                      fontSize: 11,
                      fontFamily: "JetBrains Mono",
                      color: "#f0f4ff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>

        {/* SQL Widget */}
        <GlassCard className="p-6 mb-5" hover={false}>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h3 className="font-display font-bold text-[#f0f4ff]">SQL Query Interface</h3>
              <p className="text-[#4a5568] text-xs font-mono mt-0.5">
                Run mock queries against portfolio dataset
              </p>
            </div>
            <button
              onClick={runQuery}
              disabled={queryRunning}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-mono transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg,#63b3ed,#9f7aea)",
                color: "#050810",
              }}
            >
              {queryRunning ? "⟳ Running..." : "▶ Run Query"}
            </button>
          </div>

          <textarea
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            rows={5}
            spellCheck={false}
            className="w-full p-4 rounded-xl font-mono text-sm leading-relaxed resize-y outline-none transition-all duration-200"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#68d391",
              minHeight: 100,
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(99,179,237,0.4)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.08)")
            }
          />

          <div className="mt-4 overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-xs">
              <thead>
                <tr style={{ background: "rgba(99,179,237,0.06)" }}>
                  {["TITLE", "CATEGORY", "STATUS", "YEAR"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 font-mono tracking-widest"
                      style={{
                        color: "#63b3ed",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {queryResults.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.02)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "transparent")
                    }
                  >
                    <td className="px-4 py-3 text-[#f0f4ff]">{row.title}</td>
                    <td className="px-4 py-3 text-[#9f7aea]">{row.category}</td>
                    <td className="px-4 py-3 text-[#68d391]">{row.status}</td>
                    <td className="px-4 py-3 text-[#f6ad55]">{row.year}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Skill Bars + PowerBI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Skill Proficiency */}
          <GlassCard className="p-6" hover={false}>
            <h3 className="font-display font-bold text-[#f0f4ff] mb-1">
              Skill Proficiency
            </h3>
            <p className="text-[#4a5568] text-xs font-mono mb-5">
              Self-assessed expertise across key technologies
            </p>
            <div ref={barsRef} className="flex flex-col gap-4">
              {skillProficiency.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5 text-xs">
                    <span className="text-[#8892b0]">{skill.name}</span>
                    <span className="font-mono text-[#63b3ed]">{skill.pct}%</span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: barsAnimated ? `${skill.pct}%` : 0 }}
                      transition={{ duration: 1.4, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${
                          skill.color.replace("from-", "").replace("to-", "")
                            .replace("cyan-400", "#63b3ed")
                            .replace("violet-500", "#9f7aea")
                            .replace("green-400", "#68d391")
                            .replace("orange-400", "#f6ad55")
                        }, #9f7aea)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Power BI Embed */}
          <GlassCard className="p-6" hover={false}>
            <h3 className="font-display font-bold text-[#f0f4ff] mb-1">
              Power BI Dashboard
            </h3>
            <p className="text-[#4a5568] text-xs font-mono mb-4">
              Embedded analytics & business intelligence
            </p>
            <div
              className="rounded-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden"
              style={{
                height: 280,
                background: "linear-gradient(135deg,rgba(99,179,237,0.05),rgba(159,122,234,0.05))",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.03) 40px,rgba(255,255,255,0.03) 41px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(255,255,255,0.03) 80px,rgba(255,255,255,0.03) 81px)",
                }}
              />
              <span className="text-5xl relative z-10">📊</span>
              <div className="text-center relative z-10 px-6">
                <h4 className="font-display font-bold text-[#f0f4ff] mb-1">
                  Portfolio Analytics Dashboard
                </h4>
                <p className="text-[#8892b0] text-xs leading-relaxed mb-3">
                  Publish your Power BI report and paste the embed URL to display your live dashboard here.
                </p>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono"
                  style={{
                    background: "rgba(246,173,85,0.1)",
                    border: "1px solid rgba(246,173,85,0.3)",
                    color: "#f6ad55",
                  }}
                >
                  ⚡ Ready to embed — Add your Power BI URL
                </span>
              </div>
            </div>
            <p className="text-[#4a5568] text-xs font-mono mt-3">
              {"// Replace the embed above with: <iframe src='YOUR_POWERBI_URL' />"}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

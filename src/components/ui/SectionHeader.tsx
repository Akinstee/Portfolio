"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#63b3ed] tracking-[0.2em] uppercase mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-black leading-tight mb-3"
        style={{ fontSize: "clamp(2rem,5vw,3.25rem)" }}
      >
        {title} <span className="gradient-text">{highlight}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8892b0] max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

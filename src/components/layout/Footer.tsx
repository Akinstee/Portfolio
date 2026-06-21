"use client";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-0">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-black text-lg gradient-text">AT.</span>
          <span className="text-[#4a5568] text-sm font-mono">
            © {new Date().getFullYear()} Akintunde Temitayo. Built in Lagos 🇳🇬
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a5568] hover:text-[#63b3ed] text-sm font-mono transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-[#4a5568] hover:text-[#63b3ed] text-sm font-mono transition-colors"
          >
            Email
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#4a5568] hover:text-[#63b3ed] text-sm font-mono transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

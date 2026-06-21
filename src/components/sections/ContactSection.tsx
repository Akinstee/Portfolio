"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal, affiliations } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const contactItems = [
  { icon: "✉️", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: "📞", label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: "📍", label: "Location", value: personal.location, href: null },
  { icon: "🐙", label: "GitHub", value: "github.com/Akinstee", href: personal.github },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(errors.filter((err) => err !== e.target.name));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["firstName", "email", "message"];
    const missing = required.filter((k) => !form[k as keyof typeof form].trim());
    if (missing.length) { setErrors(missing); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24">
        <SectionHeader
          label="// 06 — Contact"
          title="Let's Work"
          highlight="Together"
          subtitle="Available for freelance projects, remote roles, and collaboration. Based in Lagos — working globally."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: "rgba(99,179,237,0.08)",
                    border: "1px solid rgba(99,179,237,0.2)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] text-[#4a5568] tracking-widest uppercase mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[#f0f4ff] text-sm hover:text-[#63b3ed] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#f0f4ff] text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <GlassCard className="p-5 mt-2" hover={false}>
              <p className="font-mono text-xs text-[#63b3ed] tracking-[0.15em] uppercase mb-3">
                Affiliations
              </p>
              <div className="flex flex-col gap-2">
                {affiliations.map((a) => (
                  <p key={a.name} className="text-[#8892b0] text-sm">
                    {a.icon} {a.name}
                  </p>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <GlassCard className="p-7" hover={false}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <span className="text-5xl">✅</span>
                <h3 className="font-display font-bold text-[#f0f4ff] text-xl">Message sent!</h3>
                <p className="text-[#8892b0] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(["firstName", "lastName"] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#8892b0] font-medium">
                        {field === "firstName" ? "First Name" : "Last Name"}
                        {field === "firstName" && " *"}
                      </label>
                      <input
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={field === "firstName" ? "John" : "Doe"}
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: `1px solid ${errors.includes(field) ? "rgba(252,129,129,0.5)" : "rgba(255,255,255,0.08)"}`,
                          color: "#f0f4ff",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(99,179,237,0.4)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.includes(field)
                            ? "rgba(252,129,129,0.5)"
                            : "rgba(255,255,255,0.08)")
                        }
                      />
                    </div>
                  ))}
                </div>
                {(
                  [
                    { name: "email" as const, label: "Email Address *", placeholder: "john@example.com", type: "email" },
                    { name: "subject" as const, label: "Subject", placeholder: "Project Inquiry / Collaboration / ...", type: "text" },
                  ] as const
                ).map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#8892b0] font-medium">{field.label}</label>
                    <input
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${errors.includes(field.name) ? "rgba(252,129,129,0.5)" : "rgba(255,255,255,0.08)"}`,
                        color: "#f0f4ff",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(99,179,237,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.includes(field.name)
                          ? "rgba(252,129,129,0.5)"
                          : "rgba(255,255,255,0.08)")
                      }
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#8892b0] font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="px-4 py-3 rounded-xl text-sm outline-none resize-y transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${errors.includes("message") ? "rgba(252,129,129,0.5)" : "rgba(255,255,255,0.08)"}`,
                      color: "#f0f4ff",
                      minHeight: 130,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(99,179,237,0.4)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.includes("message")
                        ? "rgba(252,129,129,0.5)"
                        : "rgba(255,255,255,0.08)")
                    }
                  />
                </div>
                {errors.length > 0 && (
                  <p className="text-xs text-[#fc8181] font-mono">
                    ⚠ Please fill in all required fields.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg,#63b3ed,#9f7aea)",
                    color: "#050810",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 30px rgba(99,179,237,0.3)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.boxShadow = "none")
                  }
                >
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

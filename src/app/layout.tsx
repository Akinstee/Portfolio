import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akintunde Temitayo — Full-Stack Developer",
  description:
    "Full-Stack Developer specialising in PHP/Laravel, Next.js, and WordPress. 4+ years building production web applications in Lagos, Nigeria.",
  keywords: ["Full-Stack Developer", "PHP", "Laravel", "Next.js", "WordPress", "Lagos", "Nigeria"],
  authors: [{ name: "Akintunde Temitayo" }],
  openGraph: {
    title: "Akintunde Temitayo — Full-Stack Developer",
    description: "PHP/Laravel · Next.js · WordPress. Building production-grade web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

# Akintunde Temitayo — Portfolio

> Full-Stack Developer · PHP/Laravel · Next.js · WordPress  
> Built with **Next.js 15**, **Tailwind CSS**, **Framer Motion**, and **Recharts**

## Features
- Hero with animated terminal card
- Filterable projects (Full-Stack / Backend / WordPress)
- Data Dashboard: KPI cards, Bar chart, Donut chart, SQL widget, Skill bars, Power BI slot
- Animated timeline experience section
- Fully responsive, dark glassmorphism design

## Stack
Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Recharts

## Quick Start
```bash
npm install
npm run dev
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial portfolio build"
git branch -M main
git remote add origin https://github.com/Akinstee/portfolio.git
git push -u origin main
```

## Structure
```
src/
├── app/           # Next.js App Router
├── components/
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Hero, About, Experience, Projects, Data, Education, Contact
│   └── ui/        # GlassCard, SectionHeader
└── data/
    └── portfolio.ts  # All CV data — edit here
```

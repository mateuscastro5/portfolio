import type { Experience } from "@/types/domain"

export const experiences: Experience[] = [
  {
    company: "Safras & Cifras",
    role: {
      en: "Fullstack Developer",
      pt: "Desenvolvedor Fullstack",
    },
    startDate: "2025-09-01",
    endDate: null,
    description: {
      en: "Architected the Conecta Safras platform from scratch: a Turborepo + pnpm monorepo with 7 apps (Next.js and Vite) and 10+ internal packages, from the shared design system to a custom tax calculation engine. Auth and Row Level Security run on Supabase across subdomains, deployed on Cloudflare Workers/Pages with per-app selective CI/CD.",
      pt: "Arquitetei a plataforma Conecta Safras do zero: um monorepo Turborepo + pnpm com 7 apps (Next.js e Vite) e mais de 10 pacotes internos, do design system compartilhado a um motor de cálculo tributário próprio. Autenticação e Row Level Security via Supabase entre subdomínios, deploy em Cloudflare Workers/Pages com CI/CD seletivo por app.",
    },
    techStack: ["TypeScript", "Next.js", "React", "Supabase", "Turborepo", "Cloudflare"],
  },
  {
    company: "Betalent",
    role: {
      en: "Backend Developer",
      pt: "Desenvolvedor Backend",
    },
    startDate: "2025-01-01",
    endDate: "2025-06-01",
    description: {
      en: "Worked full time on early-stage and ongoing projects with varied scopes, from microservices to REST APIs.",
      pt: "Atuei em projetos early-stage e em andamento, em regime full time, com escopos variados, de microsserviços a APIs REST.",
    },
    techStack: ["TypeScript", "PHP", "MySQL", "Laravel", "AdonisJS"],
  },
]

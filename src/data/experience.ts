import type { Experience } from "@/types/domain"

export const experiences: Experience[] = [
  {
    company: "Safras & Cifras",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    startDate: "2025-09-01",
    endDate: null,
    description: {
      en: "Architected the Conecta Safras platform from scratch and am its top contributor in a team of three: a Turborepo + pnpm monorepo with 7 apps (Next.js and Vite) and 14 internal packages, from the shared design system to a custom tax calculation engine, serving 340+ consultants and clients. Built a remote MCP server (OAuth 2.1, ~160 tools) that lets consultants read and write platform data from Claude under their own permissions. Auth and Row Level Security run on Supabase across subdomains, deployed on Cloudflare Workers/Pages with per-app selective CI/CD.",
      pt: "Arquitetei a plataforma Conecta Safras do zero e sou o maior contribuidor num time de três: um monorepo Turborepo + pnpm com 7 apps (Next.js e Vite) e 14 pacotes internos, do design system compartilhado a um motor de cálculo tributário próprio, atendendo mais de 340 consultores e clientes. Construí um servidor MCP remoto (OAuth 2.1, ~160 ferramentas) que permite aos consultores consultar e lançar dados da plataforma pelo Claude com as próprias permissões. Autenticação e Row Level Security via Supabase entre subdomínios, deploy em Cloudflare Workers/Pages com CI/CD seletivo por app.",
    },
    techStack: ["TypeScript", "Next.js", "React", "Supabase", "PostgreSQL", "Turborepo", "Cloudflare", "MCP"],
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
      en: "Worked full time at a software outsourcing company on early-stage and ongoing client projects with varied scopes, from microservices and REST APIs to maintaining and evolving legacy systems, across PHP/Laravel, AdonisJS and Vue.js.",
      pt: "Atuei em tempo integral numa software house de outsourcing, em projetos de clientes early-stage e em andamento com escopos variados, de microsserviços e APIs REST à manutenção e evolução de sistemas legados, com PHP/Laravel, AdonisJS e Vue.js.",
    },
    techStack: ["TypeScript", "PHP", "Laravel", "AdonisJS", "Vue.js", "MySQL"],
  },
]

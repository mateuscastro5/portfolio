import type { Profile } from "@/types/domain"

export const profile: Profile = {
  name: "Mateus",
  role: {
    en: "Full Stack Engineer (Backend Focus)",
    pt: "Engenheiro Full Stack (foco em backend)",
  },
  headline: {
    en: "Building Robust & Scalable Backends",
    pt: "Construindo Backends Robustos e Escaláveis",
  },
  headlineSuffix: {
    en: "(and frontend too)",
    pt: "(e frontend também)",
  },
  tagline: {
    en: "Full Stack Engineer with a backend focus, building robust APIs, scalable systems and AI integrations.",
    pt: "Engenheiro Full Stack com foco em backend: construo APIs robustas, sistemas escaláveis e integrações com IA.",
  },
  bio: {
    en: "Hey there! I'm Mateus, a Full Stack Engineer with a backend focus who enjoys turning complex problems into reliable, well-tested systems. I started at a software outsourcing company, shipping APIs, microservices and legacy-system work for different clients. Today I lead the architecture of a multi-app agribusiness platform used by 340+ people, including an MCP server that lets the team operate it straight from Claude.",
    pt: "Olá! Eu sou o Mateus, Engenheiro Full Stack com foco em backend, e gosto de transformar problemas complexos em sistemas confiáveis e bem testados. Comecei numa software house de outsourcing, entregando APIs, microsserviços e evoluções de sistemas legados para clientes diferentes. Hoje lidero a arquitetura de uma plataforma do agronegócio com vários apps e mais de 340 usuários, incluindo um servidor MCP que permite ao time operá-la direto pelo Claude.",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: undefined,
  socialLinks: [
    { platform: "github", url: "https://github.com/mateuscastro5" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/mateus-fagundes-dev" },
    { platform: "email", url: "mailto:mateus.castro2011@gmail.com" },
    { platform: "whatsapp", url: "https://wa.me/555397064365" },
  ],
}

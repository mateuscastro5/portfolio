import type { Profile } from "@/types/domain"

export const profile: Profile = {
  name: "Mateus",
  role: {
    en: "Backend Engineer",
    pt: "Engenheiro Backend",
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
    en: "Backend Engineer building robust APIs and scalable, well-tested systems.",
    pt: "Construo APIs robustas e sistemas backend escaláveis e bem testados.",
  },
  bio: {
    en: "Hey there! I'm Mateus, a Backend Engineer (that can develop front if needed) who enjoys turning complex problems into reliable, well-tested systems. Over the past few years I've worked across APIs and microservices, always focused on solid architecture and long-term maintainability.",
    pt: "Olá! Eu sou o Mateus, um Engenheiro Backend (que também dá conta do front quando precisa) que gosta de transformar problemas complexos em sistemas confiáveis e bem testados. Nos últimos anos, trabalhei com APIs e microsserviços, sempre com foco em arquitetura sólida e manutenibilidade a longo prazo.",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: undefined,
  socialLinks: [
    { platform: "github", url: "https://github.com/mateuscastro5" },
    { platform: "email", url: "mailto:mateus.castro2011@gmail.com" },
    { platform: "whatsapp", url: "https://wa.me/555397064365" },
  ],
}

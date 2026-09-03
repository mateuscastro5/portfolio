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
    en: "Hey there! I'm Mateus, a Backend Engineer who enjoys turning complex problems into reliable, well-tested systems. Over the past few years I've worked across APIs, microservices and cloud infrastructure, always focused on clean code, solid architecture and long-term maintainability. Let's build something solid together!",
    pt: "Olá! Eu sou o Mateus, um Engenheiro Backend que gosta de transformar problemas complexos em sistemas confiáveis e bem testados. Nos últimos anos, trabalhei com APIs, microsserviços e infraestrutura em nuvem, sempre com foco em código limpo, arquitetura sólida e manutenibilidade a longo prazo. Vamos construir algo sólido juntos!",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: undefined,
  socialLinks: [
    { platform: "github", url: "https://github.com/mateuscastro5" },
    { platform: "email", url: "mailto:mateus.castro2011@gmail.com" },
    { platform: "whatsapp", url: "https://wa.me/555397064365" },
  ],
}

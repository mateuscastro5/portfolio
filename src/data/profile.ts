import type { Profile } from "@/types/domain"

export const profile: Profile = {
  name: "Jane Doe",
  role: {
    en: "Fullstack Web Developer",
    pt: "Desenvolvedora Web Fullstack",
  },
  headline: {
    en: "Building Scalable & Engaging Web Experiences",
    pt: "Construindo Experiências Web Escaláveis e Envolventes",
  },
  bio: {
    en: "Hey there! I'm Jane, a Full Stack Developer who loves building cool and scalable web experiences. From crafting beautiful frontends to powering robust backends, I bring ideas to life with clean code and great design. Let's create something amazing together!",
    pt: "Olá! Eu sou a Jane, uma desenvolvedora Full Stack apaixonada por construir experiências web escaláveis e incríveis. De interfaces bonitas a back-ends robustos, transformo ideias em realidade com código limpo e ótimo design. Vamos criar algo incrível juntos!",
  },
  avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=portfolio-jane",
  resumeUrl: undefined,
  socialLinks: [
    { platform: "github", url: "https://github.com/yourusername" },
    { platform: "email", url: "mailto:you@example.com" },
    { platform: "whatsapp", url: "https://wa.me/5500000000000" },
  ],
}

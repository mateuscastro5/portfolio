import type { Profile } from "@/types/domain"

export const profile: Profile = {
  name: "Jane Doe",
  role: {
    en: "Backend Engineer",
    pt: "Engenheira Backend",
  },
  headline: {
    en: "Building Robust & Scalable Backend Systems",
    pt: "Construindo Sistemas Backend Robustos e Escaláveis",
  },
  bio: {
    en: "Hey there! I'm Jane, a Backend Engineer who loves designing robust APIs and scalable systems. From data modeling to cloud infrastructure, I turn complex problems into reliable, well-tested backends. Let's build something solid together!",
    pt: "Olá! Eu sou a Jane, uma Engenheira Backend apaixonada por projetar APIs robustas e sistemas escaláveis. Da modelagem de dados à infraestrutura em nuvem, transformo problemas complexos em backends confiáveis e bem testados. Vamos construir algo sólido juntos!",
  },
  avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=portfolio-jane",
  resumeUrl: undefined,
  socialLinks: [
    { platform: "github", url: "https://github.com/yourusername" },
    { platform: "email", url: "mailto:you@example.com" },
    { platform: "whatsapp", url: "https://wa.me/5500000000000" },
  ],
}

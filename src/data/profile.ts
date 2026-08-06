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
  bio: {
    en: "Backend Engineer building robust APIs and scalable, well-tested systems.",
    pt: "Engenheiro Backend construindo APIs robustas e sistemas escaláveis e bem testados.",
  },
  avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=portfolio-mateus",
  resumeUrl: undefined,
  socialLinks: [
    { platform: "github", url: "https://github.com/yourusername" },
    { platform: "email", url: "mailto:you@example.com" },
    { platform: "whatsapp", url: "https://wa.me/5500000000000" },
  ],
}

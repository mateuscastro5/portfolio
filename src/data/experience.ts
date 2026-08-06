import type { Experience } from "@/types/domain"

export const experiences: Experience[] = [
  {
    company: "Nimbus Labs",
    role: {
      en: "Fullstack Web Developer",
      pt: "Desenvolvedora Web Fullstack",
    },
    startDate: "2023-03-01",
    endDate: null,
    description: {
      en: "Leading the development of the core web platform, from designing REST APIs to building the React frontend and mentoring junior developers.",
      pt: "Liderando o desenvolvimento da plataforma web principal, desde o design de APIs REST até a construção do frontend em React e mentoria de devs juniores.",
    },
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Brightpath Studio",
    role: {
      en: "Frontend Developer",
      pt: "Desenvolvedora Frontend",
    },
    startDate: "2021-06-01",
    endDate: "2023-02-01",
    description: {
      en: "Built and maintained client websites and internal tools, focusing on performance, accessibility and pixel-perfect design implementation.",
      pt: "Construção e manutenção de sites de clientes e ferramentas internas, com foco em performance, acessibilidade e implementação fiel de design.",
    },
    techStack: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    company: "Freelance",
    role: {
      en: "Web Developer",
      pt: "Desenvolvedora Web",
    },
    startDate: "2019-09-01",
    endDate: "2021-05-01",
    description: {
      en: "Delivered custom websites and small web apps for local businesses, handling everything from design to deployment.",
      pt: "Entrega de sites personalizados e pequenos apps web para negócios locais, cuidando de tudo, do design ao deploy.",
    },
    techStack: ["JavaScript", "PHP"],
  },
]

import type { Experience } from "@/types/domain"

export const experiences: Experience[] = [
  {
    company: "Nimbus Labs",
    role: {
      en: "Backend Engineer",
      pt: "Engenheira Backend",
    },
    startDate: "2023-03-01",
    endDate: null,
    description: {
      en: "Designing and maintaining the core REST APIs and microservices, modeling the primary PostgreSQL schemas, and improving reliability with Redis caching and better observability.",
      pt: "Desenho e manutenção das APIs REST e microsserviços principais, modelagem dos esquemas PostgreSQL e melhoria de confiabilidade com cache em Redis e observabilidade.",
    },
    techStack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "AWS"],
  },
  {
    company: "Brightpath Studio",
    role: {
      en: "Backend Developer",
      pt: "Desenvolvedora Backend",
    },
    startDate: "2021-06-01",
    endDate: "2023-02-01",
    description: {
      en: "Built internal services and integrations for client platforms, focusing on API design, database performance and containerized deployments.",
      pt: "Construção de serviços internos e integrações para plataformas de clientes, com foco em design de API, performance de banco de dados e deploys containerizados.",
    },
    techStack: ["Python", "PostgreSQL", "Docker"],
  },
  {
    company: "Freelance",
    role: {
      en: "Software Developer",
      pt: "Desenvolvedora de Software",
    },
    startDate: "2019-09-01",
    endDate: "2021-05-01",
    description: {
      en: "Delivered backend services and small APIs for local businesses, handling everything from data modeling to deployment.",
      pt: "Entrega de serviços backend e pequenas APIs para negócios locais, cuidando de tudo, da modelagem de dados ao deploy.",
    },
    techStack: ["Kotlin", "Spring"],
  },
]

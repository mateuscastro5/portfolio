import type { Project } from "@/types/domain"

export const projects: Project[] = [
  {
    title: {
      en: "Commerce API Platform",
      pt: "Plataforma de API de Comércio",
    },
    description: {
      en: "A multi-tenant REST API for online stores, with order processing, inventory management and Redis-backed caching.",
      pt: "Uma API REST multi-tenant para lojas online, com processamento de pedidos, gestão de estoque e cache com Redis.",
    },
    techStack: ["NestJS", "PostgreSQL", "Redis", "AWS"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Commerce+API",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/commerce-api",
    featured: true,
  },
  {
    title: {
      en: "Task Flow Service",
      pt: "Task Flow Service",
    },
    description: {
      en: "A task management backend with real-time updates over websockets and role-based team permissions.",
      pt: "Um backend de gerenciamento de tarefas com atualizações em tempo real via websockets e permissões de time por papel.",
    },
    techStack: ["Kotlin", "Spring", "PostgreSQL", "Docker"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Task+Flow+Service",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/task-flow-service",
    featured: true,
  },
  {
    title: {
      en: "Recipe Finder Service",
      pt: "Recipe Finder Service",
    },
    description: {
      en: "A Python service for ingredient-based recipe search, exposing a REST API consumed by web and mobile clients.",
      pt: "Um serviço em Python para busca de receitas por ingredientes, expondo uma API REST consumida por clientes web e mobile.",
    },
    techStack: ["Python", "Docker"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Recipe+Finder+Service",
    repoUrl: "https://github.com/yourusername/recipe-finder-service",
    featured: false,
  },
]

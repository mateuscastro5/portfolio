import type { Project } from "@/types/domain"

export const projects: Project[] = [
  {
    title: {
      en: "Commerce Dashboard",
      pt: "Dashboard de E-commerce",
    },
    description: {
      en: "A real-time analytics dashboard for online stores, with revenue charts, inventory alerts and multi-tenant support.",
      pt: "Um dashboard de analytics em tempo real para lojas online, com gráficos de receita, alertas de estoque e suporte multi-tenant.",
    },
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Commerce+Dashboard",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/commerce-dashboard",
    featured: true,
  },
  {
    title: {
      en: "Task Flow",
      pt: "Task Flow",
    },
    description: {
      en: "A collaborative task manager with drag-and-drop boards, real-time updates and team permissions.",
      pt: "Um gerenciador de tarefas colaborativo com quadros drag-and-drop, atualizações em tempo real e permissões de time.",
    },
    techStack: ["Next.js", "GraphQL", "Docker"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Task+Flow",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/task-flow",
    featured: true,
  },
  {
    title: {
      en: "Recipe Finder",
      pt: "Buscador de Receitas",
    },
    description: {
      en: "A recipe discovery app with ingredient-based search and personalized meal plans.",
      pt: "Um app de descoberta de receitas com busca por ingredientes e planos de refeição personalizados.",
    },
    techStack: ["React", "Tailwind CSS"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Recipe+Finder",
    repoUrl: "https://github.com/yourusername/recipe-finder",
    featured: false,
  },
]

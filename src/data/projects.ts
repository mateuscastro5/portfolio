import type { Project } from "@/types/domain"

export const projects: Project[] = [
  {
    title: {
      en: "Artemis",
      pt: "Artemis",
    },
    description: {
      en: "A technical performance platform for Tech Leads: syncs GitHub PRs and commits, then uses a dual-LLM + RAG pipeline to analyze each PR's complexity, surfacing each developer's strengths, areas to improve, and their progression over time through memory of past analyses.",
      pt: "Uma plataforma de performance técnica para Tech Leads: sincroniza PRs e commits do GitHub e usa um pipeline dual-LLM + RAG para analisar a complexidade de cada PR, identificando pontos fortes, pontos de melhoria e a progressão de cada dev ao longo do tempo, com memória das análises anteriores.",
    },
    techStack: ["React", "NestJS", "FastAPI", "PostgreSQL", "Qdrant"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Artemis",
    liveUrl: "https://theartemis.vercel.app/",
    repos: [
      { label: "Front", url: "https://github.com/mateuscastro5/perform-front" },
      { label: "API", url: "https://github.com/mateuscastro5/perform-api" },
      { label: "AI", url: "https://github.com/mateuscastro5/perform-ai" },
    ],
    featured: true,
  },
  {
    title: {
      en: "Aspen CLI",
      pt: "Aspen CLI",
    },
    description: {
      en: "A CLI that scaffolds backend projects from scratch: pick the framework (Express, Fastify, NestJS, AdonisJS), ORM, database and extras like Docker, JWT or Swagger, and it generates the boilerplate instantly.",
      pt: "Uma CLI que gera projetos de backend do zero: escolhe o framework (Express, Fastify, NestJS, AdonisJS), ORM, banco de dados e extras como Docker, JWT ou Swagger, e ela monta o boilerplate na hora.",
    },
    techStack: ["TypeScript", "Node.js", "Commander.js"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Aspen+CLI",
    repoUrl: "https://github.com/mateuscastro5/aspen",
    featured: true,
  },
  {
    title: {
      en: "Event Ticketing API",
      pt: "Event Ticketing API",
    },
    description: {
      en: "A REST API in Kotlin and Spring Boot for event registration, with capacity control and automated waitlists. Small and still a work in progress.",
      pt: "Uma API REST em Kotlin e Spring Boot para inscrição em eventos, com controle de capacidade e lista de espera automática. Projeto pequeno e ainda em desenvolvimento.",
    },
    techStack: ["Kotlin", "Spring Boot", "JPA"],
    image: "https://placehold.co/640x400/e5e4e7/08060d?text=Event+Ticketing+API",
    repoUrl: "https://github.com/mateuscastro5/kotlin-event-ticketing-api",
    featured: false,
  },
]

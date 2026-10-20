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
    image: "/projects/artemis.png",
    liveUrl: "https://theartemis.vercel.app/",
    repos: [
      { label: "Front", url: "https://github.com/mateuscastro5/artemis-front" },
      { label: "API", url: "https://github.com/mateuscastro5/artemis-api" },
      { label: "AI", url: "https://github.com/mateuscastro5/artemis-ai" },
    ],
    featured: true,
  },
  {
    title: {
      en: "Aspen CLI",
      pt: "Aspen CLI",
    },
    description: {
      en: "An open-source CLI published on npm (cli-aspen, 600+ downloads) that scaffolds backend projects from scratch: pick the framework (Express, Fastify, NestJS, AdonisJS), ORM, database and extras like Docker, JWT or Swagger, and it generates the boilerplate instantly.",
      pt: "Uma CLI open source publicada no npm (cli-aspen, mais de 600 downloads) que gera projetos de backend do zero: escolhe o framework (Express, Fastify, NestJS, AdonisJS), ORM, banco de dados e extras como Docker, JWT ou Swagger, e ela monta o boilerplate na hora.",
    },
    techStack: ["TypeScript", "Node.js", "Commander.js"],
    image: "/projects/aspen.png",
    repos: [
      { label: "GitHub", url: "https://github.com/mateuscastro5/aspen" },
      { label: "npm", url: "https://www.npmjs.com/package/cli-aspen" },
    ],
    featured: true,
  },
  {
    title: {
      en: "Asteroids Neuroevolution",
      pt: "Asteroids com Neuroevolução",
    },
    description: {
      en: "An agent that learns to play Atari's Asteroids through neuroevolution: a genetic algorithm evolves a neural network's weights using the game score as fitness. It averages 3,954 points per game against 3,436 for the best fixed strategy, over 300 games it never saw in training.",
      pt: "Um agente que aprende a jogar Asteroids do Atari com neuroevolução: um algoritmo genético evolui os pesos de uma rede neural usando a pontuação do jogo como fitness. Faz em média 3.954 pontos por partida, contra 3.436 da melhor estratégia fixa, em 300 partidas que nunca viu no treino.",
    },
    techStack: ["Python", "NumPy", "Gymnasium", "ALE"],
    image: "/projects/asteroids.png",
    repoUrl: "https://github.com/mateuscastro5/asteroids-reinforcement-learning",
    featured: true,
  },
  {
    title: {
      en: "AI Sorting Hat",
      pt: "Chapéu Seletor IA",
    },
    description: {
      en: "An end-to-end machine learning app that digitizes Hogwarts' Sorting Hat: two classifiers trained on Kaggle datasets (99.5% accuracy from personality traits, ~44% from registry data alone), served by a FastAPI API with a web system for single and batch sorting.",
      pt: "Uma aplicação de Machine Learning de ponta a ponta que digitaliza o Chapéu Seletor de Hogwarts: dois classificadores treinados com datasets do Kaggle (99,5% de acurácia com traços de personalidade, ~44% só com a ficha cadastral), servidos por uma API FastAPI com um sistema web para seleção individual e em lote.",
    },
    techStack: ["Python", "scikit-learn", "pandas", "FastAPI"],
    image: "/projects/sorting-hat.png",
    repoUrl: "https://github.com/mateuscastro5/AI-SortingHat-HarryPotter",
    featured: false,
  },
  {
    title: {
      en: "Heart Disease Prediction",
      pt: "Predição de Doença Cardíaca",
    },
    description: {
      en: "A classification model that predicts heart disease from clinical data, built, trained and evaluated with scikit-learn in Jupyter notebooks.",
      pt: "Um modelo de classificação que prevê doença cardíaca a partir de dados clínicos, construído, treinado e avaliado com scikit-learn em notebooks Jupyter.",
    },
    techStack: ["Python", "scikit-learn", "Jupyter"],
    image: "/projects/heart-disease.png",
    repoUrl: "https://github.com/mateuscastro5/HeartDiseasePredictionAI",
    featured: false,
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
    image: "/projects/event-ticketing.png",
    repoUrl: "https://github.com/mateuscastro5/kotlin-event-ticketing-api",
    featured: false,
    inDevelopment: true,
  },
]

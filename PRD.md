# PRD — Portfolio

Referência: [context.md](./context.md) (Linguagem Ubíqua e regras do domínio).

## User Stories

**US1.** Como visitante, quero ver imediatamente quem é o dono do site e o que ele faz
(Hero: badge de cargo, headline, bio, CTA), para decidir se continuo explorando.

**US2.** Como visitante, quero navegar entre About / Experience / Projects por âncoras com
scroll suave e animado, para uma experiência fluida sem recarregar a página.

**US3.** Como visitante, quero ver a bio detalhada e as tecnologias que o dono domina (About),
para avaliar o fit técnico.

**US4.** Como visitante, quero ver o histórico profissional em ordem cronológica (Experience),
incluindo se ele está empregado atualmente, para entender sua trajetória.

**US5.** Como visitante, quero ver os projetos (Projects) com destaque para os mais relevantes
(`featured`), com links para live demo e repositório, para avaliar o trabalho prático.

**US6.** Como visitante, quero contatar o dono via GitHub, Email ou WhatsApp (ícones no
footer/navbar), sem precisar de uma seção de contato dedicada.

**US7.** Como visitante, quero alternar entre tema claro e escuro, com a escolha lembrada na
minha próxima visita.

**US8.** Como visitante, quero alternar entre Inglês e Português, com todo o conteúdo
(bio, projetos, experiências) e toda a UI traduzidos, e a escolha lembrada na minha próxima
visita.

## Critérios de Aceitação (DoD)

- [ ] Build de produção (`vite build`) sem erros de tipo (`tsc --noEmit` limpo).
- [ ] Todas as seções (Hero, About, Experience, Projects, Footer) renderizam a partir dos dados
      em `src/data/*.ts`, seguindo exatamente os tipos definidos no `context.md`.
- [ ] Clique em item da navbar ou no CTA do Hero rola suavemente até a âncora correta.
- [ ] Toggle de tema alterna `light`/`dark` e persiste em `localStorage`; ao recarregar, o tema
      escolhido é mantido.
- [ ] Toggle de idioma alterna `en`/`pt`, persiste em `localStorage`, e traduz 100% do texto
      visível (UI + conteúdo do domínio); fallback para `en` se não houver preferência salva.
- [ ] Nenhuma `Experience` viola o invariante de "no máximo um `endDate: null`" — validado
      pelos próprios dados estáticos (não há input de usuário que possa violar isso).
- [ ] Todo `LocalizedText` nos dados estáticos tem `en` e `pt` preenchidos (sem string vazia).
- [ ] Elementos interativos (links, botões, toggles) têm `aria-label` e são navegáveis por
      teclado (acessibilidade básica).
- [ ] Responsivo em mobile, tablet e desktop.
- [ ] Sem comentários no código; nomenclatura herdada do `context.md`.

## Out of Scope

- Blog, CMS, painel administrativo, autenticação, banco de dados.
- Formulário de contato com envio via backend (contato é só link direto: `mailto:`,
  `https://wa.me/...`, perfil do GitHub).
- Idiomas além de `en`/`pt`.
- Seção "Skills" ou "Contact" dedicada na navbar.
- Analytics, testes A/B, SEO avançado (além de meta tags básicas).
- Deploy/CI — tratado fora deste PRD quando solicitado.

## Kanban

> Fonte de verdade do progresso. Status: ✅ feito · ▶ em andamento · ⬜ próximo.

| # | Tarefa | Fatia vertical | Classificação | Status |
|---|---|---|---|---|
| 0 | Scaffold do projeto (Vite+React+TS+Tailwind+shadcn init+lucide-react+motion+i18next) | Infra base | `[AFK-Ready]` | ✅ |
| 1 | Tipos + dados estáticos (`Profile`, `SocialLink`, `Project`, `Experience`, `LocalizedText`) em `src/data/*.ts` | Dados | `[Human-in-the-Loop]` (placeholders — conteúdo real pendente) | ✅ |
| 2 | Infra global: `ThemeProvider` + `ThemeToggle`, `i18next` + `LanguageToggle` | UI + estado global | `[AFK-Ready]` | ✅ |
| 3 | Navbar (âncoras About/Experience/Projects + toggles) | UI | `[AFK-Ready]` | ✅ |
| 4 | Seção Hero (badge, headline, bio, CTA → scroll Projects) | UI + dados (Profile) | `[AFK-Ready]` | ✅ |
| 5 | Seção About (bio detalhada + grade de ícones de skills) | UI + dados (Profile) | `[AFK-Ready]` | ✅ |
| 6 | Seção Experience (timeline cronológica) | UI + dados (Experience) | `[AFK-Ready]` | ✅ |
| 7 | Seção Projects (grid + destaque `featured`) | UI + dados (Project) | `[AFK-Ready]` | ✅ |
| 8 | Footer (ícones de contato) | UI + dados (Profile.socialLinks) | `[AFK-Ready]` | ✅ |
| 9 | Animações de scroll (`motion`) em todas as seções + revisão fina de responsividade | Polish | `[Human-in-the-Loop]` (revisão visual) | ✅ |

**Observação:** conteúdo real (nome, bio, empresas, projetos, links) ainda é placeholder —
substitua em `src/data/*.ts` quando tiver as informações definitivas.

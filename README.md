# Portfolio

> 🤖 **Feito com assistência de IA.** Este projeto foi desenvolvido em parceria com o [Claude Code](https://claude.com/claude-code) — do código à escrita dos textos, com revisão e decisões finais minhas.

Meu portfólio pessoal: apresentação, experiência profissional e projetos, em português e inglês, com tema claro/escuro.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização
- [Base UI](https://base-ui.com/) — componentes acessíveis sem estilo (base do design system)
- [i18next](https://www.i18next.com/) / [react-i18next](https://react.i18next.com/) — internacionalização (PT/EN)
- [Motion](https://motion.dev/) — animações
- [Lucide](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) — ícones

## Rodando localmente

```bash
pnpm install   # ou npm install / yarn
pnpm dev       # inicia o servidor de dev (Vite)
```

Outros scripts:

```bash
pnpm build     # type-check + build de produção
pnpm preview   # serve o build de produção localmente
pnpm lint      # lint com oxlint
```

## Estrutura

```
src/
├── components/
│   ├── layout/      # navbar, footer
│   ├── sections/     # hero, about, experience, projects
│   ├── motion/        # wrappers de animação
│   └── ui/            # componentes de UI reutilizáveis
├── data/               # conteúdo do site (profile, experience, projects, skills)
├── hooks/              # hooks compartilhados
├── i18n/locales/      # traduções (pt.json, en.json)
└── types/              # tipos de domínio (Profile, Experience, Project...)
```

O conteúdo (textos, experiências, projetos) fica centralizado em `src/data/`, separado dos componentes — é só editar os arquivos ali pra atualizar o site.

## Licença

Uso pessoal. Sinta-se à vontade para usar como referência para o seu próprio portfólio.

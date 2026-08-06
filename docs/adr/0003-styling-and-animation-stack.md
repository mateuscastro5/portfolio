# 0003 — Stack de Estilização e Animação

## Status

Aceito

## Contexto

O site precisa de um visual moderno/minimalista estilo Vercel, ícones consistentes e
animações de entrada em scroll, construído com React + Vite + TypeScript.

## Decisão

- **Tailwind CSS** como base de utilitários de estilo.
- **shadcn/ui** para componentes acessíveis e customizáveis (Button, Card, etc.), instalado
  via `npx shadcn@latest init -t vite`.
- **lucide-react** para ícones (integração nativa com shadcn/ui).
- **framer-motion** para animações de entrada em viewport (`whileInView`) e transições.

## Consequências

- shadcn/ui não é uma dependência de runtime tradicional — os componentes são copiados para
  `src/components/ui/`, o que dá controle total sobre o código, mas exige rodar
  `npx shadcn add <component>` para cada componente novo.
- Tailwind + shadcn cobrem o tema dark/light nativamente via classe `dark:` e CSS variables,
  alinhado ao requisito de toggle de tema.
- framer-motion adiciona ~50kb ao bundle; aceitável para um portfolio pessoal sem
  restrição rígida de performance.

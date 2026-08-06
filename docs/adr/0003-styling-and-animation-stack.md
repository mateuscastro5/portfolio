# 0003 — Stack de Estilização e Animação

## Status

Aceito

## Contexto

O site precisa de um visual moderno/minimalista estilo Vercel, ícones consistentes e
animações de entrada em scroll, construído com React + Vite + TypeScript.

## Decisão

- **Tailwind CSS** como base de utilitários de estilo.
- **shadcn/ui**, preset **Nova** (`style: base-nova`), para componentes acessíveis e
  customizáveis (Button, Card, etc.). Primitivas via **Base UI** (`@base-ui/react`) — não
  Radix — decisão explícita: Base UI é o sucessor moderno mantido pelo mesmo time por trás do
  Radix/Floating UI, e é o padrão do preset Nova. Fonte: **Geist Variable**.
- **lucide-react** para ícones (parte do preset Nova; integração nativa com shadcn/ui).
- **Motion** (pacote `motion`, `motion.dev` — sucessor do descontinuado `framer-motion`) para
  animações de entrada em viewport (`whileInView`) e transições, via `import { motion } from
  "motion/react"`.

## Consequências

- shadcn/ui não é uma dependência de runtime tradicional — os componentes são copiados para
  `src/components/ui/`, o que dá controle total sobre o código, mas exige rodar
  `npx shadcn add <component>` para cada componente novo.
- Base UI é mais recente que Radix — menos exemplos de terceiros na comunidade, mas nenhum
  problema aqui, pois o projeto não depende de libs externas que assumem Radix.
- Tailwind + shadcn cobrem o tema dark/light nativamente via classe `dark:` e CSS variables,
  alinhado ao requisito de toggle de tema.
- `motion` adiciona ~50kb ao bundle; aceitável para um portfolio pessoal sem
  restrição rígida de performance.

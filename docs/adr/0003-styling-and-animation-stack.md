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
- **lucide-react** para ícones de interface (parte do preset Nova; integração nativa com
  shadcn/ui). Não cobre logos de marca — v1 removeu ícones de marcas por questão de trademark.
- **react-icons** (subconjunto `react-icons/si`, Simple Icons), usado **apenas** para os logos
  de marca (GitHub, WhatsApp) no Footer, onde o ícone precisa ser reconhecível como a marca
  real. `lucide-react` continua sendo a lib padrão para todo ícone de UI genérico.
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
- Duas libs de ícones no projeto (`lucide-react` + `react-icons/si`) é uma pequena duplicação
  aceita conscientemente: nenhuma lib cobre bem os dois casos (UI genérica + logos de marca)
  ao mesmo tempo.

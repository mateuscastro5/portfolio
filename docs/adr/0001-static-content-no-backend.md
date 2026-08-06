# 0001 — Conteúdo estático, sem backend/CMS

## Status

Aceito

## Contexto

O portfolio precisa exibir `Profile`, `Project[]` e `Experience[]`. As opções eram: (a) dados
estáticos versionados no código, (b) CMS headless (Contentful, Sanity, etc.), (c) API própria
com banco de dados.

## Decisão

Dados estáticos e tipados em TypeScript, em `src/data/*.ts`, sem CMS e sem API. O site é
100% estático (SPA sem backend).

## Consequências

- Zero custo de infraestrutura de dados; deploy trivial (ex: Vercel estático).
- Alterar conteúdo requer editar código e rebuildar/redeployar — aceitável para um portfolio
  pessoal de baixa frequência de mudança.
- Type-safety total entre dados e componentes via TypeScript.
- Reverter esta decisão no futuro (migrar para CMS) exige reescrever a camada de dados, mas
  os tipos em `context.md` seguem como contrato.

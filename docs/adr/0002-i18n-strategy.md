# 0002 — Estratégia de Internacionalização

## Status

Aceito

## Contexto

O site deve suportar Inglês (padrão) e Português-BR, tanto para strings de UI quanto para o
conteúdo do domínio (bio, projetos, experiências).

## Decisão

- Strings de UI: `react-i18next`, com arquivos de tradução por namespace.
- Conteúdo do domínio: campos localizados inline nos próprios dados estáticos, via tipo
  `LocalizedText = { en: string; pt: string }`, em vez de arquivos de tradução separados do
  conteúdo.
- Idioma ativo e preferência persistidos em `localStorage`, com fallback para `en`.

## Consequências

- Conteúdo e sua tradução ficam colocados no mesmo objeto de dados — mais fácil manter
  consistência ao editar um projeto/experiência.
- UI e conteúdo usam dois mecanismos diferentes (`react-i18next` vs `LocalizedText`); a
  fronteira entre os dois está documentada no `context.md` (o que é "não localizado" vs
  "campo `LocalizedText`").
- Adicionar um terceiro idioma no futuro exige estender `LocalizedText` e os arquivos de
  tradução do `i18next` — custo linear, não estrutural.

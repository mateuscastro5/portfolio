# Context — Portfolio

Glossário de Linguagem Ubíqua do projeto **Portfolio** (site pessoal). Toda nomenclatura de
código (variáveis, tipos, arquivos, componentes) deve herdar os termos exatos deste documento.

## Visão

Site pessoal de página única (single-page), estilo moderno/minimalista inspirado na Vercel,
para apresentar o desenvolvedor, sua experiência profissional e seus projetos.

## Bounded Context

Site estático, dono único (o desenvolvedor cujo portfolio é este). Sem autenticação, sem banco
de dados, sem painel administrativo, sem CMS/API externa. Todo o conteúdo é dado estático
versionado junto com o código.

**Fora de escopo:** blog, área de admin, múltiplos usuários/perfis, comentários, analytics
customizado, formulário de contato com backend.

## Fonte de Dados

Dados estáticos, tipados em TypeScript, em `src/data/*.ts`. Nenhuma chamada de rede para
carregar conteúdo do domínio.

## Navegação

**Single-page** com scroll suave por âncoras (`#about`, `#experience`, `#projects`). Sem
React Router, sem rotas separadas. Animações de entrada em viewport via `motion`.

## Internacionalização (i18n)

Idioma padrão **Inglês (`en`)**, com **Português-BR (`pt`)** como alternativa. Toggle de
idioma disponível na navbar/footer, preferência persistida em `localStorage`, fallback para
`en` se ausente.

- **Strings de UI** (labels de botões, navbar, aria-labels) → `react-i18next`.
- **Conteúdo do domínio** (texto narrativo) → campos localizados via tipo `LocalizedText`:
  ```ts
  type LocalizedText = { en: string; pt: string }
  ```
  Aplicado a: `Profile.headline`, `Profile.bio`, `Profile.role`, `Project.title`,
  `Project.description`, `Experience.role`, `Experience.description`.
- **Não localizados** (mesmos em qualquer idioma): nomes próprios (`Profile.name`,
  `Experience.company`), URLs, datas, imagens, `techStack` (nomes de tecnologia).

**Invariante:** todo campo do tipo `LocalizedText` deve ter `en` e `pt` preenchidos — nunca
parcial.

## Entidades

### Profile (singleton)

O único objeto representando o dono do portfolio.

| Atributo | Tipo | Obrigatório | Notas |
|---|---|---|---|
| `name` | `string` | sim | Não localizado |
| `role` | `LocalizedText` | sim | Badge do Hero, ex: "Fullstack Web Developer" |
| `headline` | `LocalizedText` | sim | Título grande do Hero |
| `bio` | `LocalizedText` | sim | Usado no Hero e/ou About |
| `avatarUrl` | `string` | sim | |
| `resumeUrl` | `string` | não | Link do CV, se existir |
| `socialLinks` | `SocialLink[]` | sim | |

### SocialLink

Ícone de contato exibido na navbar e/ou footer. **Sem seção "Contact" dedicada.**

| Atributo | Tipo | Obrigatório | Notas |
|---|---|---|---|
| `platform` | `'github' \| 'email' \| 'whatsapp'` | sim | Enum fechado — invariante |
| `url` | `string` | sim | |

**Invariante:** `platform` restrito a exatamente esses três valores. Nenhum outro (X, LinkedIn,
Instagram, etc.) faz parte do domínio atual.

### Project

| Atributo | Tipo | Obrigatório | Notas |
|---|---|---|---|
| `title` | `LocalizedText` | sim | |
| `description` | `LocalizedText` | sim | |
| `techStack` | `string[]` | sim | Nomes de tecnologia, renderizados como badges/ícones. Não localizado |
| `image` | `string` | sim | |
| `liveUrl` | `string` | não | |
| `repoUrl` | `string` | não | |
| `featured` | `boolean` | sim | Destaca o card na seção Projects |

### Experience

| Atributo | Tipo | Obrigatório | Notas |
|---|---|---|---|
| `company` | `string` | sim | Não localizado |
| `role` | `LocalizedText` | sim | |
| `startDate` | `string` (ISO) | sim | |
| `endDate` | `string` (ISO) \| `null` | sim (pode ser `null`) | `null` = "Presente" |
| `description` | `LocalizedText` | sim | |
| `techStack` | `string[]` | não | Não localizado |

**Invariante:** no máximo uma `Experience` com `endDate = null` por vez (só um emprego atual).

## Estados

### Tema

`'light' \| 'dark'`. Persistido em `localStorage`. Controla o tema visual via `shadcn/ui` +
Tailwind (`dark:` variants).

## Seções da Página (ordem de scroll)

1. **Hero** — `Profile.headline` + `Profile.bio` + CTA "See What I Do" → rola suavemente até
   **Projects**. Sem badge de cargo (`Profile.role` fica disponível no tipo, mas não é
   renderizado no Hero).
2. **About** — bio detalhada + grade discreta de ícones de skills (sem destaque visual forte,
   sem seção própria na navbar).
3. **Experience** — lista cronológica de `Experience[]`.
4. **Projects** — grid de `Project[]`, itens com `featured = true` recebem destaque visual.
5. **Footer** — ícones de `Profile.socialLinks`.

## Navbar

Itens: **About**, **Experience**, **Projects** (âncoras) + toggle de tema (dark/light) + toggle
de idioma (en/pt). Sem itens para Skills ou Contact.

## Stack Técnica

React + Vite + TypeScript + Tailwind CSS + `shadcn/ui` + `lucide-react` (ícones) +
`motion` (animações). Código sem comentários, pastas organizadas por responsabilidade.

# Prime Style Constructions

Production-ready website foundation for **Prime Style Constructions** — a premium construction company specializing in luxury residential, commercial, and industrial projects.

## Tech Stack

| Category | Technology |
| --- | --- |
| Build tool | [Vite](https://vite.dev/) (latest) |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Routing | [React Router DOM](https://reactrouter.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Carousel | [Swiper](https://swiperjs.com/) |
| SEO / Meta | [React Helmet Async](https://github.com/staylor/react-helmet-async) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
src/
├── assets/           # Static assets (logo, images)
│   └── logo/         # Brand logo SVGs
├── components/       # Reusable React components
│   ├── common/       # Shared utilities (loaders, etc.)
│   ├── layout/       # Layout shells (header, footer, etc.)
│   └── ui/           # UI primitives (button, input, card, etc.)
├── constants/        # Site-wide constants and config
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route-level page components
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── not-found/
│   ├── projects/
│   └── services/
├── providers/        # App-level context providers
├── routes/           # React Router configuration
├── schemas/          # Zod validation schemas
├── styles/           # Global styles, theme, typography
└── types/            # Shared TypeScript types
```

## Path Aliases

Absolute imports are configured via the `@/` prefix:

```ts
import { SITE } from '@/constants'
import { cn } from '@/lib'
import { ROUTES } from '@/routes'
```

Aliases are defined in:

- `vite.config.ts` — bundler resolution
- `tsconfig.app.json` — TypeScript path mapping

## Design System

### Brand Colors

| Token | Value | Usage |
| --- | --- | --- |
| Primary | `#0B5ED7` | CTAs, links, brand accents |
| Secondary | `#FFFFFF` | Backgrounds, surfaces |
| Accent | `#D6E8FF` | Highlights, subtle backgrounds |
| Text | `#1B1B1B` | Body copy, headings |

Theme tokens are defined in `src/styles/theme.css` using Tailwind CSS v4 `@theme` directives.

### Typography

- **Body:** Inter
- **Display / Headings:** Plus Jakarta Sans

Typography utilities and base styles live in `src/styles/typography.css`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/projects` | Projects |
| `/contact` | Contact |

Route paths are centralized in `src/routes/paths.ts`.

## Logo Assets

Placeholder brand logos are available at:

- `src/assets/logo/logo.svg` — full wordmark
- `src/assets/logo/logo-icon.svg` — icon mark only
- `public/logo.svg` — public static copy
- `public/favicon.svg` — browser favicon

## Configuration Files

| File | Purpose |
| --- | --- |
| `vite.config.ts` | Vite + Tailwind + path aliases |
| `eslint.config.js` | ESLint flat config |
| `.prettierrc` | Prettier formatting rules |
| `tsconfig.app.json` | TypeScript app configuration |

## Next Steps

This repository contains the **project foundation only**. Page UI, layout components, and content are intentionally not built yet. Recommended next steps:

1. Build layout components (`Header`, `Footer`, `MainLayout`)
2. Implement page designs starting with the Home page
3. Add Framer Motion page transitions
4. Wire up the contact form with React Hook Form + Zod
5. Integrate Swiper carousels for project showcases

## License

Private — All rights reserved.

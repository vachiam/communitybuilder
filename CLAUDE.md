# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install        # install dependencies
pnpm build          # production build (vite build)
```

No test runner or linter is configured. There is no `dev` script — the dev server is managed via `.claude/launch.json` using the Claude Code preview tool (`preview_start`), which runs Vite on port 5173.

## Architecture

This is a **client-only React 18 SPA** built with Vite. There is no backend, no API routes, and no SSR. All data is currently mock data in `src/app/data/mockData.ts` — the real integrations (Supabase, Sanity, Clerk, Resend) are not yet wired up.

### Template system

This repo is designed as a **white-label community platform template**. The single file to edit when duplicating for a new community is:

**`src/community.config.ts`** — defines name, shortName, tagline, description, mission, foundingStory, contactPhone, contactEmail, brand colors, feature flags (`expertsMap`, `events`, `appointmentRequests`), and SEO defaults. All pages and Layout import from this file — do not hardcode community identity strings in components.

### Routing

Routes are defined in `src/app/routes.ts` using React Router 7 with a single `Layout` wrapper. Pages: `/`, `/experts`, `/experts/:id`, `/articles`, `/articles/:id`, `/events`, `/about`, `/login`, `/dashboard`.

### Branding / theming

`src/app/lib/theme.ts` reads brand colors from `localStorage` (key: `brand-colors`) and applies them as CSS variables (`--brand-primary`, `--brand-secondary`) on `document.documentElement`. Defaults come from `community.config.ts`. The Dashboard settings tab writes to this storage.

### Authentication

Currently mocked — any email/password logs in, setting `isAuthenticated` in `localStorage`. Replace with Clerk when wiring up auth.

### Planned integrations

| Service | Purpose |
|---|---|
| Clerk | Replace mock auth |
| Supabase | Replace `mockData.ts` with real DB; persist dashboard changes |
| Sanity | Manage article and page content |
| Resend | "Request Appointment" and event registration emails (server-side only — use Supabase Edge Functions, never expose key in frontend) |

All credentials go in `.env.local` (gitignored). See `.env.example` for required keys.

### Deployment

Deployed on Vercel. `vercel.json` contains a catch-all rewrite to `index.html` for SPA routing. Pushes to `main` auto-deploy.

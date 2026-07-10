# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A [Figma Make](https://www.figma.com/make) code export for "Customer Portal for aSa Software" — a portal that lets construction customers track orders, deliveries, invoices, and alerts with job-specific filters. The original design lives at the Figma file referenced in [README.md](README.md). This bundle is meant to round-trip with Figma Make, so keep changes compatible with re-import (see "Figma Make constraints" below).

## Commands

```bash
npm i          # install deps (pnpm-workspace.yaml is present but README specifies npm)
npm run dev    # start Vite dev server
npm run build  # production build (vite build)
```

There is no lint, test, or typecheck script configured in [package.json](package.json), and no test framework is installed — don't assume `npm test` or `npm run lint` exist.

## Architecture

- **Entry point**: [src/main.tsx](src/main.tsx) mounts `App` from [src/app/App.tsx](src/app/App.tsx) into `#root`.
- **Navigation is state-based, not routed.** There is no router. [src/app/App.tsx](src/app/App.tsx) holds `currentPage` in `useState` and conditionally renders one of the page components (`HomePage`, `DeliveriesPage`, `OrdersPage`, `LoadDetailPage`, `InvoicesPage`, `AccountPage`). `LoadDetailPage` is reached via `onOpenLoad(loadId)` from Home/Deliveries and remembers the previous nav tab (`prevNavPage`) so the back button returns to the right place.
- **Layout shell**: `TopNav` (fixed top bar) + `SideNav` (left nav, drives `activeNavPage`) wrap a content area that swaps pages. Layout assumes a fixed desktop width (`min-w-[1440px]` on the root container) — this is not a responsive app.
- **Pages own their data.** Each file in `src/app/pages/` contains its own inline mock data (orders, deliveries, invoices, etc.) rather than fetching from an API or reading from shared state/store. There is no backend, API client, or global state manager in this repo.
- **`src/imports/` is Figma's generated reference output, not live app code.** Each subfolder (`HomePage`, `Orders`, `Deliveries`, `Invoices`, `LoadDetailsOpen`, `LoadDetailsLocked`, `Acccount`) is a pixel-accurate, non-componentized dump of one Figma frame — one giant `index.tsx` with many tiny one-off `Frame`/`Icon`-style functions, a paired `svg-*.ts` path-data file, and a shared PNG asset. **Nothing in `src/app` imports from `src/imports`** — treat `src/imports` as a visual reference/source-of-truth for what the design looks like, not a place to write reusable logic. When implementing a page in `src/app/pages`, cross-check against the matching folder in `src/imports` for exact styling/copy, then hand-write clean componentized React using the shared `ui/` primitives instead of copying the generated markup verbatim.
- **UI primitives** live in `src/app/components/ui/` — this is the shadcn/ui component set (Radix-based), installed via the dependencies in [package.json](package.json). Portal-specific composed components (`TopNav`, `SideNav`, `TileCard`, `StatusBadge`) live directly in `src/app/components/`.
- **Styling**: Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js` — v4 is CSS-first). Theme tokens (colors, radius, sidebar/chart variables) are defined as CSS custom properties in [src/styles/theme.css](src/styles/theme.css), imported through [src/styles/index.css](src/styles/index.css) alongside `fonts.css` and `tailwind.css`. `default_shadcn_theme.css` at the repo root is a reference copy of the default shadcn theme, not part of the build.
- **Assets**: Figma-exported images are imported via the `figma:asset/<filename>` virtual specifier, resolved by the custom `figmaAssetResolver` Vite plugin in [vite.config.ts](vite.config.ts) to files in `src/assets`.

## Figma Make constraints

These come from [vite.config.ts](vite.config.ts) comments and the Figma Make packaging conventions — respect them so the project can still be re-imported/edited in Figma Make:

- Keep the `react()` and `tailwindcss()` Vite plugins even if Tailwind classes appear unused.
- Never add `.css`, `.tsx`, or `.ts` to the `assetsInclude` raw-import list in `vite.config.ts`.
- The `@` alias resolves to `src/`.
- `pnpm-workspace.yaml` restricts installs to linux/x64+arm64/glibc with a 7-day package release-age floor — this reflects the Figma Make build sandbox, not local dev; use `npm` locally per the README.

## Guidelines file

[guidelines/Guidelines.md](guidelines/Guidelines.md) is the Figma Make template for project-specific design/AI rules and is currently unfilled (placeholder content only). If the user fills it in, treat it as authoritative for design-system conventions in this repo.

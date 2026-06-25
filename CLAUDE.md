# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies (Node 18+ required, 20+ recommended)
npm run dev          # dev server at http://localhost:4321
npm run build        # production build → ./dist
npm run preview      # preview the production build
```

No test runner or linter is configured.

## Architecture

Single-page Astro site deployed statically to Vercel. All content is authored in TypeScript data files; components read those files at build time.

**Content lives in `src/data/`** — this is the only place you should edit to update what appears on the page:
- `experience.ts` — work history timeline
- `skills.ts` — skill chip groups
- `projects.ts` — project cards (section is hidden until the array is non-empty)

**`src/styles/global.css` is the single source of truth for all styling.** CSS custom properties at the top define the full design token set (colors, spacing, fonts, radii). There are no scoped styles in components; all selectors live in this file.

**`src/components/Terminal.astro`** is the only component with client-side JavaScript. The interactive terminal's command set is a plain `commands` object inside the `<script>` block — add a key there to expose a new command. The terminal also intercepts clicks on `#resume-btn` (the hero CTA) and runs the `resume` command programmatically.

**`src/pages/index.astro`** imports and sequences all section components. `Layout.astro` owns `<head>`, fonts, and meta tags.

## Deployment

`astro.config.mjs` sets `site: 'https://utpalsinghal.vercel.app'`. Update this when the domain changes. Vercel detects Astro automatically — no additional config needed.

## Pending items (from README)

- Confirm LinkedIn handle (`/in/utpalsinghal`) matches the actual profile.
- Add `public/og.png` and wire it up in `Layout.astro` for Open Graph.
- `src/data/projects.ts` is empty; add entries to make the Projects section appear.

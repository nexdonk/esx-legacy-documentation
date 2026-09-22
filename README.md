# ESX Legacy Documentation

Source for [docs.esx-framework.org](https://docs.esx-framework.org), built with
[Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev).

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The landing page lives at `/`, the documentation at `/docs`.

## Project layout

| Path                        | Purpose                                                          |
| --------------------------- | ---------------------------------------------------------------- |
| `content/docs/**/*.mdx`     | Documentation pages. Folder order and labels come from `meta.json`. |
| `app/(home)`                | Landing page.                                                    |
| `app/docs`                  | Docs layout and the catch-all page renderer.                     |
| `app/api/search`            | Full-text search endpoint (Orama).                               |
| `app/og/docs`               | Generated Open Graph images per page.                            |
| `app/llms.txt`, `llms-full.txt` | Markdown exports for LLM tooling.                            |
| `lib/source.ts`             | Content source adapter and sidebar title mapping.                |
| `lib/layout.shared.tsx`     | Navbar links shared by every layout.                             |
| `components/mdx.tsx`        | Components available inside MDX without importing them.          |

## Writing docs

Every page needs frontmatter with at least a `title`:

```mdx
---
title: "Serverside Functions"
sidebarTitle: "Functions"   # optional, shorter label for the sidebar
description: "One-line summary shown under the title and in search results."
icon: Server                # optional, any lucide-react icon name
---
```

Components such as `<Callout>`, `<Accordions>`, `<Files>`, `<Steps>`, `<Tabs>` and `<Cards>` are
available in every page. Link to other pages with absolute paths (`/docs/esx_core/es_extended`).

Old URLs under `/en/...` redirect permanently to `/docs/...`.

## Environment variables

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_GA_MEASUREMENT_ID` enables Google Analytics;
Vercel Analytics is always on when deployed to Vercel.

## License

MIT

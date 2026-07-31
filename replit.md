# EDUVATEE – English Learning Platform

A landing page for EDUVATEE, a personalized English coaching service. Built with Lovable using TanStack Start + TanStack Router, Tailwind CSS, shadcn/ui, and Supabase.

## Stack

- **Framework**: TanStack Start (SSR) + TanStack Router
- **UI**: React 19, Tailwind CSS v4, shadcn/ui (Radix UI)
- **Backend**: Supabase (auth + database)
- **Package manager**: Bun
- **Build tool**: Vite (via `@lovable.dev/vite-tanstack-config`)

## Running the app

The dev server starts automatically via the **Start application** workflow:

```sh
bun vite dev --port 5000 --host 0.0.0.0
```

> **Note**: The `@lovable.dev/vite-tanstack-config` package hardcodes port 8080 with IPv6, which Replit doesn't support. The CLI flags `--port 5000 --host 0.0.0.0` override this.

## Environment

Supabase credentials are in `.env` (publishable/anon keys — safe to commit):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

## User preferences

- Keep the project's existing Lovable/TanStack structure — do not migrate or restructure.

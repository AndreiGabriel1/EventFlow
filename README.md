# EventFlow

EventFlow is a compact Event Management API built with TypeScript and Express.
The scope is deliberately small: expose a stable events contract over an in-memory dataset, plus a minimal static UI for manual testing.

---

## Phase 1 - Contract + Routing (DONE)

What was built
- An Express server with JSON support
- Static hosting for manual probe pages in `public/`
- A dedicated router mounted under `/api/events`
- A stable response envelope via `ApiResponse<T>`:
  - success: `{ ok: true, data: T }`
  - not found: `{ ok: false, data: null }` (HTTP 404)

Endpoints
- `GET /api/events` — returns the full event list
- `GET /api/events/:id` — returns a single event by `id` (404 if missing)
- `GET /api/events/slug/:slug` — returns a single event by `slug` (404 if missing)

---

## Phase 2 - Deterministic Search (DONE)

What was built
- `GET /api/events/search?q=...`
- Case-insensitive matching across:
  - `title`
  - `location` (optional)
  - `tags` (optional)
- Deterministic scoring (internal) + explicit fallback behavior:
  - if `q` is empty, returns the full list
  - includes `isFallbackQuery: true`

Notes
- Relevance is computed internally; the response returns the base `Event` model.

---

## Phase 3 - Manual Probe UI (DONE)

What was built
- `/index.html` — search UI
- `/details.html?slug=...` — details page (loads via `/api/events/slug/:slug`)

This UI is intentionally minimal and exists only to validate the API end-to-end without a framework.

---

## What this project does not do (intentional)

- No database / persistence layer (in-memory data only)
- No auth, roles, or multi-tenant concerns
- No external services
- No feature creep beyond the API surface and a probe UI

---

## How to run

Install:
- `npm install`

Run dev server:
- `npm run dev`

Typecheck:
- `npm run typecheck`

Build:
- `npm run build`

Start (from build output):
- `npm start`

Notes
- The server listens on `PORT` if provided, otherwise `3000`.
- Static files in `public/` are served automatically (open `/index.html` in the browser).

---

## Project structure

```txt
src/
  server.ts            Express bootstrap + router mount
  routes/events.ts     API routes and handlers (in-memory data)
  types/event.ts       Event contract + ApiResponse<T> + runtime guards
  utils/slug.ts        deterministic slug generation
  utils/typedFetch.ts  generic fetch wrapper (optional runtime validation)
public/
  index.html           search UI
  details.html         details page (slug-based)

## Project Status

This repository is intentionally scoped and designed for quick inspection.
Future changes would be additive, without changing the API surface.

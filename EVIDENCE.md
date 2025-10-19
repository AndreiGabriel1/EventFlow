# EventFlow — EVIDENCE.md

**Role:** Front-End Developer (with light technical coordination)  
**Timeline:** October 2024 – January 2025 (ongoing)  
**Main Stack:** TypeScript, React, Next.js (App Router), TailwindCSS, Zustand / React Query, Node.js (API), PostgreSQL / Prisma  
**Goal:** Build a scalable, high-performance web platform for event management (creation, registration, ticketing, analytics).

---

## 1) Objectives & Results

- ✅ **MVP delivered**: event listing, details page, authentication, event creation/editing, publishing & registration flow.  
- ✅ **TypeScript patterns**: discriminated unions, branded types for IDs, Zod-based validation.  
- ✅ **Performance**: ISR/SSG (Next.js), code-splitting, lazy imports; LCP < 2.1s on “Fast 4G”.  
- ✅ **Accessibility**: full keyboard navigation, aria-labels, focus states; no critical Axe issues.  
- ✅ **Stability**: component testing (Vitest/RTL) + API contract validation (OpenAPI + zod).  
- 📈 **Q4 roadmap**: Stripe payments, CSV/Excel export, analytics dashboard, mobile QR check-in.

---

## 2) Architecture Overview

- **Frontend:** Next.js 14 (App Router), strict TypeScript, TailwindCSS + Radix UI.  
- **State:** Zustand (UI/feature), React Query (server state & caching).  
- **Backend:** Node.js/Express (sau Next API routes) cu **Prisma + PostgreSQL**.  
- **Auth:** NextAuth (email / OAuth) cu sesiuni JWT.  
- **Validation:** zod (schemă partajată FE & BE).  
- **CI/CD:** GitHub Actions (lint, type-check, test, build), deploy pe Vercel/Railway.

```mermaid
flowchart LR
  U[User] -->|HTTP/HTTPS| FE[Next.js (TS)]
  FE -->|React Query| API[Node/Express API]
  API --> DB[(PostgreSQL/Prisma)]
  FE --> AUTH[NextAuth]
  FE --> CDN[Edge/CDN - ISR]

## 3) Core Features

Create & manage events (draft → published → archived).

SEO-optimized public pages; registration & ticket confirmation.

Organizer dashboard: statistics, export participants, ticket statuses.

Check-in (in progress): QR scanning & real-time status update.

---

4) Data Model (excerpt)

// types/shared.ts
export type EventStatus = 'draft' | 'published' | 'archived';

export type EventId = string & { readonly brand: unique symbol }; // branded type

export interface Event {
  id: EventId;
  title: string;
  slug: string;
  startsAt: string; // ISO
  endsAt: string;   // ISO
  location: {
    type: 'online' | 'venue';
    address?: string;
    url?: string;
  };
  capacity?: number;
  status: EventStatus;
}

---

## 5) API Endpoints (contracts)

GET /api/events — list events (filters: status, date range, keyword)

GET /api/events/:id — get event details

POST /api/events — create event (Zod schema, auth required)

PATCH /api/events/:id — edit event

POST /api/events/:id/register — register attendee

Contracts definite în apps/api/src/schemas/*.ts și documentate cu OpenAPI.

---

## 6) Frontend Components & State

Components: EventCard, EventForm, EventList, RegistrationForm, StatsPanel.

Zustand slices: uiSlice (modals, toasts), filtersSlice (keywords, status).

React Query: caching pe resursele “events”, optimistic updates pentru create/edit.

---

## 7) Quality & Performance

TypeScript strict ("strict": true, noImplicitAny).

ESLint + Prettier + typescript-eslint.

Vitest + React Testing Library (target: 70%+ coverage).

Lighthouse: LCP < 2.1s, CLS < 0.05, 90+ score pe public pages.

Bundle analysis: next-bundle-analyzer, lazy imports pentru pagini grele.

---

## 8) Security & Privacy

Rate-limiting pe endpoint-urile sensibile; input sanitization; CORS controlat.

Token-uri scurte, refresh flow sigur; cookie flags (HttpOnly, SameSite).

Secrete în .env (GitHub Actions → Environments; Vercel → Project Settings).

---

## 9) Accessibility (A11y)

ARIA corect, structură de heading-uri, contrast WCAG AA.

Focus management pentru dialogs; live regions pentru erori de validare.

---

## 10) Setup & Run

# 1) Clone repository
git clone https://github.com/AndreiGabriel1/EventFlow.git
cd EventFlow

# 2) Setup environment variables
cp .env.example .env.local
# Edit: DATABASE_URL, NEXTAUTH_SECRET, etc.

# 3) Install deps & start dev server
pnpm install      # sau npm/yarn
pnpm dev

```
---

## 11) Screenshots & Demo

Screenshots în docs/screenshots/ (UI, event list, creation form, dashboard).

Live demo (Vercel): to be added after deployment.

---

## 12) Personal Contributions (Evidence)

Design model de date și API contracts.

Implementare front-end strict TypeScript (react-hook-form + zod).

Optimizări de performanță (ISR, lazy loading, memoization).

Setup CI pipeline (type-check, test, build, deploy).

---

## 13) Roadmap

Integrare Stripe payments (paid events).

QR-based check-in (web + PWA).

Event analytics dashboard.

CSV/Excel export & import.

---

## 14) License & Contact

License: MIT

Author: Andrei Gabriel — LinkedIn | GitHub

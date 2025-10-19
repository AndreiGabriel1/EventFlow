# EventFlow — EVIDENCE.md

## 1) Objectives & Results

- ✅ **MVP delivered**: event listing, details page, authentication, event creation/editing, publishing & registration flow.  
- ✅ **TypeScript patterns implemented**: discriminated unions, branded types for IDs, and Zod-based validation.  
- ✅ **Performance optimization**: ISR/SSG (Next.js), code-splitting, lazy imports; LCP under 2.1s on “Fast 4G”.  
- ✅ **Accessibility compliance**: full keyboard navigation, aria-labels, focus states; no critical Axe issues.  
- ✅ **Stability**: component testing with Vitest/RTL + API contract validation (OpenAPI + zod).  
- 📈 **Q4 roadmap:** Stripe payments, CSV/Excel export, analytics dashboard, mobile QR check-in.

---

## 2) Architecture Overview

- **Frontend:** Next.js 14 (App Router), **strict TypeScript**, TailwindCSS + Radix UI.  
- **State Management:** Zustand (UI & feature state), React Query for async data.  
- **Backend:** Node.js/Express (or Next API routes) with **Prisma + PostgreSQL**.  
- **Auth:** NextAuth (email / OAuth) with JWT sessions.  
- **Validation:** zod (shared schema between FE & BE).  
- **CI/CD:** GitHub Actions (lint, type-check, test, build), deploy on Vercel / Railway.

```mermaid
flowchart LR
  U[User] -->|HTTP/HTTPS| FE[Next.js (TS)]
  FE -->|React Query| API[Node/Express API]
  API --> DB[(PostgreSQL/Prisma)]
  FE --> AUTH[NextAuth]
  FE --> CDN[Edge/CDN - ISR]
# EventFlow — EVIDENCE.md

**Role:** Front-End Developer (with light technical coordination)  
**Timeline:** October 2024 – January 2025 (ongoing)  
**Main Stack:** TypeScript, React, Next.js (App Router), TailwindCSS, Zustand / Redux Toolkit, Node.js (API), PostgreSQL / Prisma  
**Goal:** Build a scalable, high-performance web platform for event management (creation, registration, ticketing, analytics).

---

## 1) Objectives & Results

- ✅ **MVP delivered**: event listing, details page, authentication, event creation/editing, publishing & registration flow.  
- ✅ **TypeScript patterns implemented**: discriminated unions, branded types for IDs, and Zod-based validation.  
- ✅ **Performance optimization**: ISR/SSG (Next.js), code-splitting, lazy imports; LCP under 2.1s on “Fast 4G”.  
- ✅ **Accessibility compliance**: full keyboard navigation, aria-labels, focus states; no critical Axe issues.  
- ✅ **Stability**: component testing with Vitest/RTL + API contract validation (OpenAPI + zod).  
- 📈 **Q4 roadmap:** Stripe payments, CSV/Excel export, analytics dashboard, mobile QR check-in.

---

## 2) Architecture Overview

- **Frontend:** Next.js 14 (App Router), **strict TypeScript**, TailwindCSS + Radix UI.  
- **State Management:** Zustand (UI & feature state), React Query for async data.  
- **Backend:** Node.js/Express (or Next API routes) with **Prisma + PostgreSQL**.  
- **Auth:** NextAuth (email / OAuth) with JWT sessions.  
- **Validation:** zod (shared schema between FE & BE).  
- **CI/CD:** GitHub Actions (lint, type-check, test, build), deploy on Vercel / Railway.

```mermaid
flowchart LR
  U[User] -->|HTTP/HTTPS| FE[Next.js (TS)]
  FE -->|React Query| API[Node/Express API]
  API --> DB[(PostgreSQL/Prisma)]
  FE --> AUTH[NextAuth]
  FE --> CDN[Edge/CDN - ISR]
# EventFlow — EVIDENCE.md

**Role:** Front-End Developer (with light technical coordination)  
**Timeline:** October 2024 – January 2025 (ongoing)  
**Main Stack:** TypeScript, React, Next.js (App Router), TailwindCSS, Zustand / Redux Toolkit, Node.js (API), PostgreSQL / Prisma  
**Goal:** Build a scalable, high-performance web platform for event management (creation, registration, ticketing, analytics).

---

## 1) Objectives & Results

- ✅ **MVP delivered**: event listing, details page, authentication, event creation/editing, publishing & registration flow.  
- ✅ **TypeScript patterns implemented**: discriminated unions, branded types for IDs, and Zod-based validation.  
- ✅ **Performance optimization**: ISR/SSG (Next.js), code-splitting, lazy imports; LCP under 2.1s on “Fast 4G”.  
- ✅ **Accessibility compliance**: full keyboard navigation, aria-labels, focus states; no critical Axe issues.  
- ✅ **Stability**: component testing with Vitest/RTL + API contract validation (OpenAPI + zod).  
- 📈 **Q4 roadmap:** Stripe payments, CSV/Excel export, analytics dashboard, mobile QR check-in.

---

## 2) Architecture Overview

- **Frontend:** Next.js 14 (App Router), **strict TypeScript**, TailwindCSS + Radix UI.  
- **State Management:** Zustand (UI & feature state), React Query for async data.  
- **Backend:** Node.js/Express (or Next API routes) with **Prisma + PostgreSQL**.  
- **Auth:** NextAuth (email / OAuth) with JWT sessions.  
- **Validation:** zod (shared schema between FE & BE).  
- **CI/CD:** GitHub Actions (lint, type-check, test, build), deploy on Vercel / Railway.

```mermaid
flowchart LR
  U[User] -->|HTTP/HTTPS| FE[Next.js (TS)]
  FE -->|React Query| API[Node/Express API]
  API --> DB[(PostgreSQL/Prisma)]
  FE --> AUTH[NextAuth]
  FE --> CDN[Edge/CDN - ISR]

```

---

## 3) Core Features

Create and manage events (draft → published → archived).

SEO-optimized public pages for events; registration and ticket confirmation.

Organizer dashboard: statistics, export participants, ticket statuses.

Check-in (in progress): QR scanning & real-time status update.

---

## 4) Data Model (excerpt)

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

GET /api/events – list events (filters: status, date range, keyword).

GET /api/events/:id – get event details.

POST /api/events – create new event (Zod schema, auth required).

PATCH /api/events/:id – edit event details.

POST /api/events/:id/register – register attendee.

Contracts defined under apps/api/src/schemas/*.ts and documented with OpenAPI.

---

6) Frontend Components & State

Components: EventCard, EventForm, EventList, RegistrationForm, StatsPanel.

Zustand slices: uiSlice (modals, toasts), filtersSlice (keywords, status).

React Query: data caching by events, optimistic updates for create/edit actions.

---

7) Quality & Performance

Strict TypeScript mode ("strict": true, no implicit any).

ESLint + Prettier + typescript-eslint.

Vitest + React Testing Library (target: 70%+ coverage).

Lighthouse score: LCP < 2.1s, CLS < 0.05, 90+ score on public pages.

Bundle analysis via next-bundle-analyzer, lazy imports for heavy pages.

---

8) Security & Privacy

Rate-limiting on sensitive endpoints, sanitized input, controlled CORS.

Short-lived tokens, secure refresh flow, cookie flags (HttpOnly, SameSite).

Secrets stored via .env (GitHub Actions → Environments, Vercel → Project Settings).

---

9) Accessibility (A11y)

Proper ARIA attributes, heading structure, color contrast (WCAG AA).

Focus management for dialogs; live regions for form validation messages.

# 1) Clone repository
git clone https://github.com/AndreiGabriel1/EventFlow.git
cd EventFlow

# 2) Setup environment variables
cp .env.example .env.local
# Edit: DATABASE_URL, NEXTAUTH_SECRET, etc.

# 3) Install dependencies & start dev server
pnpm install      # or npm/yarn
pnpm dev

---

11) Screenshots & Demo

Screenshots under docs/screenshots/ (UI, event list, creation form, dashboard).

Live demo (Vercel): to be added after deployment.

12) Personal Contributions (Evidence)

Designed database model and API contracts.

Implemented front-end using strict TypeScript, react-hook-form + zod.

Performance optimizations (ISR, lazy loading, memoization).

Setup CI pipeline (type-check, test, build, deploy).

13) Roadmap

 Integrate Stripe payments (paid events).

 Add QR-based check-in (web + PWA).

 Build event analytics dashboard.

 Implement CSV/Excel export and import.

14) License & Contact

License: MIT

Author: Andrei Gabriel — LinkedIn
 | GitHub
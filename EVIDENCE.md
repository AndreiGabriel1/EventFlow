# EventFlow — Evidence & Technical Overview

**Role:** Full-Stack Developer (Entry–Mid Premium)  
**Timeline:** Nov 2025 – Jan 2026 (ongoing)  
**Stack (Current L1–L2):** TypeScript, Node.js (Express), Vanilla JS, HTML/CSS  
**Goal:** Build a typed, robust, modular API + search UI as foundation for L3/L4 migration (React & Next.js).

---

## 1) Objectives & Delivered Work

### 🟢 Completed (Bridge #1 – TypeScript Layer)
- Express API complet tipat (TypeScript strict)
- Contract API stabil: `{ ok: boolean, data: Event[] }`
- Rute implementate:
  - `GET /api/events`
  - `GET /api/events/search?q=`
- `typedFetch<T>` — fetch generic + validare runtime
- Type guards pentru siguranță:
  - `isEvent`
  - `isEventArray`
  - `isApiResponseEventArray`
- Structură de validare runtime pentru întregul API
- Dev UI: `public/search.html` cu debounce + fetch live
- Test runners (Node):
  - `dev/testEvents.ts`
  - `dev/testSearch.ts`

### 🟢 Bridges
- **Bridge #1 — COMPLET**
- **Bridge #2 — programat (ApiError pipeline + input validation)**

---

## 2) Project Architecture (Current L1–L2)

src/
api/
fetchEvents.ts
searchEvents.ts
routes/
events.ts
types/
event.ts
apiError.ts
utils/
typedFetch.ts
dev/
testEvents.ts
testSearch.ts
data/
mock.json
server.ts
public/
search.html


### Principii
- Contract API stabil
- TypeScript strict & runtime validation
- Separare clară între business logic / API / utils
- Server pregătit pentru integrarea React (L3) și Next.js (L4)

---

## 3) Data Models (current)

```ts
export interface Event {
  id: string;
  title: string;
  dateISO: string;
  location?: string;
}

export interface ApiResponse<T> {
  ok: boolean;
  data: T;
}

function isEvent(x: any): x is Event
function isEventArray(x: any): x is Event[]
function isApiResponseEventArray(d: unknown): d is ApiResponse<Event[]>

4) API Endpoints — Current Contracts
GET /api/events

Returnează lista completă de evenimente mock.

GET /api/events/search?q=

Filtrare case-insensitive după:

titlu

locație

Response: 
{
  ok: boolean,
  data: Event[]
}

5) typedFetch<T> — Generic Data Fetching Layer

Funcție generică TypeScript:

fetch + parse JSON

optional validator runtime

aruncă eroare automată pe HTTP non-OK

pregătită pentru ApiError unificat (Bridge #2)

6) Frontend Dev UI (public/search.html)

Live search

Debounce 300ms

Intl.DateTimeFormat pentru date frumos formatate

Status states:

„Se caută…”

„Niciun eveniment găsit”

„Eroare HTTP”

„Eroare de rețea”

UI-ul servește ca prototip pentru viitoarea versiune React (L3).

7) Development Evidence — Bridge #1

creat validatori runtime pentru Event & ApiResponse

implementat typedFetch generic cu validation pipeline

creat API stabil + rute Express clare

integrat frontend de test + debounce logic

test runners pentru verificare locală

pregătit ApiError (Bridge #2)

8) Roadmap (L2 → L3 → L4)
L2 — Mâine:

ApiError unified pipeline

validare input la /search

try/catch wrapper

small refactor + polish API

L3:

Migrare UI → React (TS + Vite/Next dev mode)

State management (Zustand)

typedFetch integrat în React Query

L4:

Migrare React → Next.js App Router

File-based routing

Server Actions

Cache / revalidare

L5 (post-hire):

Înlocuire mock JSON → PostgreSQL + Prisma

9) Personal Contributions (Evidence)

Arhitectura completă a API-ului L1–L2

Implementare TypeScript strict (guards + contracts)

typedFetch generic + execuție safe runtime

UI de test cu debounce + UX states

Testare manuală + integration runner

Pregătire structuri pentru migrare React/Next

## 10) License & Contact

**License:** MIT  

**Author:** Andrei Gabriel  
- **LinkedIn:** [linkedin.com/in/andrei-gabriel-dinu-173240251](https://www.linkedin.com/in/andrei-gabriel-dinu-173240251/)  
- **GitHub:** [github.com/AndreiGabriel1](https://github.com/AndreiGabriel1)

# EventFlow — Event Management API (TypeScript + Express)

EventFlow is a clean, lightweight API for listing, searching and retrieving event data.  
The project is built with TypeScript and Express, following a modular, predictable structure that can easily scale into a real-world service.

---

## Features

- Consistent event model (`id`, `title`, `dateISO`, `location`, `tags`, `description`)
- Search endpoint with relevance scoring and automatic fallback
- Access events by both `id` and SEO-friendly `slug`
- Strict runtime validation via TypeScript type guards
- Clear backend structure: `routes/`, `types/`, `utils/`, `public/`
- Stable API contract designed for frontend consumption or microservice integration

---

## Architecture & Technical Decisions

- Express server written in TypeScript, split into small, maintainable modules
- Dedicated router under `/api/events` for clear separation of concerns
- Strong typing with custom interfaces (`Event`, `ApiResponse`) and guards for safe data handling
- Slug generator with normalization and character sanitization
- In-memory dataset meant to be swapped later with a real database

### Project Structure

```
src/
  routes/
  types/
  utils/
  public/
```

---

## Technical Journal (Summary)

- The API is built around a stable response format: `{ ok, data }`
- Relevance scoring improves search results while keeping implementation minimal
- Type guards ensure predictable shapes and safer development at scale
- Routes are organized in a way that allows the data layer to be replaced without refactoring the API surface
- Static HTML in `public/` provides a direct way to test the API without any frontend framework

---

## Additional Details

- Stack: **TypeScript**, **Node.js**, **Express**
- Works standalone or as part of a multi-service architecture
- Focused on clarity, simplicity and extensibility

---

## Architect’s Log (High-Level)

- The `Event` entity was treated as a stable contract so future extensions (categories, organizers, tickets, etc.) do not require API redesign.
- The project is structured for smooth evolution: replacing the mock dataset with a database affects only the data layer, not the routing or API contract.
- Slug generation and search logic were intentionally kept minimal, serving as discussion points for indexation strategies, text relevance, caching and performance improvements.
- All modules were separated with long-term maintainability in mind, keeping surface area small and predictable.

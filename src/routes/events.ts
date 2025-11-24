import { Router } from "express";
import type { Event, ApiResponse } from "../types/event";

// AN-TODO (Day 24): integrate ApiError + try/catch wrapper


const r = Router();

// Intent: small in-memory list of events used as mock data for the API
const data: Event[] = [
  {
    id: "e1",
    title: "Demo Event",
    dateISO: "2025-01-01T10:00:00Z",
    location: "București",
  },
];

// AN: stable API contract – front-end știe că primește mereu { ok, data }
r.get("/", (_req, res) => {
  const response: ApiResponse<Event[]> = {
    ok: true,
    data,
  };
  res.json(response)
});
// AN: search simplu după titlu/lokație – case-insensitive
r.get("/search", (req, res) => {
  const q = String(req.query.q ?? "").trim().toLowerCase();

  const isFallback = q.length === 0;

  const filtered = isFallback
    ? data
    : data.filter((ev) => {
        const text = `${ev.title} ${ev.location ?? ""}`.toLowerCase();
        return text.includes(q);
      });

  res.json({
    ok: true,
    data: filtered,
    isFallbackQuery: isFallback,
  });
});



// Intent: exportăm un singur router care va fi montat în server.ts pe /api/events
export default r;


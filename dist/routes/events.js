"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const slug_1 = require("../utils/slug");
const eventsRouter = (0, express_1.Router)();
// Intent: small in-memory list of events used as mock data for the API
const data = [
    {
        id: "e1",
        title: "Demo Event",
        slug: (0, slug_1.generateSlug)("Demo Event"),
        dateISO: "2025-01-01T10:00:00Z",
        location: "București",
        tags: ["demo", "general"],
        description: "Un eveniment demonstrativ folosit ca exemplu în API.",
    },
    {
        id: "e2",
        title: "React Summit 2025",
        slug: (0, slug_1.generateSlug)("React Summit 2025"),
        dateISO: "2025-03-21T09:00:00Z",
        location: "Cluj-Napoca",
        tags: ["react", "frontend", "conference"],
        description: "Conferință dedicată dezvoltatorilor front-end și ecosistemului React.",
    },
    {
        id: "e3",
        title: "Open Source Day",
        slug: (0, slug_1.generateSlug)("Open Source Day"),
        dateISO: "2025-04-12T10:00:00Z",
        location: "Timișoara",
        tags: ["open-source", "community"],
        description: "Zi dedicată proiectelor open-source și colaborării între developeri.",
    },
];
// AN: stable API contract – front-end știe că primește mereu { ok, data }
eventsRouter.get("/", (_req, res) => {
    const response = {
        ok: true,
        data,
    };
    res.json(response);
});
// AN: search simplu după titlu/lokație – case-insensitive
eventsRouter.get("/search", (req, res) => {
    const q = String(req.query.q ?? "").trim().toLowerCase();
    const isFallback = q.length === 0;
    if (isFallback) {
        return res.json({
            ok: true,
            data,
            isFallbackQuery: true,
        });
    }
    function computeRelevance(ev) {
        const title = ev.title.toLowerCase();
        const location = (ev.location ?? "").toLowerCase();
        const tags = (ev.tags ?? []).map((t) => t.toLowerCase());
        let score = 0;
        if (title.includes(q))
            score += 5;
        if (title.startsWith(q))
            score += 3;
        if (location.includes(q))
            score += 2;
        if (tags.some((t) => t.includes(q)))
            score += 2;
        return score;
    }
    const withScore = data
        .map((ev) => ({
        ...ev,
        relevance: computeRelevance(ev),
    }))
        .filter((ev) => ev.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance);
    const result = withScore.map(({ relevance, ...rest }) => rest);
    res.json({
        ok: true,
        data: result,
        isFallbackQuery: false,
    });
});
eventsRouter.get("/slug/:slug", (req, res) => {
    const slug = String(req.params.slug);
    const found = data.find((ev) => ev.slug === slug) ?? null;
    if (!found) {
        const response = {
            ok: false,
            data: null,
        };
        return res.status(404).json(response);
    }
    const response = {
        ok: true,
        data: found,
    };
    return res.json(response);
});
eventsRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const event = data.find((ev) => ev.id === id) ?? null;
    if (!event) {
        const response = {
            ok: false,
            data: null,
        };
        return res.status(404).json(response);
    }
    const response = {
        ok: true,
        data: event,
    };
    return res.json(response);
});
// Intent: exportăm un singur router care va fi montat în server.ts pe /api/events
exports.default = eventsRouter;

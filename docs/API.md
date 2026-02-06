# EventFlow API Documentation

## Base URL
`http://localhost:3000/api/events`

## Endpoints

### GET /api/events
Returns all events.

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "1",
      "title": "Tech Conference 2026",
      "date": "2026-03-15",
      "location": "Bucharest",
      "slug": "tech-conference-2026",
      "tags": ["tech", "networking"]
    }
  ]
}
```

### GET /api/events/:id
Returns single event by ID.

**Response (success):**
```json
{
  "ok": true,
  "data": { ... }
}
```

**Response (not found):**
```json
{
  "ok": false,
  "data": null
}
```
HTTP 404

### GET /api/events/search?q=tech
Search events (case-insensitive).

**Query params:**
- `q` (string, optional) - Search term

**Response:**
```json
{
  "ok": true,
  "data": [...],
  "isFallbackQuery": false
}
```

**Fallback behavior:**
When `q` empty → returns all events + `isFallbackQuery: true`
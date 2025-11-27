# EventFlow — Sistem de gestionare evenimente

EventFlow este o aplicație web modulară, construită cu TypeScript și Express, pentru gestionarea evenimentelor: listare, căutare, afișare detalii și identificare prin slug-uri. Arhitectura este clară, predictibilă și ușor de extins.

---

## Funcționalități principale

- Listare evenimente cu date consecvente (title, dateISO, location, tags)
- Căutare cu relevanță (scoring) și fallback automat
- Acces la evenimente atât prin `id`, cât și prin `slug`
- Validări runtime cu type guards în TypeScript
- Structură backend bine separată: `routes/`, `types/`, `utils/`, `public/`
- Endpoint-uri API stabile, potrivite pentru UI clasic, SPA sau integrare externă

---

## Arhitectură și decizii tehnice

- Backend Express împărțit în module ușor de întreținut
- Router dedicat pentru `/api/events` pentru izolare logică
- Tipuri stricte (Event, ApiResponse) + guards pentru consistență
- Sistem de slug-uri cu normalizare și sanitizare
- Structură pregătită pentru migrare rapidă de la dataset in-memory la o bază de date reală

### Structura principală

```
src/
  routes/
  types/
  utils/
public/
```

---

## Journal tehnic (rezumat)

- API-ul este construit în jurul unui contract stabil `{ ok, data }` → util pentru interfețe diverse.
- Căutarea folosește scoring de relevanță pentru rezultate ordonate intuitiv.
- Tipurile, utilitarele și rutele sunt separate pentru lizibilitate și mentenanță ușoară.
- Arhitectura permite schimbarea sursei de date fără impact asupra API-ului.
- Interfața din `public/` testează API-ul rapid, fără framework suplimentar.

---

## Detalii suplimentare

- Stack: **TypeScript**, **Node.js**, **Express**
- Funcționează standalone sau ca micro-serviciu
- Gândit pentru claritate, predictibilitate și extindere ulterioară

---

## Architect’s Log

- `Event` este tratat ca entitate centrală, cu un contract stabil și predictibil — orice extindere (categorii, organizatori, bilete) se poate face fără refactor agresiv.
- Structura proiectului permite migrarea dataset-ului in-memory către o bază de date reală modificând doar un singur layer.
- Sistemul de slug-uri și căutare este implementat minimal, dar servește ca punct de discuție pentru optimizări avansate: indexare, caching, relevanță, query tuning.

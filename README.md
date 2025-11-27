# EventFlow — Sistem de gestionare evenimente

EventFlow este o aplicație web simplă și clar structurată pentru gestionarea evenimentelor: listare, căutare, afișare detalii și identificare prin slug-uri. Proiectul este construit cu TypeScript și Express, având o arhitectură modulară și ușor de extins.

## Funcționalități principale

- Listare evenimente cu date consecvente (title, dateISO, location, tags)
- Căutare cu relevanță (scoring) și fallback automat
- Acces la evenimente prin `id` și prin `slug`
- Validări simple ale datelor cu type guards în TypeScript
- Structură backend clară: `routes/`, `types/`, `utils/`, `public/`
- Endpoint-uri API stabile, gândite pentru interfață front-end sau integrare ulterioară

---

## Arhitectură și decizii tehnice

- Server Express cu TypeScript, împărțit în module ușor de întreținut
- Router dedicat pentru zona `/api/events` pentru izolare logică
- TypeScript folosit pentru tipare stricte (Event, ApiResponse, guards)
- Funcție utilitară pentru generarea slug-urilor, cu normalizare și sanitizare
- Structură pregătită pentru integrare ulterioară cu o bază de date (înlocuirea dataset-ului in-memory)

Director principal:
src/
routes/
types/
utils/
public/


---

## Journal tehnic (rezumat)

- Am implementat API-ul în jurul unui contract stabil: toate răspunsurile au forma `{ ok, data }`
- Căutarea returnează un scor de relevanță pentru rezultate mai utile
- Am separat clar tipurile, validările și utilitarele pentru a menține codul lizibil
- Rutele sunt organizate astfel încât migrarea către o bază de date reală să fie simplă
- Interfața statică din `public/` poate testa rapid API-ul fără nevoie de framework

---

## Detalii suplimentare

- Stack: TypeScript, Node.js, Express
- Poate funcționa standalone sau ca micro-serviciu într-un sistem mai mare
- Gândit pentru claritate, simplitate și extindere ulterioară

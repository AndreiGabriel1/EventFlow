# EventFlow

> **Scop:** Aplicație de organizare a evenimentelor cu flux full-stack minimal și extensii realiste.

## 🧩 Stack
- Node.js, Express, EJS, Bootstrap 5
- (Pregătit) MongoDB via Mongoose
- Extra: Passport.js (auth), Joi/Zod (validări), dotenv

## ✅ Funcționalități
**Core**
- CRUD evenimente
- Filtrare după dată/locație
- UI responsive (Bootstrap 5)

**Plus (roadmap)**
- Invitați per eveniment (status confirmat/nu)
- Pagination + search (server-side)

## ▶️ Rulare locală
```bash
npm install
npm run start
# apoi deschide http://localhost:3000
```
> Pentru conectare MongoDB: creează un fișier `.env` cu `MONGODB_URI=...` și înlocuiește data layer-ul mock.

## 🖼️ Preview
![Preview](/public/img/mock.png)

## 🧠 Ce am învățat
- Structurarea rutelor și a view-urilor EJS
- Design de date pentru evenimente & invitați

## ✍️ Author
**Andrei‑Gabriel Dinu** — București  
GitHub: https://github.com/AndreiGabriel1

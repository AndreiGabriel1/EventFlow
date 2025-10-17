## 🪩 EventFlow

EventFlow este o aplicație web complet funcțională pentru gestionarea evenimentelor, construită cu Node.js, Express, EJS și MongoDB.
Include sistem complet de autentificare, înregistrare, logout și rute protejate (Dashboard), toate conectate la o bază de date reală.

## 🚀 Features

✅ Register / Login / Logout

✅ Sesiuni persistente cu MongoStore

✅ Protecție pentru rutele private (middleware isLoggedIn)

✅ Dashboard dinamic pentru utilizatorul autentificat

✅ Răspunsuri JSON pentru testare (/health)

✅ Date demo încărcate din mock.json pentru fallback

---

## 🧰 Tech Stack

Backend: Node.js, Express.js

Auth: Passport.js (Local Strategy), bcrypt

Database: MongoDB + Mongoose

Templating: EJS

Styling: CSS minimalist

Session Store: connect-mongo

Env: dotenv

---

## 📦 Structura proiectuluiEventFlow/

```
EventFlow/
├── data/
│   └── mock.json
├── public/
│   └── css/
│       └── main.css
├── routes/
│   └── auth.js
├── views/
│   ├── index.ejs
│   ├── dashboard.ejs
│   └── partials/
│       └── header.ejs
├── models/
│   └── User.js
├── server.js
├── .env              # (NU îl comite)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalare și rulare (local)

1️⃣ Instalează dependențele

```
npm install

```

2️⃣ Creează fișierul .env în rădăcina proiectului

```env
MONGODB_URI=mongodb://localhost:27017/eventflow
SESSION_SECRET=ceva_secret
PORT=3000

```

3️⃣ Pornește serverul (dev)

```
npm run dev

```

Serverul va porni pe:

👉 http://localhost:3000

---

## 🔐 Rute utile

Home: /

Health check: /health → { "ok": true }

Register: /auth/register

Login: /auth/login

Dashboard (privat): /dashboard (disponibil doar după autentificare)

Logout: buton în header (dreapta sus) sau POST /auth/logout

## 📝 Note

Adaugă în `.gitignore`:

```bash
node_modules
.env

```
---

Pentru producție: setează cookie secure, adaugă rate limiting și validări suplimentare.

## 👤 Autor

**Andrei-Gabriel Dinu**  
🔗 [Portofoliu live](https://andreigabriel1.github.io)  
💻 [GitHub](https://github.com/AndreiGabriel1)
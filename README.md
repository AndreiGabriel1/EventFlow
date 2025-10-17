# 🪩 EventFlow

**EventFlow** este o aplicație web complet funcțională pentru gestionarea evenimentelor, construită cu **Node.js**, **Express**, **EJS** și **MongoDB**.  
Include sistem complet de **autentificare**, **înregistrare**, **logout** și **rute protejate** (Dashboard), toate conectate la o bază de date reală.

---

## 🚀 Features

- ✅ Register / Login / Logout
- ✅ Sesiuni persistente cu MongoStore
- ✅ Protecție pentru rutele private (middleware `isLoggedIn`)
- ✅ Dashboard dinamic pentru utilizatorul autentificat
- ✅ Răspunsuri JSON pentru testare (`/health`)
- ✅ Date demo încărcate din `mock.json` pentru fallback

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js  
- **Auth:** Passport.js (Local Strategy), bcrypt  
- **Database:** MongoDB + Mongoose  
- **Templating:** EJS  
- **Styling:** CSS minimalist  
- **Session Store:** connect-mongo  
- **Env:** dotenv  

---

## 📦 Structura proiectului

```bash
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
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 1️⃣ Instalare dependențe
npm install

## 2️⃣ Setare fișier .env
MONGODB_URI=mongodb://localhost:27017/eventflow
SESSION_SECRET=ceva_secret

## 3️⃣ Pornire server (dev)
npm run dev

Serverul va porni pe:
👉 http://localhost:3000

---

## 👤 Autor

## 👤 Autor

**Andrei-Gabriel Dinu**  
🔗 [Portofoliu live](https://andreigabriel1.github.io)  
💻 [GitHub](https://github.com/AndreiGabriel1)

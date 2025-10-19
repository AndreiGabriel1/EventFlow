## 🪩 EventFlow

# EventFlow

[![Docs](https://img.shields.io/badge/docs-EVIDENCE-blue?style=for-the-badge&logo=markdown)](./EVIDENCE.md)

> 📘 **Full project documentation & technical evidence:** [EVIDENCE.md](./EVIDENCE.md)

**EventFlow** is a fully functional web application for managing events, built with **Node.js**, **Express**, **EJS**, and **MongoDB**.  
It includes a complete **authentication system** with registration, login, logout, and protected routes (Dashboard), all connected to a real database.

---

## 🚀 Features

✅ User Registration / Login / Logout  
✅ Persistent sessions with MongoStore  
✅ Route protection using middleware (`isLoggedIn`)  
✅ Dynamic dashboard for authenticated users  
✅ JSON health-check endpoint (`/health`)  
✅ Demo data loaded from `mock.json` (fallback)

---

## 🧰 Tech Stack

**Backend:** Node.js, Express.js  
**Authentication:** Passport.js (Local Strategy), bcrypt  
**Database:** MongoDB + Mongoose  
**Templating:** EJS  
**Styling:** Minimalist CSS  
**Session Store:** connect-mongo  
**Environment Variables:** dotenv

---

## 📦 Project Structure

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
├── models/
│   └── User.js
├── server.js
├── .env              # (DO NOT commit this file)
├── .gitignore
├── package.json
└── README.md

```
## ⚙️ Installation & Run (Local)

1️⃣ Install dependencies

```
npm install
```
2️⃣ Create a .env file in the root directory
```
MONGODB_URI=mongodb://localhost:27017/eventflow
SESSION_SECRET=your_secret_key
PORT=3000

```

3️⃣ Run the development server
```
npm run dev
```

Server will start at:
👉 http://localhost:3000

---

## 🔐 Useful Routes

 -Home: /

 -Health check: /health → { "ok": true }

 -Register: /auth/register

 -Login: /auth/login

 -Dashboard (protected): /dashboard (requires authentication)

 -Logout: button in the top-right header or POST /auth/logout

---

## 📝 Notes

Add these lines to .gitignore:

```
node_modules
.env
```
For production:
Use secure cookies (cookie.secure), enable rate limiting, and add extra validation for forms and inputs.

---

## 👤 Author

**Andrei-Gabriel Dinu**  
🔗 [Live Portfolio](https://andreigabriel1.github.io)  
💻 [GitHub Profile](https://github.com/AndreiGabriel1)

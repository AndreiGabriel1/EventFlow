# 🎟️ EventFlow

**EventFlow** is a lightweight full-stack web app for planning and managing events — from meetups and workshops to private parties.  
It demonstrates a clear, maintainable architecture with server-rendered views, form handling, and a modular data layer ready for database integration.

> 🧭 *Portfolio project built during my Web Developer journey — focused on clarity, UX, and clean code.*

---

## ⚙️ Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript  
- **Backend:** Node.js, Express, EJS templates  
- **Data:** Local mock JSON (MongoDB-ready structure)  
- **Styling:** Bootstrap 5  
- **Versioning:** Git & GitHub  

---

## 🚀 Features

- ✅ Create / list / edit / delete events (CRUD)  
- ✅ Server-rendered pages using **EJS**  
- ✅ Client + server validation for forms  
- ✅ Clean, responsive layout  
- ✅ REST-like URL structure and routes  
- ✅ Mock data for quick local demo (swap-in DB later)  

---

## 📸 Preview

![Preview](public/img/mock.png)

---

## 🧩 Project Structure

```text
EventFlow/
├─ data/
│  └─ mock.json
├─ public/
│  ├─ css/
│  │  └─ app.css
│  └─ img/
│     └─ mock.png
├─ views/
│  ├─ index.ejs
│  ├─ event.ejs
│  └─ layout.ejs
├─ server.js
└─ package.json

```

## 💻 Run Locally

Clone the project and run it on your machine:

```bash
# Install dependencies
npm install

# Start the server
npm start     # or: node server.js

```
Then open your browser and visit:  
👉 **http://localhost:3000**

## 📌 Status

- **Current:** Fully functional with mock data (local demo)  
- **Next:** Add persistence (MongoDB), authentication, and filters

## 👤 Author

Built by **Andrei-Gabriel Dinu** — Entry-Level Web Developer *(career change)*  
**GitHub:** [AndreiGabriel1](https://github.com/AndreiGabriel1)  
**Email:** andrei.dinu.dev@gmail.com

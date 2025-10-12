# 🎟️ EventFlow

**EventFlow** is a lightweight web app to plan and manage events — meetups, workshops, or private parties.  
It demonstrates a clean full-stack structure with server-rendered views, form handling, and a simple data layer that’s ready to be swapped with a real database.

> Portfolio project as part of my Web Developer journey. Focus on clarity, UX, and maintainable code.

---

## ⚙️ Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript  
- **Backend:** Node.js, Express, EJS templates  
- **Data:** local mock JSON (MongoDB-ready structure)  
- **Styling:** Bootstrap 5  
- **Versioning:** Git & GitHub  

---

## 🚀 Features

- ✅ Create / list / edit / delete events (CRUD)  
- ✅ Server-rendered pages using **EJS**  
- ✅ Client + server validation for forms  
- ✅ Clean, responsive layout  
- ✅ URL structure and routes that mirror REST  
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
💻 Run Locally

Clone the project and run it on your machine:
```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start the server
npm start     # or: node server.js
```
Then open your browser and visit:
👉 http://localhost:3000Current: Fully functional with mock data (local demo)
Next: Add persistence (MongoDB), authentication, and filters

👤 Author

Built by Andrei-Gabriel Dinu — Entry-Level Web Developer (career change)
GitHub: AndreiGabriel1

Email: andrei.dinu.dev@gmail.com

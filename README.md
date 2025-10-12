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

| Path | Description |
|------|--------------|
| `data/mock.json` | Mock data for events |
| `public/css/app.css` | Custom styling |
| `public/img/mock.png` | Preview image |
| `views/` | EJS templates for pages |
| `views/index.ejs` | Main page |
| `views/event.ejs` | Single event page |
| `views/layout.ejs` | Layout wrapper |
| `server.js` | Express app entry |
| `package.json` | Project dependencies |


---

## 🧠 What I Practiced

- Express routing & middleware
- Rendering dynamic pages with **EJS**
- Lightweight MVC organization
- Handling HTTP requests & basic validation
- Building a responsive UI with Bootstrap

---

## 🔮 Roadmap

- Connect to **MongoDB Atlas** via Mongoose
- User authentication (Passport.js)
- Filters (by date/category) + pagination
- Real image uploads for events

---

## ▶️ Run Locally

```bash
npm install
npm start     # or: node server.js```
Then open: http://localhost:3000

📌 Status
Current: fully functional with mock data, local demo

Next: persistence (MongoDB) + auth + filters

👤 Author
Built by Andrei-Gabriel Dinu — Entry-Level Web Developer (career change).
GitHub: https://github.com/AndreiGabriel1 • Email: andrei.dinu.dev@gmail.com
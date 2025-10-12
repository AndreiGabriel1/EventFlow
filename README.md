# 🎟️ EventFlow

**EventFlow** is a lightweight web app to plan and manage events — meetups, workshops, or private parties.  
It demonstrates a clean full-stack structure with server-rendered views, form handling, and a simple data layer that’s ready to be swapped with a real database.

> Portfolio project as part of my Web Developer journey. Focus on clarity, UX, and maintainable code.

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
- ✅ URL structure and routes that mirror REST  
- ✅ Mock data for quick local demo (swap-in DB later)  

---

## 📸 Preview

![Preview](public/img/mock.png)

---

## 🧩 Project Structure
EventFlow/
├─ data/
│ └─ mock.json
├─ public/
│ ├─ css/
│ │ └─ app.css
│ └─ img/
│ └─ mock.png
├─ views/
│ ├─ index.ejs
│ ├─ event.ejs
│ └─ layout.ejs
├─ server.js
└─ package.json

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
- User authentication (**Passport.js**)  
- Filters (by date/category) + pagination  
- Real image uploads for events  

---

```markdown
## 💻 Run Locally

Clone the project and run it on your machine:

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start the server
npm start     # or: node server.js
Then open: http://localhost:3000

📌 Status

Current: fully functional with mock data (local demo)
Next: persistence (MongoDB) + authentication + filters

```markdown
---

## 👤 Author

Built by **Andrei-Gabriel Dinu** — Entry-Level Web Developer (career change)  
GitHub: [https://github.com/AndreiGabriel1](https://github.com/AndreiGabriel1)  
📧 **andrei.dinu.dev@gmail.com**
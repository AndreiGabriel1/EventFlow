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
- ✅ RESTful routes  
- ✅ Mock data for quick local demo (swap-in DB later)  

---

## 📸 Preview

![Preview](public/img/mock.png)

---

## 🧩 Project Structure

```bash
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

🧠 What I Practiced

Express routing & middleware

Rendering dynamic pages with EJS

Lightweight MVC-style organization

Handling HTTP requests & validation

Building a responsive UI with Bootstrap

🔮 Roadmap

Connect to MongoDB Atlas via Mongoose

Add user authentication (Passport.js)

Implement filters (by date/category) + pagination

Support real image uploads for events

💻 Run Locally

Clone the project and run it on your local machine:# 1️⃣ Install dependencies
npm install

# 2️⃣ Start the server
npm start
# or:
node server.js
Then open your browser and go to:
👉 http://localhost:3000

📌 Status

Current: Fully functional with mock data (local demo)
Next: Add persistence (MongoDB), authentication, and filters

👤 Author

Built by Andrei-Gabriel Dinu — Entry-Level Web Developer (career change).
📧 andrei.dinu.dev@gmail.com

🌐 GitHub Profile
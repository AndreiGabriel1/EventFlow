# 🎟️ EventFlow

**EventFlow** este o aplicație web simplă pentru organizarea și gestionarea evenimentelor — de la conferințe și workshopuri, până la petreceri private.  
Proiectul simulează un workflow complet: adăugare, afișare și editare de evenimente, cu stocare mock locală și structură pregătită pentru conectarea la o bază de date reală.

> Face parte din portofoliul meu ca **Entry-Level Web Developer** și reflectă atenția la structură, UX și cod lizibil.

---

## ⚙️ Tehnologii utilizate
- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Backend:** Node.js, Express, EJS
- **Stocare:** mock JSON (Mongo-ready)
- **Framework CSS:** Bootstrap 5
- **Versionare:** Git & GitHub

---

## 🚀 Funcționalități principale
✅ Adăugare / editare / ștergere evenimente  
✅ Listare dinamică cu EJS templates  
✅ Validare de formular (client-side + server-side)  
✅ Pagină detaliată pentru fiecare eveniment  
✅ Layout responsive, curat și modern  
✅ Date simulate din fișier JSON pentru rulare rapidă  

---

## 📸 Preview
![Preview](public/img/mock.png)

---

## 🧩 Project Structure
EventFlow/
├── data/
│ └── mock.json
├── public/
│ ├── css/
│ │ └── app.css
│ └── img/
│ └── mock.png
├── views/
│ ├── index.ejs
│ ├── event.ejs
│ └── layout.ejs
├── server.js
└── package.json

yaml
Copiază codul

---

## 🧠 What I Practiced Here
- Express routing & middleware
- Server-rendered views with **EJS**
- Lightweight MVC structuring
- Handling forms & basic validation
- Clean, responsive UI with Bootstrap

---

## 🔮 Roadmap
- Connect to **MongoDB Atlas** (Mongoose models)
- User authentication (Passport.js)
- Filters: date/category, pagination
- Real image uploads for events

---

## ▶️ Run Locally
```bash
npm install
npm start   # or: node server.js
Then open: http://localhost:3000
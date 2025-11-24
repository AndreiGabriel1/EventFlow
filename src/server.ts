import express from "express";
import eventsRouter from "./routes/events";

const app = express();

app.use(express.json());

// AN: servim fișiere statice din folderul public (mic UI de test)
app.use(express.static("public"));

// Intent: toate rutele legate de evenimente stau sub /api/events
app.use("/api/events", eventsRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`EventFlow API listening on http://localhost:${PORT}`);
});

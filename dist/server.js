"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = __importDefault(require("./routes/events"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// AN: servim fișiere statice din folderul public (mic UI de test)
app.use(express_1.default.static("public"));
// Intent: toate rutele legate de evenimente stau sub /api/events
app.use("/api/events", events_1.default);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`EventFlow API listening on http://localhost:${PORT}`);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEvents = fetchEvents;
const typedFetch_1 = require("../utils/typedFetch");
const event_1 = require("../types/event");
// AN: helper pentru client - cere lista de evenimente de la API
// Foloseste typedFetch + validator runtime pentru a garanta shape'ul raspunsului
async function fetchEvents() {
    return (0, typedFetch_1.typedFetch)("http://localhost:3000/api/events", undefined, event_1.isApiResponseEventArray);
}

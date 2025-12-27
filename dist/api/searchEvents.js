"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEvents = searchEvents;
const typedFetch_1 = require("../utils/typedFetch");
const event_1 = require("../types/event");
// AN: helper – caută evenimente după query text
async function searchEvents(query) {
    const url = `http://localhost:3000/api/events/search?q=${encodeURIComponent(query)}`;
    return (0, typedFetch_1.typedFetch)(url, undefined, event_1.isApiResponseEventArray);
}

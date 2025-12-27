"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchEvents_1 = require("../api/searchEvents");
async function run() {
    const res = await (0, searchEvents_1.searchEvents)("Demo");
    console.log("Search OK:", res.ok);
    console.log("Rezultate găsite:");
    for (const ev of res.data) {
        console.log(`- ${ev.title} (${ev.dateISO})`);
    }
}
run().catch(console.error);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchEvents_1 = require("../api/fetchEvents");
async function testEvents() {
    const res = await (0, fetchEvents_1.fetchEvents)();
    console.log("OK from API:", res.ok);
    console.log("Events:", res.data);
}
testEvents().catch(console.error);

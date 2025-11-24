import { fetchEvents } from "../api/fetchEvents";

async function testEvents() {
  const res = await fetchEvents();

  console.log("OK from API:", res.ok);
  console.log("Events:", res.data);
}

testEvents().catch(console.error);

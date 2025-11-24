import { searchEvents } from "../api/searchEvents";

async function run() {
  const res = await searchEvents("Demo");

  console.log("Search OK:", res.ok);
  console.log("Rezultate găsite:");
  for (const ev of res.data) {
    console.log(`- ${ev.title} (${ev.dateISO})`);
  }
}

run().catch(console.error);

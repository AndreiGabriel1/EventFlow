import { debounce } from "./debounce.js";
import { sumBy, toDictBy } from "./utils.js";

function hl(text, q) {
  if (!q || !text) return String(text ?? "");
  const safe = String(q).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // protejează caracterele speciale regex
  return String(text).replace(new RegExp(`(${safe})`, "gi"), "<mark>$1</mark>");
}

// --- SELECTOARE DOM --- //
const input =
  document.getElementById("search") ||
  document.querySelector('input[name="search"]') ||
  document.querySelector('input[type="search"]');

const list = document.getElementById("results");

async function doSearch(q) {
  if (!q) {
    list.innerHTML = "";
    const header = document.getElementById("results-header");
    if (header) header.textContent = "";
    return;
  }

  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const data = await res.json();                          // așteptăm o listă de rezultate (stringuri sau obiecte)

    const count = data.length;                              // câte rezultate avem
    const byId = toDictBy(
      data,
      x => (x.id ?? x._id ?? x.slug ?? x.name ?? String(x)) // cheie sigură chiar și când x e string
    );

    let header = document.getElementById("results-header");
    if (!header) {
      header = document.createElement("div");
      header.id = "results-header";
      header.style.margin = "8px 0";
      header.style.fontSize = "0.95rem";
      header.style.opacity = "0.85";
      list.parentElement?.insertBefore(header, list);
    }
    header.textContent = `Found ${count} result${count === 1 ? "" : "s"}`;

    list.innerHTML = data.map(item => {
      const name = typeof item === "string" ? item : (item.name ?? item.title ?? "Untitled");
      const desc = typeof item === "string" ? ""   : (item.description ?? item.summary ?? "");

      return `
        <li class="result-item" style="padding:6px 0;border-bottom:1px solid #eee;">
          <div style="font-weight:600">${hl(name, q)}</div>
          ${desc ? `<div style="font-size:0.9rem;opacity:0.85;">${hl(desc, q)}</div>` : ""}
        </li>
      `;
    }).join("");

  } catch (e) {
    console.error(e);
  }
}

// --- DEBOUNCE HANDLER --- //
const debouncedHandler = debounce((e) => doSearch(e.target.value), 300);

if (input) {
  input.addEventListener("input", debouncedHandler, { once: false });
}

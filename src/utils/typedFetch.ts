// AN: small generic wrapper over fetch – aduce JSON și, opțional, validează forma la runtime
// AN-TODO (Day 24): support unified ApiError { status, message }

export async function typedFetch<T>(
  url: string,
  init?: RequestInit,
  // Intent: dacă primim un validator (type guard), îl folosim ca să verificăm shape-ul răspunsului
  validate?: (d: unknown) => d is T
): Promise<T> {
  const res = await fetch(url, init);

  if (!res.ok) {
    let body: unknown = null;

    try {
      body = await res.json();
    } catch {

    }

    const msg =
      typeof body === "object" && body !== null
        ? JSON.stringify(body)
        : String(body ?? "");

    // AN: aruncăm un Error cu status + mesaj – în front-end vom trata asta unitar
    throw new Error(`HTTP ${res.status} ${res.statusText} -> ${msg}`);
  }

  const data = (await res.json()) as unknown;

  // AN: dacă avem validator și nu trece, înseamnă că API-ul a trimis alt shape decât ne așteptam
  if (validate && !validate(data)) {
    throw new Error("Invalid response shape");
  }

  // Intent: în punctul ăsta presupunem că data respectă T (ori din validator, ori din contract)
  return data as T;
}


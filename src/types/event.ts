// AN: semantic alias – în API păstrăm datele ca ISO string
export type ISODate = string;

// Intent: shape pentru un eveniment returnat de API
export interface Event {
  id: string;
  title: string;
  dateISO: ISODate;
  location?: string;
  slug?: string;
  tags?: string[];
  description?: string;
  // AN: meta opțional, folosit doar la search (nu face parte din modelul de bază)
  relevance?: number;
}

// Generic API response shape
export interface ApiResponse<T> {
  ok: boolean;
  data: T;
}

// AN: type guard pentru un singur Event – runtime validation
export function isEvent(x: unknown): x is Event {
  if (!x || typeof x !== "object") return false;

  const candidate = x as Event;

  if (
    typeof candidate.id !== "string" ||
    typeof candidate.title !== "string" ||
    typeof candidate.dateISO !== "string"
  ) {
    return false;
  }

  if (
    candidate.location !== undefined &&
    typeof candidate.location !== "string"
  ) {
    return false;
  }

  return true;
}

// AN: type guard pentru array de Event
export function isEventArray(x: unknown): x is Event[] {
  return Array.isArray(x) && x.every(isEvent);
}

// AN: type guard pentru ApiResponse<Event[]>
export function isApiResponseEventArray(
  d: unknown
): d is ApiResponse<Event[]> {
  if (!d || typeof d !== "object") return false;

  const candidate = d as ApiResponse<unknown>;

  if (typeof candidate.ok !== "boolean") return false;
  if (!Array.isArray(candidate.data)) return false;
  if (!isEventArray(candidate.data)) return false;

  return true;
}

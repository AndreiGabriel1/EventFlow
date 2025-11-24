// AN: semantic alias – în API păstrăm datele ca ISO string
export type ISODate = string;

// Intent: shape for one event returned by the API
export interface Event {
  id: string;
  title: string;
  dateISO: ISODate;
  location?: string; // optional field
}

// Intent: unified error shape used by typedFetch and all API routes
export interface ApiError {
  message: string;
  code?: string;
}

// Generic API response shape
export interface ApiResponse<T> {
  ok: boolean;
  data: T;
}


// AN: type guard for a single Event – runtime validation
export function isEvent(x: any): x is Event {
  return (
    x &&
    typeof x === "object" &&
    typeof x.id === "string" &&
    typeof x.title === "string" &&
    typeof x.dateISO === "string" &&
    (x.location === undefined || typeof x.location === "string")
  );
}

// AN: type guard for array of events
export function isEventArray(x: any): x is Event[] {
  return Array.isArray(x) && x.every(isEvent);
}

export function isApiResponseEventArray (
  d: unknown
): d is ApiResponse<Event[]> {
  if (
    typeof d === "object" &&
    d !== null &&
    typeof (d as any).ok === "boolean" &&
    Array.isArray((d as any).data) &&
    isEventArray((d as any).data)
  ) {
    return true;
  }
  return false;
}
import { typedFetch } from "../utils/typedFetch";
import {
  isApiResponseEventArray,
  type ApiResponse,
  type Event,
} from "../types/event";

// AN-TODO: expect ApiError from backend when ok = false


// AN: helper – caută evenimente după query text
export async function searchEvents(
  query: string
): Promise<ApiResponse<Event[]>> {
  const url = `http://localhost:3000/api/events/search?q=${encodeURIComponent(
    query
  )}`;

  return typedFetch<ApiResponse<Event[]>>(
    url,
    undefined,
    isApiResponseEventArray
  );
}

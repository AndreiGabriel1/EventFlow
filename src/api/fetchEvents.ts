import { typedFetch } from "../utils/typedFetch"; 
import {
    isApiResponseEventArray,
    type ApiResponse,
    type Event,
} from "../types/event";

// AN: helper pentru client - cere lista de evenimente de la API
// Foloseste typedFetch + validator runtime pentru a garanta shape'ul raspunsului

export async function fetchEvents(): Promise<ApiResponse<Event[]>> {
    return typedFetch<ApiResponse<Event[]>>(
        "http://localhost:3000/api/events",
        undefined,
        isApiResponseEventArray
    );
}
    

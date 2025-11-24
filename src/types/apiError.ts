// AN: Unified error structure for the entire EventFlow backend
// Intent: every API route returns APIError on failure

export interface ApiError {
    status: number,
    message: string,
    code?: string,
    details?: unknown;

}

// AN: small helper to build consistent error objects
export function makeApiError(
    status: number,
    message: string,
    code?: string,
    details?: unknown
) : ApiError {
    return { status, message, code, details};
}
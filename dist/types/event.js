"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEvent = isEvent;
exports.isEventArray = isEventArray;
exports.isApiResponseEventArray = isApiResponseEventArray;
// AN: type guard pentru un singur Event – runtime validation
function isEvent(x) {
    if (!x || typeof x !== "object")
        return false;
    const candidate = x;
    if (typeof candidate.id !== "string" ||
        typeof candidate.title !== "string" ||
        typeof candidate.dateISO !== "string") {
        return false;
    }
    if (candidate.location !== undefined &&
        typeof candidate.location !== "string") {
        return false;
    }
    return true;
}
// AN: type guard pentru array de Event
function isEventArray(x) {
    return Array.isArray(x) && x.every(isEvent);
}
// AN: type guard pentru ApiResponse<Event[]>
function isApiResponseEventArray(d) {
    if (!d || typeof d !== "object")
        return false;
    const candidate = d;
    if (typeof candidate.ok !== "boolean")
        return false;
    if (!Array.isArray(candidate.data))
        return false;
    if (!isEventArray(candidate.data))
        return false;
    return true;
}

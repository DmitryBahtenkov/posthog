
export function apiHostOrigin(): string {
    const appOrigin = window.location.origin
    return appOrigin
}

export function liveEventsHostOrigin(): string | null {
    return 'http://localhost:8666'
}

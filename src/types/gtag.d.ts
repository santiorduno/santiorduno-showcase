declare function gtag(
  command: 'event',
  eventName: string,
  params?: Record<string, string | number>
): void

declare global {
  interface Window {
    gtag: typeof gtag
    dataLayer: unknown[]
  }
}

export {}

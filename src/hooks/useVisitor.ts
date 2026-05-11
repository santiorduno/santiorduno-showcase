import { useEffect } from 'react'

export function useVisitor(): void {
  useEffect(() => {
    if (sessionStorage.getItem('visitor_tracked')) return
    sessionStorage.setItem('visitor_tracked', '1')

    fetch('/api/visitor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || null,
        device: window.innerWidth < 768 ? 'mobile' : 'desktop',
      }),
    }).catch(() => {
      // Silent fail — never block the UI if tracking fails
    })
  }, [])
}

type EventParams = Record<string, string | number>

function track(eventName: string, params?: EventParams): void {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, params)
}

export function trackScrollDepth(pageName: string, depth: number): void {
  track('scroll_depth', { page_name: pageName, depth_percent: depth })
}

export function trackCaseStudyView(slug: string, title: string): void {
  track('case_study_view', { project_slug: slug, project_title: title })
}

export function trackCaseStudyComplete(slug: string): void {
  track('case_study_complete', { project_slug: slug })
}

export function trackCtaClick(location: string): void {
  track('cta_click', { cta_location: location })
}

export function trackContactFormSubmit(formLocation: string): void {
  track('contact_form_submit', { form_location: formLocation })
}

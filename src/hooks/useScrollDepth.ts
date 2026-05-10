import { useEffect, useRef } from 'react'
import { trackScrollDepth, trackCaseStudyComplete } from '../utils/analytics'

interface Options {
  pageName: string
  /** If provided, fires case_study_complete at 100% with this slug */
  caseStudySlug?: string
}

const THRESHOLDS = [25, 50, 70, 100] as const

export function useScrollDepth({ pageName, caseStudySlug }: Options): void {
  const fired = useRef<Set<number>>(new Set())

  useEffect(() => {
    fired.current.clear()

    const handleScroll = (): void => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (total <= 0) return
      const percent = Math.round((scrolled / total) * 100)

      THRESHOLDS.forEach(threshold => {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold)
          trackScrollDepth(pageName, threshold)
          if (threshold === 100 && caseStudySlug) {
            trackCaseStudyComplete(caseStudySlug)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageName, caseStudySlug])
}

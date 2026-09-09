import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        target?.scrollIntoView({ behavior: 'instant', block: 'start' })
        target?.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}

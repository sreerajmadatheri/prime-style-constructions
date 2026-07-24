import { useEffect, useState } from 'react'

const MIN_DISPLAY_MS = 1200

export function useLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const start = Date.now()

    const finish = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
      window.setTimeout(() => setIsLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish)
      return () => window.removeEventListener('load', finish)
    }
  }, [])

  return isLoading
}

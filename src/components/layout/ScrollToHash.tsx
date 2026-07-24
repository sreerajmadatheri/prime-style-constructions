import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }

    const id = hash.replace('#', '')

    const scroll = () => {
      const element = document.getElementById(id)

      if (!element) return

      // Navbar + TopBar height
      const offset = 120

      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }

    // Wait for page rendering
    setTimeout(scroll, 100)
  }, [pathname, hash])

  return null
}

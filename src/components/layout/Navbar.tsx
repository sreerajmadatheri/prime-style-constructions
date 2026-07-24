import { Menu } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '@/assets/logo/logo.svg'
import logoWhite from '@/assets/logo/logo-icon.svg'

import { MAIN_NAV } from '@/constants'
import { useScrollPosition } from '@/hooks'
import { cn } from '@/lib'
import { ROUTES } from '@/routes/paths'

import { Container, PrimaryButton } from '@/components/ui'
import { MobileDrawer } from './MobileDrawer'

export interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const location = useLocation()

  const { scrolled } = useScrollPosition(80)

  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  const isTransparent = transparent && !scrolled

  const headerTop = scrolled ? 'top-0' : 'top-[40px]'

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 z-50 transition-all duration-300',
          headerTop,
          isTransparent
            ? 'bg-transparent'
            : 'border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-md',
        )}
      >
        <Container className="flex h-[90px] items-center justify-between">
          <Link to={ROUTES.HOME} className="shrink-0">
            <img
              src={isTransparent ? logoWhite : logo}
              alt="Prime Style Constructions"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {MAIN_NAV.map((item) => {
                const active =
                  item.href === '/'
                    ? location.hash === ''
                    : location.hash === item.href

                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={cn(
                        'cursor-pointer font-medium transition-colors duration-300',

                        isTransparent
                          ? 'text-white hover:text-blue-200'
                          : 'text-slate-800 hover:text-primary',

                        active &&
                          (isTransparent ? 'text-blue-200' : 'text-primary'),
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <PrimaryButton to="/#contact" size="sm">
              Get a Quote
            </PrimaryButton>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
              className={cn(
                'cursor-pointer lg:hidden',
                isTransparent ? 'text-white' : 'text-slate-900',
              )}
            >
              <Menu size={28} />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer isOpen={mobileOpen} onClose={closeMobile} />
    </>
  )
}

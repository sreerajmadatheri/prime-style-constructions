import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MAIN_NAV, SITE } from '@/constants'
import { useLockBodyScroll } from '@/hooks'
import { cn } from '@/lib'
import { ROUTES } from '@/routes/paths'
import { PrimaryButton } from '@/components/ui'
import logoIcon from '@/assets/logo/logo-icon.svg'

export interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const location = useLocation()
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useLockBodyScroll(isOpen)

  const toggleExpanded = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-text/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-(--navbar-height) items-center justify-between border-b border-border px-6">
              <Link to={ROUTES.HOME} onClick={onClose} className="flex items-center gap-3">
                <img src={logoIcon} alt="" className="size-9" aria-hidden />
                <span className="font-display text-sm font-bold tracking-tight text-text">
                  {SITE.shortName}
                </span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-full text-text transition-colors hover:bg-surface-muted"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-1">
                {MAIN_NAV.map((item) => {
                  const isActive = location.pathname === item.href
                  const hasMega = Boolean(item.megaMenu?.length)

                  return (
                    <li key={item.label}>
                      {hasMega ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleExpanded(item.label)}
                            className={cn(
                              'flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-base font-medium transition-colors',
                              isActive
                                ? 'bg-accent text-primary'
                                : 'text-text hover:bg-surface-muted',
                            )}
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                'size-4 transition-transform duration-250',
                                expandedItem === item.label && 'rotate-180',
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItem === item.label && item.megaMenu && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pl-4"
                              >
                                {item.megaMenu.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      to={sub.href}
                                      onClick={onClose}
                                      className="block rounded-lg px-4 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface-muted hover:text-primary"
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            'block rounded-lg px-4 py-3.5 text-base font-medium transition-colors',
                            isActive
                              ? 'bg-accent text-primary'
                              : 'text-text hover:bg-surface-muted',
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="border-t border-border p-6">
              <PrimaryButton to={ROUTES.CONTACT} onClick={onClose} className="w-full" size="md">
                Get a Quote
              </PrimaryButton>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

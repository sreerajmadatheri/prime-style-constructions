import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  Hammer,
  HardHat,
  Layers,
  Paintbrush,
  Settings,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NavMegaItem } from '@/constants'
import { ROUTES } from '@/routes/paths'
import { cn } from '@/lib'
import { Container } from '@/components/ui'

const iconMap = {
  residential: Building2,
  commercial: Layers,
  industrial: HardHat,
  interior: Paintbrush,
  renovation: Hammer,
  management: Settings,
} as const

function getMegaIcon(label: string) {
  const key = label.toLowerCase()
  if (key.includes('residential')) return iconMap.residential
  if (key.includes('commercial')) return iconMap.commercial
  if (key.includes('industrial')) return iconMap.industrial
  if (key.includes('interior')) return iconMap.interior
  if (key.includes('renovation')) return iconMap.renovation
  return iconMap.management
}

export interface MegaMenuProps {
  items: NavMegaItem[]
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ items, isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-0 right-0 top-[calc(var(--topbar-height)+var(--navbar-height))] z-50 border-t border-border/60 bg-white shadow-2xl"
          onMouseLeave={onClose}
        >
          <Container className="py-10">
            <div className="mb-8 flex items-end justify-between border-b border-border pb-6">
              <div>
                <p className="text-overline mb-2">Our Expertise</p>
                <h3 className="heading-display text-2xl text-text">
                  Construction Services
                </h3>
              </div>
              <Link
                to={ROUTES.SERVICES}
                onClick={onClose}
                className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                View All Services →
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => {
                const Icon = getMegaIcon(item.label)

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      'group flex gap-4 rounded-xl p-4 transition-all duration-250',
                      'hover:bg-accent/60 hover:shadow-sm',
                    )}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-colors duration-250 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-semibold text-text transition-colors group-hover:text-primary">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-text-muted">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

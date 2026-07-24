import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib'
import { ROUTES } from '@/routes/paths'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  light?: boolean
}

export function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('py-4', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link
            to={ROUTES.HOME}
            className={cn(
              'inline-flex items-center gap-1 transition-colors duration-250 hover:text-primary',
              light ? 'text-white/70 hover:text-white' : 'text-text-muted',
            )}
            aria-label="Home"
          >
            <Home className="size-3.5" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight
                className={cn(
                  'size-3.5 shrink-0',
                  light ? 'text-white/40' : 'text-border-strong',
                )}
                aria-hidden
              />
              {isLast || !item.href ? (
                <span
                  className={cn(
                    'font-medium',
                    light ? 'text-white' : 'text-text',
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    'transition-colors duration-250 hover:text-primary',
                    light ? 'text-white/70 hover:text-white' : 'text-text-muted',
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

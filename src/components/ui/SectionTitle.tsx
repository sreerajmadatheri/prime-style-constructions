import type { ReactNode } from 'react'
import { cn } from '@/lib'

export interface SectionTitleProps {
  overline?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  light?: boolean
  children?: ReactNode
}

export function SectionTitle({
  overline,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
  light = false,
  children,
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'max-w-3xl',
        isCenter && 'mx-auto text-center',
        className,
      )}
    >
      {overline && (
        <p
          className={cn(
            'text-overline mb-4',
            light && 'text-accent-dark',
          )}
        >
          {overline}
        </p>
      )}
      <h2
        className={cn(
          'heading-display text-3xl md:text-4xl lg:text-5xl',
          light ? 'text-text-inverse' : 'text-text',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lead mt-5',
            light ? 'text-white/75' : 'text-text-muted',
          )}
        >
          {description}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  )
}

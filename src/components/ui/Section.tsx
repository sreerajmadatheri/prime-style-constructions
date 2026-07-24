import type { ReactNode } from 'react'
import { cn } from '@/lib'
import { Container } from './Container'

const variantStyles = {
  default: 'bg-secondary',
  muted: 'bg-surface-muted',
  dark: 'bg-text text-text-inverse',
  accent: 'bg-accent/40',
} as const

const spacingStyles = {
  none: '',
  sm: 'py-(--spacing-section-sm)',
  default: 'py-(--spacing-section)',
  lg: 'py-[8rem]',
} as const

export interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: keyof typeof variantStyles
  spacing?: keyof typeof spacingStyles
  containerClassName?: string
  containerSize?: 'default' | 'narrow' | 'wide'
  fullWidth?: boolean
}

export function Section({
  children,
  className,
  id,
  variant = 'default',
  spacing = 'default',
  containerClassName,
  containerSize = 'default',
  fullWidth = false,
}: SectionProps) {
  const content = fullWidth ? (
    children
  ) : (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  )

  return (
    <section
      id={id}
      className={cn(variantStyles[variant], spacingStyles[spacing], className)}
    >
      {content}
    </section>
  )
}

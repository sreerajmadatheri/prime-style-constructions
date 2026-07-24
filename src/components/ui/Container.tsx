import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib'

const sizeStyles = {
  default: 'max-w-(--container-max)',
  narrow: 'max-w-(--container-narrow)',
  wide: 'max-w-(--container-wide)',
} as const

export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: keyof typeof sizeStyles
  as?: ElementType
}

export function Container({
  children,
  className,
  size = 'default',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-(--container-padding)',
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </Component>
  )
}

export type ContainerDivProps = ContainerProps &
  ComponentPropsWithoutRef<'div'>

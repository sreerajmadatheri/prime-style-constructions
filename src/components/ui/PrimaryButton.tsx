import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib'

const baseStyles =
  'btn-lift inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const sizeStyles = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-7 text-sm',
  lg: 'h-14 px-9 text-base',
} as const

const variantStyles =
  'bg-primary text-text-inverse shadow-md hover:bg-primary-dark'

type BaseProps = {
  size?: keyof typeof sizeStyles
  className?: string
  children?: ReactNode
}

type ButtonVariant = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }

type LinkVariant = BaseProps &
  Omit<LinkProps, 'className'> & { to: string; type?: never }

export type PrimaryButtonProps = ButtonVariant | LinkVariant

export const PrimaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PrimaryButtonProps
>(({ className, size = 'md', children, ...props }, ref) => {
  const classes = cn(baseStyles, sizeStyles[size], variantStyles, className)

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={to}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonVariant

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  )
})

PrimaryButton.displayName = 'PrimaryButton'

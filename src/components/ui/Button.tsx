import type { ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import clsx from 'clsx'

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
  children: ReactNode
}) {
  const base = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-ghost'
  return (
    <button type="button" className={clsx(base, className)} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  variant = 'primary',
  className,
  to,
  ...props
}: Omit<LinkProps, 'children'> & {
  variant?: 'primary' | 'outline' | 'ghost'
  children: ReactNode
}) {
  const base = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-ghost'
  return (
    <Link className={clsx(base, className)} to={to} {...props}>
      {children}
    </Link>
  )
}

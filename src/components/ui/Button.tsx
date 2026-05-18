'use client'

import Link from 'next/link'
import type { FC, ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid:
    'bg-brand-red hover:bg-brand-red-dark text-white border border-brand-red',
  outline:
    'border border-brand-red text-brand-red hover:bg-brand-red hover:text-white bg-transparent',
}

const baseClasses =
  'inline-flex items-center justify-center font-display uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none'

const Button: FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button

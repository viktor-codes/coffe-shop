import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
	href?: string
	isLoading?: boolean
	fullWidth?: boolean
	children: React.ReactNode
}

// Base styles that apply to all buttons
const baseStyles = `
  inline-flex items-center justify-center
  font-semibold text-center
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
`

// Variant styles
const variantStyles: Record<ButtonVariant, string> = {
	primary: `
    bg-primary text-white
    hover:scale-105
    focus:ring-primary
    shadow-xs
  `,
	secondary: `
    bg-dark text-light
    hover:bg-dark/90
    focus:ring-dark
  `,
	outline: `
    border-2 border-primary text-primary bg-transparent
    hover:bg-primary hover:text-light
    focus:ring-primary
  `,
	ghost: `
    text-dark bg-transparent
    hover:bg-dark/10
    focus:ring-dark
  `,
}

// Size styles
const sizeStyles: Record<ButtonSize, string> = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-8 py-3.5 text-lg',
}

/**
 * Reusable Button component that can render as a button or Link
 *
 * @example
 * // As a button
 * <Button onClick={handleClick}>Click me</Button>
 *
 * @example
 * // As a link
 * <Button href="/reservation">Reserve Now</Button>
 *
 * @example
 * // With variants
 * <Button variant="outline" size="lg">Large Outline</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'primary',
			size = 'md',
			href,
			isLoading = false,
			fullWidth = false,
			className,
			children,
			disabled,
			...props
		},
		ref
	) => {
		// Combine all styles
		const combinedClassName = cn(
			baseStyles,
			variantStyles[variant],
			sizeStyles[size],
			fullWidth && 'w-full',
			className
		)

		// Render as Link if href is provided
		if (href) {
			return (
				<Link
					href={href}
					className={combinedClassName}
					aria-disabled={disabled}
				>
					{isLoading ? 'Loading...' : children}
				</Link>
			)
		}

		// Render as button
		return (
			<button
				ref={ref}
				className={combinedClassName}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading ? 'Loading...' : children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export default Button

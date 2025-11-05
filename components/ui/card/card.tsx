import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	/** Visual variant */
	variant?: 'elevated' | 'outlined' | 'filled'
	/** Padding size */
	padding?: 'none' | 'sm' | 'md' | 'lg'
	/** Enable hover effect */
	hoverable?: boolean
	children: React.ReactNode
}

const variantStyles = {
	elevated: 'bg-white shadow-lg',
	outlined: 'bg-transparent border border-dark/10',
	filled: 'bg-light/5 border border-light/10',
}

const paddingStyles = {
	none: '',
	sm: 'p-4',
	md: 'p-6',
	lg: 'p-8',
}

/**
 * Reusable Card component
 */
const Card = ({
	variant = 'elevated',
	padding = 'md',
	hoverable = false,
	className,
	children,
	...props
}: CardProps) => {
	return (
		<div
			className={cn(
				variantStyles[variant],
				paddingStyles[padding],
				hoverable && 'transition-shadow duration-300 hover:shadow-xl',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Card

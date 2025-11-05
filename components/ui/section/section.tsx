import { HTMLAttributes } from 'react'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
	/** Background variant */
	variant?: 'light' | 'dark' | 'primary'
	/** Vertical padding */
	spacing?: 'none' | 'sm' | 'md' | 'lg'
	/** Container width */
	containerWidth?: 'full' | '7xl' | '6xl' | '5xl'
	/** Whether to use Container wrapper */
	contained?: boolean
	children: React.ReactNode
}

const variantStyles = {
	light: 'bg-light text-dark',
	dark: 'bg-dark text-light',
	primary: 'bg-primary text-light',
}

const spacingStyles = {
	none: '',
	sm: 'py-10',
	md: 'py-20',
	lg: 'py-32',
}

/**
 * Section wrapper component for consistent page sections
 */
const Section = ({
	variant = 'light',
	spacing = 'md',
	containerWidth = '7xl',
	contained = true,
	className,
	children,
	...props
}: SectionProps) => {
	const content = contained ? (
		<Container maxWidth={containerWidth}>{children}</Container>
	) : (
		children
	)

	return (
		<section
			className={cn(variantStyles[variant], spacingStyles[spacing], className)}
			{...props}
		>
			{content}
		</section>
	)
}

export default Section

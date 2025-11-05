import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Maximum width variant
	 * @default '7xl'
	 */
	maxWidth?: 'full' | '7xl' | '6xl' | '5xl' | '4xl'
	/**
	 * Whether to add padding
	 * @default true
	 */
	padded?: boolean
	/**
	 * Custom element type
	 * @default 'div'
	 */
	as?: 'div' | 'section' | 'article' | 'main' | 'aside'
	children: React.ReactNode
}

const maxWidthStyles: Record<
	Exclude<ContainerProps['maxWidth'], undefined>,
	string
> = {
	full: 'max-w-full',
	'7xl': 'max-w-7xl',
	'6xl': 'max-w-6xl',
	'5xl': 'max-w-5xl',
	'4xl': 'max-w-4xl',
}

/**
 * Container component for consistent page widths and spacing
 *
 * @example
 * <Container maxWidth="7xl">
 *   <YourContent />
 * </Container>
 */
const Container = ({
	maxWidth = '7xl',
	padded = true,
	as: Component = 'div',
	className,
	children,
	...props
}: ContainerProps) => {
	return (
		<Component
			className={cn(
				'mx-auto w-full',
				maxWidthStyles[maxWidth],
				padded && 'px-4 sm:px-6 lg:px-8',
				className
			)}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Container

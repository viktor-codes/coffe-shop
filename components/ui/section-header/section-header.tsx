import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
	title: string
	description?: string
	align?: 'left' | 'center'
	className?: string
}

/**
 * Consistent section header component
 */
const SectionHeader = ({
	title,
	description,
	align = 'center',
	className,
}: SectionHeaderProps) => {
	return (
		<div
			className={cn(
				'mb-12 lg:mb-16',
				align === 'center' ? 'text-center mx-auto' : 'text-left',
				className
			)}
		>
			<h2 className='text-4xl lg:text-5xl font-bold leading-[120%] mb-4'>
				{title}
			</h2>
			{description && (
				<p
					className={cn(
						'text-lg opacity-70 max-w-2xl',
						align === 'center' && 'mx-auto'
					)}
				>
					{description}
				</p>
			)}
		</div>
	)
}

export default SectionHeader

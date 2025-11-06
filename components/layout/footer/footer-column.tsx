interface FooterColumnProps {
	title: string
	className?: string
	children: React.ReactNode
}

/**
 * Reusable footer column component
 */
const FooterColumn = ({
	title,
	className = '',
	children,
}: FooterColumnProps) => {
	return (
		<div className={`flex flex-col gap-5 ${className}`}>
			<h4 className='font-bold text-light uppercase whitespace-nowrap text-lg'>
				{title}
			</h4>
			{children}
		</div>
	)
}

export default FooterColumn

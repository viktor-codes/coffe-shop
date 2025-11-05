import { FeatureCardProps } from './features.types'

/**
 * Individual feature card component
 */
const FeatureCard = ({ feature }: FeatureCardProps) => {
	const Icon = feature.icon

	return (
		<article
			className='flex flex-col items-center p-6 sm:p-8 border border-light/10 bg-light/5 text-center transition-all duration-300 hover:bg-light/10 group'
			aria-labelledby={`feature-${feature.id}-title`}
		>
			{/* Icon */}
			<div className='mb-6 transition-transform duration-300 group-hover:scale-110'>
				<Icon size={48} className='text-primary' aria-hidden='true' />
			</div>

			{/* Title */}
			<h3
				id={`feature-${feature.id}-title`}
				className='text-xl sm:text-2xl font-semibold mb-3'
			>
				{feature.title}
			</h3>

			{/* Description */}
			<p className='text-light/80 leading-relaxed'>{feature.description}</p>
		</article>
	)
}

export default FeatureCard

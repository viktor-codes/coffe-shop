import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'
import FeatureCard from './feature-card'
import { FeaturesProps } from './features.types'

const Features = ({
	features,
	title = 'Why We Are Special Cafe',
	description = "We believe great coffee is only part of the story. It's about combining exceptional flavor with an unmatched cozy experience.",
	className = '',
}: FeaturesProps) => {
	return (
		<Section
			variant='dark'
			spacing='lg'
			className={`mt-[-100px] pt-[180px] ${className}`}
			aria-labelledby='features-heading'
		>
			{/* Section Header */}
			<SectionHeader title={title} description={description} />

			{/* Features Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8'>
				{features.map(feature => (
					<FeatureCard key={feature.id} feature={feature} />
				))}
			</div>
		</Section>
	)
}

export default Features

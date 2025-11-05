import Section from '@/components/ui/section/section'
import SectionHeader from '@/components/ui/section-header'
import FeatureCard from './feature-card'
import { FeaturesProps } from './features.types'

/**
 * Features section showcasing cafe highlights
 *
 * @example
 * <Features
 *   features={features}
 *   title="Why Choose Us"
 *   description="What makes us special"
 * />
 */
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

// import { GiCoffeeMug, GiCoffeeBeans } from 'react-icons/gi'
// import { PiGuitarBold } from 'react-icons/pi'
// import { MdOutlinePets } from 'react-icons/md'
// const features = () => {
// 	// Array of feature data to simplify mapping and keep the JSX clean
// 	const featureData = [
// 		{
// 			icon: GiCoffeeMug,
// 			title: 'Best Taste',
// 			description:
// 				'We meticulously roast and brew the finest selection of beans to deliver an unparalleled flavor in every cup.',
// 		},
// 		{
// 			icon: GiCoffeeBeans,
// 			title: 'Ethical Sourcing',
// 			description:
// 				'Our commitment to quality starts at the farm, ensuring sustainable and fair trade practices for every bean we purchase.',
// 		},
// 		{
// 			icon: PiGuitarBold,
// 			title: 'Relaxing Vibes',
// 			description:
// 				'Enjoy calming acoustic music and comfortable seating, creating the perfect atmosphere for relaxation and focus.',
// 		},
// 		{
// 			icon: MdOutlinePets,
// 			title: 'Pet-Friendly',
// 			description:
// 				'Bring your furry friends along! Our outdoor and designated indoor areas welcome all members of your family.',
// 		},
// 	]

// 	return (
// 		<section className='bg-dark mt-[-100px] pt-[180px] py-20 text-light'>
// 			<div className='text-center'>
// 				<h2 className='capitalize text-5xl font-semibold leading-[120%] mb-4'>
// 					Why We Are Special Cafe
// 				</h2>
// 				<p className='text-lg text-light/70 max-w-2xl mx-auto'>
// 					We believe great coffee is only part of the story. It's about
// 					combining exceptional flavor with an unmatched cozy experience.
// 				</p>
// 			</div>
// 			<div className='2xl:max-w-7xl container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16 mb-8 px-4'>
// 				{featureData.map((feature, index) => (
// 					// Card Container: flex column, centered content, padding, border-radius
// 					<div
// 						key={index}
// 						className='flex flex-col items-center p-8 border border-light/10 bg-light/5 text-center transition-all duration-300 hover:bg-light/10'
// 					>
// 						{/* ICON */}
// 						{/* Added styling for icon color and margin */}
// 						<feature.icon size={48} className='text-primary mb-6' />

// 						{/* TITLE */}
// 						<h4 className='text-2xl font-semibold mb-3'>{feature.title}</h4>

// 						{/* DESCRIPTION */}
// 						{/* Adjusted text color for readability */}
// 						<p className='text-light/80'>{feature.description}</p>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	)
// }

// export default features

import Image from 'next/image'
import Section from '@/components/ui/section'
import Button from '@/components/ui/button'
import { AboutProps } from './about.types'
import { cn } from '@/lib/utils'
import { ctaConfig } from '@/config/navigation'

const About = ({
	title,
	description,
	image,
	imageAlt,
	ctaText = ctaConfig.learnMore.text,
	ctaHref = ctaConfig.learnMore.href,
	founded,
	imageOnLeft = true,
	className = '',
}: AboutProps) => {
	return (
		<Section
			variant='light'
			spacing='lg'
			className={className}
			aria-labelledby='about-heading'
		>
			{/* Main Flex Container */}
			<div
				className={cn(
					'flex flex-col lg:flex-row items-center gap-8 lg:gap-0',
					!imageOnLeft && 'lg:flex-row-reverse'
				)}
			>
				{/* Image Container */}
				<div className='relative w-full lg:w-1/2 z-10 flex justify-center lg:justify-start'>
					<div className='relative w-full max-w-md lg:max-w-lg'>
						<Image
							src={image}
							alt={imageAlt}
							width={500}
							height={600}
							className={cn(
								'object-cover shadow-lg',
								imageOnLeft && 'lg:scale-x-[-1]'
							)}
							priority
						/>
					</div>
				</div>

				{/* Content Container - Overlaps Image */}
				<div
					className={cn(
						'bg-white p-8 sm:p-12 lg:p-16 shadow-xl w-2/3 -mt-24 lg:w-4/5 z-20',
						'flex flex-col gap-6 lg:gap-8 justify-center',
						imageOnLeft ? 'lg:ml-[-100px]' : 'lg:mr-[-100px]'
					)}
				>
					{/* Title */}
					<h2
						id='about-heading'
						className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-[120%] text-dark capitalize'
					>
						{title}
					</h2>

					{/* Founded Badge (optional) */}
					{founded && (
						<p className='text-primary font-semibold text-lg'>
							Serving excellence since {founded}
						</p>
					)}

					{/* Description */}
					<p className='text-base sm:text-lg text-dark/70 leading-relaxed'>
						{description}
					</p>

					{/* CTA Button */}
					<Button
						href={ctaHref}
						size='lg'
						className='self-start w-full sm:w-auto'
					>
						"Read Our Story"
					</Button>
				</div>
			</div>
		</Section>
	)
}

export default About

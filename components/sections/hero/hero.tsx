import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/assets/293.webp'
import Button from '@/components/ui/button'
import { HeroProps } from './hero.types'

/**
 * Hero section component - главная секция на главной странице
 * 
 * @example
 * <Hero 
 *   title="Best Coffee Taste, Best Cozy Place"
 *   description="Step inside, where every cup is perfectly brewed"
 *   ctaText="Reservation"
 *   ctaHref="/reservation"
 * />
 */
const Hero = ({
	title = 'Best Coffee Taste, Best Cozy Place',
	description = 'Step inside, where every cup is perfectly brewed and the atmosphere invites you to stay a while.',
	ctaText = 'Reservation',
	ctaHref = '/reservation',
	image = heroImage,
	imageAlt = 'A beautiful cup of coffee in a cozy cafe setting',
	className = '',
}: HeroProps) => {
	return (
		<section
			className={`container 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 ${className}`}
			aria-labelledby='hero-heading'
		>
			<div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16'>
				{/* Image Container - адаптивный */}
				<div className='relative w-full sm:w-[90%] md:w-[80%] lg:w-[50%] xl:w-[600px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-[600px] shadow-2xl z-10'>
					<Image
						src={image}
						alt={imageAlt}
						fill
						priority
						className='object-cover object-center shadow-xl rounded-lg'
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
					/>
				</div>

				{/* Content Container */}
				<div className='flex flex-1 flex-col gap-6 sm:gap-8 lg:gap-10 text-center lg:text-left w-full lg:w-1/2'>
					<h1
						id='hero-heading'
						className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-dark leading-[120%]'
					>
						{title}
					</h1>
					<p className='text-base sm:text-lg lg:text-xl text-dark/70 xl:max-w-[500px] mx-auto lg:mx-0 leading-relaxed'>
						{description}
					</p>
					<div className='flex justify-center lg:justify-start'>
						<Button
							href={ctaHref}
							size='lg'
							className='w-full sm:w-auto'
						>
							{ctaText}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

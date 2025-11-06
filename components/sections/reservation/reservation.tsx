import Image from 'next/image'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { ReservationProps } from './reservation.types'

/**
 * Full-width CTA section with background image overlay
 *
 * @example
 * <Reservation
 *   title="Book Your Table"
 *   description="Reserve your spot today"
 *   backgroundImage={ctaImage}
 *   imageAlt="Cafe interior"
 * />
 */
const Reservation = ({
	title,
	description,
	backgroundImage,
	imageAlt,
	ctaText = 'Make Reservation',
	ctaHref = '/reservation',
	overlayOpacity = 60,
	className = '',
}: ReservationProps) => {
	return (
		<section
			className={`relative py-20 lg:py-32 overflow-hidden ${className}`}
			aria-labelledby='reservation-heading'
		>
			{/* Background Image */}
			<Image
				src={backgroundImage}
				alt={imageAlt}
				fill
				className='absolute object-cover object-center z-0'
				sizes='100vw'
				priority={false}
			/>

			{/* Dark Overlay for Text Readability */}
			<div
				className='absolute inset-0 bg-dark z-10'
				style={{ opacity: overlayOpacity / 100 }}
				aria-hidden='true'
			/>

			{/* Content Container */}
			<Container maxWidth='7xl' className='relative z-20'>
				<div className='text-center max-w-4xl mx-auto'>
					{/* Headline */}
					<h2
						id='reservation-heading'
						className='text-4xl sm:text-5xl lg:text-6xl font-bold text-light leading-[120%] mb-6'
					>
						{title}
					</h2>

					{/* Description */}
					<p className='text-lg sm:text-xl text-light/90 mb-10 max-w-3xl mx-auto'>
						{description}
					</p>

					{/* CTA Button */}
					<Button
						href={ctaHref}
						size='lg'
						className='text-xl px-12 py-5 shadow-2xl hover:shadow-primary/50'
					>
						{ctaText}
					</Button>
				</div>
			</Container>
		</section>
	)
}

export default Reservation

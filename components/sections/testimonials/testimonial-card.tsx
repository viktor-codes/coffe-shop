import { IoMdStar } from 'react-icons/io'
import Card from '@/components/ui/card'
import { TestimonialCardProps } from './testimonials.types'

/**
 * Individual testimonial card component
 */
const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
	return (
		<Card
			variant='elevated'
			padding='lg'
			hoverable
			className='flex flex-col h-full'
		>
			{/* Quote */}
			<blockquote className='text-dark text-base md:text-lg italic leading-relaxed flex grow mb-6'>
				<p>&ldquo;{testimonial.quote}&rdquo;</p>
			</blockquote>

			{/* Author Info */}
			<footer className='pt-4 border-t border-dark/10'>
				{/* Star Rating */}
				<div
					className='flex mb-3 gap-1'
					role='img'
					aria-label={`${testimonial.rating} out of 5 stars`}
				>
					{Array.from({ length: 5 }).map((_, i) => (
						<IoMdStar
							key={i}
							size={20}
							className={
								i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
							}
							aria-hidden='true'
						/>
					))}
				</div>

				{/* Name */}
				<cite className='not-italic'>
					<p className='text-dark font-bold text-lg'>{testimonial.name}</p>
					{testimonial.role && (
						<p className='text-dark/60 text-sm mt-1'>{testimonial.role}</p>
					)}
				</cite>
			</footer>
		</Card>
	)
}

export default TestimonialCard

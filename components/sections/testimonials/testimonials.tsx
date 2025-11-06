import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'
import TestimonialCard from './testimonial-card'
import { TestimonialsProps } from './testimonials.types'
import { testimonialsData } from '@/config/testimonials'

const Testimonials = ({
	testimonials = testimonialsData,
	title = 'What Our Customers Say',
	description = 'Read the latest love notes from our community.',
	className = '',
}: TestimonialsProps) => {
	return (
		<Section
			variant='light'
			spacing='lg'
			className={className}
			aria-labelledby='testimonials-heading'
		>
			{/* Section Header */}
			<SectionHeader title={title} description={description} />

			{/* Testimonials Grid */}
			<div className='grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{testimonials.map(testimonial => (
					<TestimonialCard key={testimonial.id} testimonial={testimonial} />
				))}
			</div>
		</Section>
	)
}

export default Testimonials

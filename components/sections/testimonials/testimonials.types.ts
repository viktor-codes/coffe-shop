export interface Testimonial {
	id: string
	name: string
	quote: string
	rating: number
	role?: string
	avatar?: string
}

export interface TestimonialsProps {
	testimonials: Testimonial[]
	title?: string
	description?: string
	className?: string
}

export interface TestimonialCardProps {
	testimonial: Testimonial
}

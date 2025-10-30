import { FaStar } from 'react-icons/fa'

const testimonials_data = [
	{
		name: 'Sarah K.',

		quote:
			"The 'Best Coffee Taste' is no exaggeration. This place is my morning ritual—the perfect blend of a cozy atmosphere and truly exceptional pour-overs. Five stars isn't enough!",
		rating: 5,
	},
	{
		name: 'David L.',

		quote:
			"I rely on the strong Wi-Fi and even stronger espresso here. It's the ideal remote workspace. The pastries are a delicious bonus!",
		rating: 5,
	},
	{
		name: 'Emily H.',

		quote:
			"I love the vibe and the art on the walls. It’s definitely the 'Cozy Place' they promise. Their seasonal lattes are always a must-try.",
		rating: 5,
	},
]

type TestimonialCardProps = {
	name: string

	quote: string
	rating: number
}

const TestimonialCard = ({
	name,

	quote,
	rating,
}: TestimonialCardProps) => (
	<div className='bg-dark p-6 sm:p-8 transition flex flex-col h-full'>
		<div className='flex mb-4'>
			{[...Array(rating)].map((_, i) => (
				<FaStar key={i} className='text-primary' />
			))}
		</div>
		<p className='text-gray-200 italic leading-relaxed flex grow'>
			&quot;{quote}&quot;
		</p>
		<div className='mt-6 pt-4 border-t border-gray-600'>
			<p className='text-light font-bold text-lg'>{name}</p>
		</div>
	</div>
)

const testimonials = () => {
	return (
		<section className='2xl:max-w-7xl container mx-auto py-20'>
			<div className=''>
				{/* Section Header */}
				<div className='text-center mb-12 md:mb-16'>
					<h2 className='capitalize text-5xl text-dark font-semibold leading-[120%] mb-4'>
						What our Customers Say
					</h2>
					<p className='text-lg text-dark/70'>
						Read the latest love notes from our community.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
					{testimonials_data.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							name={testimonial.name}
							quote={testimonial.quote}
							rating={testimonial.rating}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default testimonials

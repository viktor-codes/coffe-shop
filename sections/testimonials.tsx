import { IoMdStar } from 'react-icons/io'

const testimonials_data = [
	{
		name: 'Sarah Kenedy',

		quote:
			"The 'Best Coffee Taste' is no exaggeration. This place is my morning ritual—the perfect blend of a cozy atmosphere and truly exceptional pour-overs. Five stars isn't enough!",
		rating: 5,
	},
	{
		name: 'David Lourens',

		quote:
			"I rely on the strong Wi-Fi and even stronger espresso here. It's the ideal remote workspace. The pastries are a delicious bonus!",
		rating: 5,
	},
	{
		name: 'Emily Hynes',

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
	<div className='bg-white shadow-sm p-6 text-center sm:p-8 transition flex flex-col h-full'>
		<p className='text-dark text-base md:text-lg italic leading-relaxed flex grow'>
			&quot;{quote}&quot;
		</p>
		<div className='mt-6 pt-4 '>
			<div className='flex mb-4 justify-center gap-2'>
				{[...Array(rating)].map((_, i) => (
					<IoMdStar key={i} size={24} className='text-yellow-600' />
				))}
			</div>
			<p className='text-dark font-bold text-lg'>{name}</p>
		</div>
	</div>
)

const testimonials = () => {
	return (
		<section className='2xl:max-w-7xl container mx-auto py-20 px-6 md:px-0'>
			{/* Section Header */}
			<div className='text-center mb-16'>
				<h2 className='capitalize text-5xl text-dark font-semibold leading-[120%] mb-4'>
					What our Customers Say
				</h2>
				<p className='text-lg text-dark/70 max-w-2xl mx-auto'>
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
		</section>
	)
}

export default testimonials

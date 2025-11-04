import Image from 'next/image'
import ctaImage from '@/assets/441.webp'

const reservation = () => {
	return (
		<section className='relative container  2xl:max-w-7xl mx-auto my-20 py-20 overflow-hidden'>
			<Image
				src={ctaImage}
				alt='Coffee shop interior - background for reservation CTA'
				className='absolute object-cover w-full object-center inset-0 z-0'
			/>
			{/* Dark Overlay for Text Readability */}
			<div className='absolute inset-0 bg-dark/60 z-10'></div>{' '}
			{/* 60% opaque dark overlay */}
			{/* Content Container - Centered and on top of overlay */}
			<div className='relative container mx-auto text-center z-20 px-4'>
				{' '}
				{/* z-20 to be above overlay */}
				{/* Headline */}
				<h2 className='text-5xl lg:text-6xl font-bold text-light leading-[120%] mb-6'>
					Make Your Reservation Now
				</h2>
				{/* Description */}
				<p className='text-xl text-light/80 max-w-3xl mx-auto mb-10'>
					Book your table now to ensure your spot in our cozy cafe. Whether it's
					a quick espresso or a leisurely chat, we're ready to welcome you.
				</p>
				{/* CTA Button */}
				<button className='self-start font-semibold bg-primary px-10 py-4 text-light shadow-lg cursor-pointer hover:scale-105 transition-all whitespace-nowrap text-xl mx-auto block w-fit'>
					Learn More
				</button>
			</div>
		</section>
	)
}

export default reservation

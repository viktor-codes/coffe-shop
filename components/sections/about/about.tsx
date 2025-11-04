import Image from 'next/image'
import aboutImage from '@/assets/about.webp'

const about = () => {
	return (
		<section className='container  2xl:max-w-7xl mx-auto py-20'>
			{/* 1. Main Flex Container */}
			<div className='flex flex-col lg:flex-row items-center gap-4'>
				{/* 2. Image Container - Positioned and Mirrored */}
				{/* z-10 ensures the image sits ABOVE the white background of the content div if they overlap */}
				<div className='relative w-full lg:w-1/2 z-10'>
					<Image
						src={aboutImage}
						alt='coffee machine'
						width={500}
						height={600}
						className='scale-x-[-1]'
					/>
				</div>

				{/* 3. Content Container - Overlaps Image */}
				<div className='bg-light p-10 lg:p-16 h-[500px] shadow-sm w-full lg:w-4/5 lg:ml-[-100px] z-20 flex flex-col gap-8 justify-center items-start'>
					{/* Title */}
					<h2 className='capitalize text-5xl font-bold leading-[120%] text-dark mb-4 max-w-[550px]'>
						serve the best coffee taste since 2010
					</h2>

					{/* Description */}
					<p className='text-lg text-dark/70 mb-8 max-w-[600px]'>
						Step behind the scenes and discover the dedication that goes into
						every brew. From ethically sourced beans to our custom-calibrated
						machine, we obsess over details to deliver the best taste and
						experience. Our space is designed to be your cozy escape.
					</p>

					{/* CTA Button - Reusing previous style */}
					<button className='font-semibold bg-primary px-8 py-3.5 text-light shadow-xs cursor-pointer hover:scale-105 transition-all whitespace-nowrap self-start'>
						Learn More
					</button>
				</div>
			</div>
		</section>
	)
}

export default about

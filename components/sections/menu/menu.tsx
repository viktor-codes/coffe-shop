import Image from 'next/image'

// Assuming you have images like this in your assets folder
import menuImage1 from '@/assets/menu-item-1.webp'
import menuImage2 from '@/assets/menu-item-2.webp'
import menuImage3 from '@/assets/menu-item-3.webp'

// Define the content for your menu cards
const menuItems = [
	{
		image: menuImage1,
		title: 'Espresso Elegance',
		description:
			'A rich, aromatic journey crafted from the finest single-origin beans.',
		link: '#', // Link to your full menu page/section
	},
	{
		image: menuImage2,
		title: 'Signature Latte',
		description:
			'Our classic blend, perfectly frothed with your choice of milk and a touch of sweetness.',
		link: '#',
	},
	{
		image: menuImage3,
		title: 'Morning Pastries',
		description:
			'Freshly baked daily, our pastries are the perfect companion to your morning brew.',
		link: '#',
	},
]

const menu = () => {
	return (
		<section className='py-20 bg-light'>
			{' '}
			{/* Added bg-light for contrast with the previous section */}
			<div className='text-center mb-16'>
				{' '}
				{/* Added margin-bottom */}
				<h2 className='capitalize text-dark text-5xl font-semibold leading-[120%] mb-4'>
					Taste the Best Menu
				</h2>
				<p className='text-lg text-dark/70 max-w-2xl mx-auto'>
					Explore our handcrafted selection of premium coffees, delightful
					pastries, and savory bites, all prepared with passion.
				</p>
			</div>
			<div className='2xl:max-w-7xl container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{menuItems.map((item, index) => (
					<div
						key={index}
						className='relative w-full h-[500px] overflow-hidden'
					>
						{/* Background Image */}
						<Image
							src={item.image}
							alt={item.title}
							className='h-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
						/>

						{/* Content Overlay (bottom 1/3) */}
						<div className='absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-dark to-dark/50 p-6 flex flex-col justify-end text-light transition-all duration-300 group-hover:h-2/5'>
							{' '}
							{/* Adjusted height and gradient */}
							<h4 className='text-3xl font-bold mb-2 leading-tight'>
								{item.title}
							</h4>
							<p className='text-light/80 text-sm mb-4 line-clamp-2'>
								{' '}
								{/* line-clamp to limit description */}
								{item.description}
							</p>
							{/* Reused Button from Hero Section */}
							<button className='self-start font-semibold bg-primary px-8 py-3.5 text-light shadow-xs cursor-pointer hover:scale-105 transition-all whitespace-nowrap'>
								Look Menu
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default menu

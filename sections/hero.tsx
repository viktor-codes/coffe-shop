import Navbar from '@/components/navbar'
import Image from 'next/image'
import heroImage from '@/assets/293.webp'

const hero = () => {
	return (
		<section className='container 2xl:max-w-7xl mx-auto flex gap-16 pt-20'>
			<div className='relative w-[600px] h-[750px] shadow-2xl ms-2  shadow-white z-10'>
				<Image
					src={heroImage}
					alt='hero image - a nice cup of coffee'
					className='shadow-xl h-full object-cover object-center'
					// layout='fill' // Tells the image to fill its parent
					// objectFit='cover' // OR object-cover in Tailwind: Tells it to cover the space, cropping if necessary
					// objectPosition='center'
				/>
			</div>
			<div className='flex flex-1 flex-col gap-10 xl:w-1/2'>
				<h1 className='font-bold text-6xl text-dark pt-30 leading-[120%]'>
					Best Coffee Taste, Best Cozy Place
				</h1>
				<p className='text-lg text-dark/40 xl:max-w-[500px]'>
					Step inside, where every cup is perfectly brewed and the atmosphere
					invites you to stay a while.
				</p>
				<button className='self-start font-semibold bg-primary px-8 py-3.5 text-light shadow-xs cursor-pointer hover:scale-105 transition-all whitespace-nowrap lg:w-auto w-full'>
					Reservation
				</button>
			</div>
		</section>
	)
}

export default hero

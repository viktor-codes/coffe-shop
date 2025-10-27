import Image from 'next/image'
import Logo from '@/assets/coffee-logo.png'
import Link from 'next/link'
import { GiCoffeeMug } from 'react-icons/gi'
import { IoMenu } from 'react-icons/io5'

const menuItems = [
	{ name: 'Home', href: '#link' },
	{ name: 'About', href: '#link' },
	{ name: 'Menu', href: '#link' },
	{ name: 'Blog', href: '#link' },
	{ name: 'Contacts', href: '#link' },
]

const navbar = () => {
	return (
		<nav className=''>
			<div className='container mx-auto pt-12'>
				<div className='flex justify-between items-center'>
					<Link
						href='/'
						className='flex gap-1.5 justify-center items-center cursor-pointer text-dark'
					>
						<GiCoffeeMug size={48} />
						<p className='text-2xl font-bold '>Kopikap</p>
					</Link>
					<div className='flex flex-row justify-center items-center'>
						<div className='lg:hidden cursor-pointer'>
							<IoMenu size={40} />
						</div>
						<ul className='hidden lg:flex gap-12'>
							{menuItems.map(item => (
								<li
									key={item.name}
									className='flex justify-center items-center font-normal text-base transition-all hover:font-bold text-dark'
								>
									<Link
										href={item.href}
										className='hover:text-primary hover:font-bold transition-all'
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='hidden lg:block'>
						<button className='font-semibold bg-primary px-4 py-2 text-light shadow-xs cursor-pointer hover:scale-105 transition-all'>
							Reservation
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default navbar

import Image from 'next/image'
import Button from '@/components/ui/button'
import { MenuItemCardProps } from './menu.types'

/**
 * Individual menu item card with image and overlay content
 */
const MenuItemCard = ({ item, showPrice = false }: MenuItemCardProps) => {
	return (
		<article className='relative w-full h-[500px] overflow-hidden group'>
			{/* Background Image */}
			<Image
				src={item.image}
				alt={item.title}
				fill
				className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
				sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
			/>

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-linear-to-t from-dark via-dark/70 to-transparent' />

			{/* Content Overlay */}
			<div className='absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end text-light z-10 transition-all duration-300'>
				{/* Title */}
				<h3 className='text-2xl sm:text-3xl font-bold mb-2 leading-tight'>
					{item.title}
				</h3>

				{/* Price (if shown) */}
				{showPrice && item.price && (
					<p className='text-xl font-semibold text-primary mb-2'>
						${item.price.toFixed(2)}
					</p>
				)}

				{/* Description */}
				<p className='text-light/80 text-sm sm:text-base mb-4 line-clamp-2'>
					{item.description}
				</p>

				{/* CTA Button
				<Button href={`/menu#${item.id}`} size='lg' className='self-start'>
					View Details
				</Button> */}
			</div>
		</article>
	)
}

export default MenuItemCard

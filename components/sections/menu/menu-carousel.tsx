'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import MenuItemCard from './menu-item'
import { MenuItem } from '@/config/menu'
import { cn } from '@/lib/utils'

interface MenuCarouselProps {
	items: MenuItem[]
	showPrice?: boolean
}

/**
 * Carousel component for displaying menu items
 * Uses Embla Carousel for smooth scrolling and navigation
 */
const MenuCarousel = ({ items, showPrice = false }: MenuCarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		loop: true,
		breakpoints: {
			'(min-width: 768px)': { slidesToScroll: 2 },
			'(min-width: 1024px)': { slidesToScroll: 3 },
		},
	})

	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
	const [selectedIndex, setSelectedIndex] = useState(0)

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return

		onSelect()
		emblaApi.on('select', onSelect)
		emblaApi.on('reInit', onSelect)

		return () => {
			emblaApi.off('select', onSelect)
			emblaApi.off('reInit', onSelect)
		}
	}, [emblaApi, onSelect])

	return (
		<div className='relative w-full px-12 md:px-16'>
			{/* Carousel Container */}
			<div className='overflow-hidden' ref={emblaRef}>
				<div className='flex gap-6 lg:gap-8'>
					{items.map(item => (
						<div
							key={item.id}
							className='flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-21.33px)] min-w-0'
						>
							<MenuItemCard item={item} showPrice={showPrice} />
						</div>
					))}
				</div>
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={scrollPrev}
				disabled={prevBtnDisabled}
				className={cn(
					'absolute left-0 top-1/2 -translate-y-1/2',
					'z-20 flex items-center justify-center',
					'w-12 h-12 rounded-full bg-white shadow-lg',
					'text-dark hover:text-primary',
					'transition-all duration-200',
					'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
					'disabled:opacity-50 disabled:cursor-not-allowed',
					'hover:scale-110 active:scale-95'
				)}
				aria-label='Previous slide'
			>
				<FaChevronLeft className='w-5 h-5' />
			</button>

			<button
				onClick={scrollNext}
				disabled={nextBtnDisabled}
				className={cn(
					'absolute right-0 top-1/2 -translate-y-1/2',
					'z-20 flex items-center justify-center',
					'w-12 h-12 rounded-full bg-white shadow-lg',
					'text-dark hover:text-primary',
					'transition-all duration-200',
					'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
					'disabled:opacity-50 disabled:cursor-not-allowed',
					'hover:scale-110 active:scale-95'
				)}
				aria-label='Next slide'
			>
				<FaChevronRight className='w-5 h-5' />
			</button>

			{/* Dots Indicator */}
			{items.length > 3 && (
				<div className='flex justify-center gap-2 mt-8'>
					{items.map((_, index) => (
						<button
							key={index}
							onClick={() => emblaApi?.scrollTo(index)}
							className={cn(
								'w-2 h-2 rounded-full transition-all duration-200',
								selectedIndex === index
									? 'bg-primary w-8'
									: 'bg-dark/30 hover:bg-dark/50'
							)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default MenuCarousel

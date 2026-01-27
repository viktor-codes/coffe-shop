'use client'

import { useState } from 'react'
import { MenuItem } from '@/config/menu'
import { cn } from '@/lib/utils'

type MenuCategory = 'breakfast' | 'coffee' | 'desserts' | 'all'

const categories: { id: MenuCategory; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'breakfast', label: 'Breakfast' },
	{ id: 'coffee', label: 'Coffee' },
	{ id: 'desserts', label: 'Desserts' },
]

interface MenuTabsProps {
	items: MenuItem[]
	onFilterChange: (filteredItems: MenuItem[]) => void
}

export const MenuTabs = ({ items, onFilterChange }: MenuTabsProps) => {
	const [activeCategory, setActiveCategory] = useState<MenuCategory>('all')

	const handleCategoryChange = (category: MenuCategory) => {
		setActiveCategory(category)
		const filtered =
			category === 'all'
				? items
				: items.filter(item => item.category === category)
		onFilterChange(filtered)
	}

	return (
		<div className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12'>
			{categories.map(category => (
				<button
					key={category.id}
					onClick={() => handleCategoryChange(category.id)}
					className={cn(
						'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-200',
						'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
						activeCategory === category.id
							? 'bg-primary text-light shadow-md scale-105'
							: 'bg-white text-dark border-2 border-dark/10 hover:border-primary hover:text-primary'
					)}
					aria-pressed={activeCategory === category.id}
					aria-label={`Filter menu by ${category.label}`}
				>
					{category.label}
				</button>
			))}
		</div>
	)
}

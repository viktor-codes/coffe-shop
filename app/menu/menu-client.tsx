'use client'

import { useState } from 'react'
import { MenuItem } from '@/config/menu'
import MenuItemCard from '@/components/sections/menu/menu-item'
import { MenuTabs } from '@/components/sections/menu/menu-tabs'

interface MenuPageClientProps {
	items: MenuItem[]
}

export const MenuPageClient = ({ items }: MenuPageClientProps) => {
	const [filteredItems, setFilteredItems] = useState<MenuItem[]>(items)

	return (
		<>
			{/* Category Tabs */}
			<MenuTabs items={items} onFilterChange={setFilteredItems} />

			{/* Menu Grid */}
			{filteredItems.length > 0 ? (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
					{filteredItems.map(item => (
						<MenuItemCard key={item.id} item={item} showPrice />
					))}
				</div>
			) : (
				<div className='text-center py-12'>
					<p className='text-dark/60 text-lg'>
						No items found in this category.
					</p>
				</div>
			)}
		</>
	)
}

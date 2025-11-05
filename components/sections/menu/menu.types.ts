import { StaticImageData } from 'next/image'

export interface MenuItem {
	id: string
	title: string
	description: string
	image: StaticImageData
	category: 'coffee' | 'pastry' | 'special'
	price?: number
}

export interface MenuProps {
	items: MenuItem[]
	title?: string
	description?: string
	showPrices?: boolean
	className?: string
}

export interface MenuItemCardProps {
	item: MenuItem
	showPrice?: boolean
}

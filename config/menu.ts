import { StaticImageData } from 'next/image'
import menuImage1 from '@/assets/menu-item-1.webp'
import menuImage2 from '@/assets/menu-item-2.webp'
import menuImage3 from '@/assets/menu-item-3.webp'

export interface MenuItem {
	id: string
	title: string
	description: string
	image: StaticImageData
	category: 'coffee' | 'pastry' | 'special'
	price?: number
}

export const menuItems: MenuItem[] = [
	{
		id: 'espresso-elegance',
		title: 'Espresso Elegance',
		description:
			'A rich, aromatic journey crafted from the finest single-origin beans.',
		image: menuImage1,
		category: 'coffee',
		price: 4.5,
	},
	{
		id: 'signature-latte',
		title: 'Signature Latte',
		description:
			'Our classic blend, perfectly frothed with your choice of milk and a touch of sweetness.',
		image: menuImage2,
		category: 'coffee',
		price: 5.5,
	},
	{
		id: 'morning-pastries',
		title: 'Morning Pastries',
		description:
			'Freshly baked daily, our pastries are the perfect companion to your morning brew.',
		image: menuImage3,
		category: 'pastry',
		price: 3.5,
	},
]

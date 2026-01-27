import { StaticImageData } from 'next/image'
import menuImage1 from '@/assets/menu-item-1.webp'
import menuImage2 from '@/assets/menu-item-2.webp'
import menuImage3 from '@/assets/menu-item-3.webp'

export interface MenuItem {
	id: string
	title: string
	description: string
	image: StaticImageData
	category: 'breakfast' | 'coffee' | 'desserts'
	price: number
}

export const menuItems: MenuItem[] = [
	// Breakfast items
	{
		id: 'avocado-toast',
		title: 'Avocado Toast',
		description:
			'Sourdough bread topped with smashed avocado, cherry tomatoes, and poached eggs.',
		image: menuImage3,
		category: 'breakfast',
		price: 12.5,
	},
	{
		id: 'morning-pastries',
		title: 'Morning Pastries',
		description:
			'Freshly baked daily, our pastries are the perfect companion to your morning brew.',
		image: menuImage3,
		category: 'breakfast',
		price: 3.5,
	},
	{
		id: 'breakfast-bowl',
		title: 'Acai Breakfast Bowl',
		description:
			'Fresh acai blend topped with granola, fresh berries, and honey drizzle.',
		image: menuImage2,
		category: 'breakfast',
		price: 9.5,
	},
	// Coffee items
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
		id: 'cappuccino-classic',
		title: 'Classic Cappuccino',
		description:
			'Perfect balance of espresso, steamed milk, and velvety foam.',
		image: menuImage1,
		category: 'coffee',
		price: 5.0,
	},
	{
		id: 'cold-brew',
		title: 'Cold Brew Delight',
		description:
			'Smooth, refreshing cold brew steeped for 24 hours for maximum flavor.',
		image: menuImage2,
		category: 'coffee',
		price: 6.0,
	},
	// Desserts
	{
		id: 'chocolate-cake',
		title: 'Chocolate Lava Cake',
		description:
			'Warm, gooey chocolate cake with a molten center, served with vanilla ice cream.',
		image: menuImage3,
		category: 'desserts',
		price: 8.5,
	},
	{
		id: 'tiramisu',
		title: 'Classic Tiramisu',
		description:
			'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.',
		image: menuImage1,
		category: 'desserts',
		price: 7.5,
	},
	{
		id: 'cheesecake',
		title: 'New York Cheesecake',
		description:
			'Creamy, rich cheesecake with a graham cracker crust and berry compote.',
		image: menuImage2,
		category: 'desserts',
		price: 8.0,
	},
]

export interface NavItem {
	name: string
	href: string
	external?: boolean
}

export const mainNavigation: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Menu', href: '/menu' },
	{ name: 'Blog', href: '/articles' },
	{ name: 'Contact', href: '/contact' },
]

export const footerNavigation: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Menu', href: '/menu' },
	{ name: 'Blog', href: '/articles' },
	{ name: 'Contact', href: '/contact' },
]

export const ctaConfig = {
	reservation: {
		text: 'Reservation',
		href: '/reservation',
	},
	viewMenu: {
		text: 'View Menu',
		href: '/menu',
	},
	learnMore: {
		text: 'Learn More',
		href: '/about',
	},
}

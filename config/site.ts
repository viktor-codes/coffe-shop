export const siteConfig = {
	name: 'Kopikap',
	description: 'Best Coffee Taste, Best Cozy Place',
	tagline: 'Step inside, where every cup is perfectly brewed',
	url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kopikap.com',
	ogImage: '/og-image.jpg',
	address: '18 West Buffalo St Dublin, Ireland N39 R585',
	email: 'hello@kopikap.com',
	phone: '123-456-7890',
	founded: 2010,
	social: {
		facebook: 'https://facebook.com/kopikap',
		instagram: 'https://instagram.com/kopikap',
		twitter: 'https://twitter.com/kopikap',
	},
} as const

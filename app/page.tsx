import type { Metadata } from 'next'
import Hero from '@/components/sections/hero/hero'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Features from '@/components/sections/features/features'
import Menu from '@/components/sections/menu/menu'
import About from '@/components/sections/about/about'
import Testimonials from '@/components/sections/testimonials/testimonials'
import Reservation from '@/components/sections/reservation/reservation'
import Articles from '@/components/sections/articles/articles'

import aboutImage from '@/assets/about.webp'
import { features } from '@/config/features'
import { articles } from '@/config/articles'
import { menuItems } from '@/config/menu'
import { testimonialsData } from '@/config/testimonials'
import ctaImage from '@/assets/cta-image.webp'
import { siteConfig } from '@/config/site'
import { getFooterData } from '@/lib/footer-data'

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Step inside Kopikap, where every cup is perfectly brewed and the atmosphere invites you to stay a while. Premium coffee, delicious pastries, and cozy atmosphere.',
	openGraph: {
		title: 'Kopikap - Best Coffee Taste, Best Cozy Place',
		description:
			'Step inside Kopikap, where every cup is perfectly brewed and the atmosphere invites you to stay a while. Premium coffee, delicious pastries, and a cozy atmosphere.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kopikap - Best Coffee Taste, Best Cozy Place',
		description:
			'Step inside Kopikap, where every cup is perfectly brewed and the atmosphere invites you to stay a while. Premium coffee, delicious pastries, and a cozy atmosphere.',
	},
}

export default function Home() {
	const footerData = getFooterData()
	return (
		<>
			<Navbar />
			<Hero 
			title='Best Coffee Taste, Best Cozy Place'
			description='Step inside, where every cup is perfectly brewed and the atmosphere invites you to stay a while.'
		
			/>
			{/* Features Section */}
			<Features features={features} />
			<Menu items={menuItems} />
			<About
				title='Our Story'
				description={`Welcome to Kopikap, where coffee meets community. Founded in ${siteConfig.founded}, we've been serving exceptional coffee and creating memorable experiences for over a decade. Our journey began with a simple belief: that great coffee should be accessible, and every cup should tell a story.`}
				image={aboutImage}
				imageAlt='Kopikap coffee shop interior with cozy atmosphere'
				founded={siteConfig.founded}
				ctaText='Learn More'
				ctaHref='/about'
			/>
			<Testimonials testimonials={testimonialsData} />
			<Reservation
				title='Book Your Table'
				description='Reserve your spot today and experience the perfect blend of great coffee and cozy atmosphere.'
				backgroundImage={ctaImage}
				imageAlt='Cafe interior'
			/>
			<Articles articles={articles} title='Latest Articles' showViewMore />
			<Footer {...footerData} />
		</>
	)
}

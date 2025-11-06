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
import { openingHours } from '@/config/opening-hours'
import { features } from '@/config/features'
import { articles } from '@/config/articles'
import { menuItems } from '@/config/menu'
import { testimonialsData } from '@/config/testimonials'
import ctaImage from '@/assets/cta-image.webp'
import { siteConfig } from '@/config/site'
import { getFooterData } from '@/lib/footer-data'

export default function Home() {
	const footerData = getFooterData()
	return (
		<>
			<Navbar />
			<Hero />
			{/* Features Section */}
			<Features features={features} />
			<Menu items={menuItems} />
			<About
				title='Our Story'
				description='...'
				image={aboutImage}
				imageAlt='Coffee machine'
				founded={2010}
			/>
			<Testimonials testimonials={testimonialsData} />
			<Reservation
				title='Book Your Table'
				description='Reserve your spot today'
				backgroundImage={ctaImage}
				imageAlt='Cafe interior'
			/>
			<Articles articles={articles} title='Latest Articles' showViewMore />
			<Footer {...footerData} />
		</>
	)
}
